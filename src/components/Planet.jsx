import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// A single procedurally-shaded planet sphere with an optional ring.
// No external texture files are loaded (keeps the project dependency-free
// and avoids network requests at runtime) — color and a fresnel-ish rim
// glow are done with plain materials.
export default function Planet({
  color = '#5b8def',
  size = 1,
  ring = false,
  rotationSpeed = 0.08,
  position = [0, 0, 0],
}) {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * rotationSpeed;
    if (ringRef.current) ringRef.current.rotation.z += delta * (rotationSpeed * 0.15);
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 48, 48]} />
        <meshStandardMaterial
          color={color}
          roughness={0.55}
          metalness={0.25}
          emissive={color}
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* soft outer glow */}
      <mesh scale={1.35}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.08} />
      </mesh>

      {ring && (
        <mesh ref={ringRef} rotation={[Math.PI / 2.4, 0, 0]}>
          <ringGeometry args={[size * 1.4, size * 1.9, 64]} />
          <meshBasicMaterial color={color} transparent opacity={0.35} side={2} />
        </mesh>
      )}
    </group>
  );
}
