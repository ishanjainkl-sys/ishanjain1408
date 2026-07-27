export type ProjectLink = { label: string; href: string }

export type Project = {
  id: string
  title: string
  year: string
  role: string
  stack: string[]
  summary: string
  highlights: string[]
  links: ProjectLink[]
}

export const profile = {
  name: 'Ishan Jain',
  title: 'Associate Software Engineer',
  location: 'Udaipur, Rajasthan',
  email: 'ishanjain1408@gmail.com',
  phone: '+91 7728919575',
  headline: 'Building reliable product experiences across web and desktop.',
  summary:
    'I ship polished React and Electron features, tighten performance, and connect clean APIs — from camera workflows to AI-assisted tools.',
  links: {
    linkedin: 'https://www.linkedin.com/in/ishanjain1408',
    github: 'https://github.com/ishanjain1408',
    website: 'https://ishanjain1408.vercel.app',
    archive: 'https://sites.google.com/view/ishanjain1408',
  },
}

/** Flagship case studies — strongest recent work */
export const projects: Project[] = [
  {
    id: 'insurance-ai',
    title: 'Insurance Policy AI',
    year: '2025',
    role: 'Full-stack · AI assistant',
    stack: ['React', 'Vite', 'Tailwind', 'FastAPI', 'FAISS', 'Hugging Face'],
    summary:
      'An AI-driven insurance policy assistant that turns dense policy PDFs into accurate, filterable answers.',
    highlights: [
      'Secure document upload with FastAPI backend and React/Vite frontend',
      'Ingestion pipeline: chunking, Hugging Face embeddings, FAISS vector index',
      'LLM agent routing with policy type and region filters for contextual answers',
    ],
    links: [],
  },
  {
    id: 'airbnb',
    title: 'Airbnb Clone',
    year: '2024',
    role: 'Full-stack · MERN',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    summary:
      'A full-stack booking platform with searchable listings, adaptive UI, and role-based reservations.',
    highlights: [
      '16+ property listings with search filters and booking flows',
      'Role-based access for hosts and guests',
      'Clean architecture focused on maintainability and scale',
    ],
    links: [],
  },
  {
    id: 'startupflora',
    title: 'StartupFlora Auth System',
    year: '2024',
    role: 'Backend · Security',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    summary:
      'A production-minded auth backend with HR approval, OTP resets, and full activity audit trails.',
    highlights: [
      'JWT login supporting 100+ users with session and device limits',
      'Fine-grained roles, permissions, and domain validation on registration',
      'OTP password resets plus Postman collection for API documentation',
    ],
    links: [
      {
        label: 'Related auth work',
        href: 'https://github.com/ishanjain1408/Role-Based-Authentication-System',
      },
    ],
  },
]

/**
 * Earlier public work (from previous Google Sites portfolio + GitHub).
 * Kept lighter so the page stays premium and focused.
 */
export const earlierWork: Project[] = [
  {
    id: 'store-locator',
    title: 'Leaflet Store Locator',
    year: '2023',
    role: 'Maps · Frontend',
    stack: ['Leaflet.js', 'JavaScript'],
    summary:
      'Interactive pizza-outlet store locator that helps users find nearby locations across devices.',
    highlights: [
      'Map-based search that cut user search time by ~30% in production work at Codextra',
      'Mobile-friendly interactive mapping with Leaflet',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/ishanjain1408/leaflet-store-locator' },
    ],
  },
  {
    id: 'angular-chat',
    title: 'Angular Chat (Socket.io)',
    year: '2022',
    role: 'Realtime · Angular',
    stack: ['Angular', 'Socket.io', 'Node.js'],
    summary:
      'Real-time chat integration in Angular using Socket.io for live messaging experiences.',
    highlights: [
      'Peer messaging with live event-driven updates',
      'End-to-end chat flow across client and Socket.io backend',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/ishanjain1408/Angular-chat-app' },
    ],
  },
  {
    id: 'movies-angular',
    title: 'Movie Ratings App',
    year: '2022',
    role: 'SPA · Angular',
    stack: ['Angular', 'HTML', 'CSS'],
    summary:
      'Complete Angular application for browsing and rating movies with a structured SPA architecture.',
    highlights: [
      'Full Angular app structure for listings and ratings',
      'Focus on clean component patterns and usable UI',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/ishanjain1408/movies-angular' },
    ],
  },
  {
    id: 'covid-tracker',
    title: 'COVID-19 Live Stats',
    year: '2021',
    role: 'Frontend · Responsive',
    stack: ['HTML', 'CSS', 'JavaScript'],
    summary:
      'Responsive live-stats tracker for COVID-19 data — an early public project from my first portfolio.',
    highlights: [
      'Responsive layout for desktop and mobile',
      'Live stats presentation for at-a-glance insights',
    ],
    links: [
      { label: 'Archive site', href: 'https://sites.google.com/view/ishanjain1408' },
    ],
  },
  {
    id: 'zippy',
    title: 'Zippy — Company Landing Page',
    year: '2021',
    role: 'Frontend · Marketing',
    stack: ['HTML', 'CSS', 'JavaScript'],
    summary:
      'Single-page marketing website for a fictional company brand named Zippy.',
    highlights: [
      'Focused one-page company presence',
      'Early practice in layout, hierarchy, and conversion-minded sections',
    ],
    links: [
      { label: 'Archive site', href: 'https://sites.google.com/view/ishanjain1408' },
    ],
  },
]

