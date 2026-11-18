// ============================================================================
// PORTFOLIO DATA
// Edit everything in this file to personalize the site. Nothing else needs
// to change for basic content updates.
// ============================================================================

export const profile = {
  name: 'Ankit Kumar',
  tagline: 'Computer Science Student',
  subtagline: 'Full Stack Developer · Cloud & DevOps Enthusiast',
  badge: 'Personal Portfolio',
  avatar: '/avatar.jpg', // your photo, at public/avatar.jpg
  about: {
    heading: 'About Me',
    bio: "I'm a Computer Science student building full-stack products with the MERN stack and shipping them with real cloud and DevOps pipelines — Docker, Kubernetes, Jenkins CI/CD and Terraform. I've solved 500+ DSA problems and enjoy turning ideas into production-ready systems.",
    fields: [
      { label: 'Name', value: 'Ankit Kumar' },
      { label: 'University', value: 'Lovely Professional University' },
      { label: 'Degree', value: 'B.Tech Computer Science & Engineering (CGPA 6.6)' },
      { label: 'Role', value: 'Full Stack Developer / Cloud & DevOps Enthusiast' },
      { label: 'Interests', value: 'Full Stack Development, Cloud Computing, DevOps, DSA' },
    ],
  },
  socials: {
    github: 'https://github.com/curiosankitkumar',
    linkedin: 'https://linkedin.com/in/ankit-kumar-',
    email: 'mailto:curios.ankitkumar@gmail.com',
  },
};

// Each project renders as a floating planet. `ring` controls whether the
// planet has a Saturn-like ring, `hue` is the base color used for both the
// 3D material and the glow.
export const projects = [
  {
    id: 'musify',
    name: 'Musify',
    description:
      'Full-stack music streaming platform with album browsing, song playback and a responsive UI. Clerk authentication, protected routes, admin content management and real-time chat via Socket.IO, with Cloudinary media storage. Deployed with Docker, Kubernetes, Jenkins CI/CD and Terraform-based cloud infra.',
    stack: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Socket.io',
      'Clerk',
      'Cloudinary',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Terraform',
    ],
    github: 'https://github.com/curiosankitkumar',
    demo: 'https://github.com/curiosankitkumar',
    hue: '#9b7bff',
    ring: true,
    size: 1.15,
    date: "Sep '26",
  },
  {
    id: 'realtime-chat',
    name: 'Realtime Chat Application',
    description:
      'Full-stack real-time chat app built with the MERN stack and Socket.io. JWT authentication, friend requests, group chats and media sharing via Firebase Storage — React frontend on Vercel, Node backend on Render.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'JWT', 'Firebase Storage'],
    github: 'https://github.com/curiosankitkumar',
    demo: 'https://github.com/curiosankitkumar',
    hue: '#f2a65a',
    ring: false,
    size: 0.95,
    date: "May '25",
  },
  {
    id: 'cafe-website',
    name: 'Cafe Website',
    description:
      'Fully responsive café website with consistent design across devices — animated navigation, hover effects and dynamic transitions, organized as modular code for scalability.',
    stack: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Git', 'GitHub Pages'],
    github: 'https://github.com/curiosankitkumar',
    demo: 'https://github.com/curiosankitkumar',
    hue: '#6fe8e0',
    ring: false,
    size: 0.85,
    date: "Jun '25",
  },
];

export const reports = [
  { id: 'TX-001', title: 'The Joy of Computing using Python — NPTEL', type: "Nov '25" },
  { id: 'TX-002', title: 'SQL (Intermediate) — HackerRank', type: "Nov '25" },
  { id: 'TX-003', title: 'Introduction to Python — Infosys', type: "Dec '23" },
  { id: 'TX-004', title: 'Legacy Responsive Web Design V8 — FreeCodeCamp', type: "Oct '23" },
];

export const achievements = [
  'Solved 500+ DSA problems on LeetCode, HackerRank, CodeChef and GeeksforGeeks',
  '5-Star badges in C++, Java and Python, and a 4-Star badge in C on HackerRank',
];

export const codingProfiles = [
  { label: 'GitHub', url: 'https://github.com/curiosankitkumar' },
  { label: 'LeetCode', url: 'https://leetcode.com' },
  { label: 'HackerRank', url: 'https://hackerrank.com' },
  { label: 'CodeChef', url: 'https://codechef.com' },
  { label: 'GeeksforGeeks', url: 'https://geeksforgeeks.org' },
];

// Experience / education constellation. Each node is a star; lines connect
// consecutive nodes within the same group.
export const experience = [
  {
    group: 'Education',
    nodes: [
      {
        title: 'B.Tech, Computer Science & Engineering',
        subtitle: 'Lovely Professional University, Punjab · CGPA 6.6',
        period: "Since Aug '23",
      },
      {
        title: 'Intermediate',
        subtitle: 'Jehanabad College, Jehanabad, Bihar · 65%',
        period: "Apr '20 — Mar '22",
      },
      {
        title: 'Matriculation',
        subtitle: 'P.P.M. School, Jehanabad, Bihar · 56%',
        period: "Apr '18 — Mar '20",
      },
    ],
  },
  {
    group: 'Training',
    nodes: [
      {
        title: 'Data Structures & Algorithms using Java',
        subtitle: 'Arrays, linked lists, stacks, queues, trees, hash maps, recursion & DP',
        period: "Jun '25",
      },
    ],
  },
];

export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    color: '#5b8def',
    skills: ['C++', 'JavaScript', 'C', 'Python', 'Java'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    color: '#6fe8e0',
    skills: ['HTML', 'CSS', 'Bootstrap', 'Node.js', 'React'],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    color: '#9b7bff',
    skills: ['MySQL', 'MongoDB', 'AWS', 'Microsoft Azure', 'Google Cloud'],
  },
  {
    id: 'soft-skills',
    label: 'Soft Skills',
    color: '#f2a65a',
    skills: ['Problem-Solving', 'Team Player', 'Project Management', 'Adaptability'],
  },
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'reports', label: 'Reports' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
];
