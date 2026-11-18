import React, { useEffect, useRef } from 'react';

// Lightweight canvas-based starfield. Using 2D canvas instead of a 3D scene
// keeps this ambient background layer cheap to run behind every section,
// while the Hero and Projects sections use real WebGL (react-three-fiber)
// for the actual 3D planets.
export default function StarField() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const starsRef = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const STAR_COUNT = isMobile ? 160 : 420;

    function makeStars() {
      const stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.4 + 0.3,
          depth: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          glow: Math.random() > 0.92,
        });
      }
      starsRef.current = stars;
    }
    makeStars();

    function onResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      makeStars();
    }
    function onMouseMove(e) {
      mouse.current.x = (e.clientX / width - 0.5) * 2;
      mouse.current.y = (e.clientY / height - 0.5) * 2;
    }
    function onScroll() {
      scrollY.current = window.scrollY;
    }

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    let frame = 0;
    function draw() {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // subtle nebula glows
      const g1 = ctx.createRadialGradient(width * 0.2, height * 0.15, 0, width * 0.2, height * 0.15, width * 0.5);
      g1.addColorStop(0, 'rgba(91,141,239,0.08)');
      g1.addColorStop(1, 'rgba(91,141,239,0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const g2 = ctx.createRadialGradient(width * 0.85, height * 0.7, 0, width * 0.85, height * 0.7, width * 0.45);
      g2.addColorStop(0, 'rgba(155,123,255,0.07)');
      g2.addColorStop(1, 'rgba(155,123,255,0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      const parallaxBase = scrollY.current * 0.04;

      for (const s of starsRef.current) {
        const px = s.x + mouse.current.x * 10 * s.depth;
        const py = (s.y + parallaxBase * s.depth) % height;
        const twinkle = prefersReduced ? 1 : 0.55 + Math.sin(frame * s.twinkleSpeed + s.twinklePhase) * 0.45;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${0.5 * twinkle + 0.15})`;
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();

        if (s.glow) {
          ctx.beginPath();
          const glowGrad = ctx.createRadialGradient(px, py, 0, px, py, s.r * 6);
          glowGrad.addColorStop(0, `rgba(150,180,255,${0.25 * twinkle})`);
          glowGrad.addColorStop(1, 'rgba(150,180,255,0)');
          ctx.fillStyle = glowGrad;
          ctx.arc(px, py, s.r * 6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