export const experience = [
  {
    company: 'Kadel Labs',
    location: 'Udaipur',
    role: 'Associate Software Engineer',
    period: 'Nov 2025 — Present',
    impact: [
      'Built and enhanced React.js / Electron features for TimeMachine — file management, recording playback, patrol monitoring, and 360° viewers across web and desktop.',
      'Resolved 25+ UI, performance, and functionality defects across PDF/image viewers, patrol workflows, streaming, and fullscreen experiences.',
      'Designed reusable components, integrated REST APIs, wrote unit tests, and drove Git-based reviews for consistent cross-platform releases.',
    ],
  },
  {
    company: 'In Time Tec',
    location: 'Jaipur',
    role: 'Junior Software Engineer',
    period: 'Aug 2024 — Nov 2024',
    impact: [
      'Engineered a TypeScript React/Redux to-do app that improved UI responsiveness by 35%.',
      'Shipped a mobile-first Recipe Explorer in React Native with 30% faster load times via local storage.',
      'Created 12+ reusable components to cut duplication and lift mobile/web performance.',
    ],
  },
  {
    company: 'Codextra Protech Pvt Ltd',
    location: 'Jaipur',
    role: 'Trainee Engineer',
    period: 'Apr 2023 — Sep 2023',
    impact: [
      'Built scalable backends for 2+ e-commerce and health apps; optimized MySQL for 40% faster access.',
      'Shipped a Leaflet.js store locator that cut user search time by 30% across devices.',
      'Improved indexed queries and visualization paths, boosting data fetch speed by 50%.',
    ],
  },
]

export const education = {
  school: 'Poornima College of Engineering',
  degree: 'B.Tech, Computer Science & Engineering',
  period: 'Aug 2019 — Jul 2023',
  detail: '7.38 CGPA',
}

export const achievements = [
  {
    title: 'Kalpavriksha Program',
    period: 'Jul 2024',
    detail: 'Applied DSA, OS, Flutter, and Python across 2 real-world engineering projects.',
  },
  {
    title: 'Technovation 2021 — 2nd Place',
    period: 'Jan 2022',
    detail: 'Published research on image recognition using a Google Lens clone.',
  },
  {
    title: 'Google Cloud Ready Facilitator',
    period: 'Jul 2021',
    detail: 'Completed 3 milestones — 12 skill badges and 24 Qwiklabs quests.',
  },
]

export const skills = {
  Languages: ['JavaScript (ES6+)', 'TypeScript', 'C++', 'SQL', 'Python'],
  Frontend: [
    'React.js',
    'React Native',
    'Electron',
    'Angular',
    'HTML5',
    'CSS3',
    'Redux',
  ],
  Backend: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT', 'Socket.io'],
  Database: ['MongoDB', 'MySQL', 'PostgreSQL'],
  Tools: ['Git', 'GitHub', 'Postman', 'Vite', 'Leaflet.js', 'Render', 'FAISS'],
}
