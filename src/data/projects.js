export const projects = [
  {
    id: 1,
    title: 'Privacy-First Chatbot',
    description:
      "Architected a fully local, privacy-first RAG chatbot with zero external data transmission — PDFs, embeddings, chat history, and LLM inference run entirely on the user's machine.",
    tech: [
      'Next.js',
      'FastAPI',
      'LangChain',
      'ChromaDB',
      'SQLite',
      'Ollama',
      'Docker',
      'TypeScript',
      'Python',
    ],
    github: 'https://github.com/rustom-yadav/privacy-first-chatbot',
    demo: '',
    image: '/projects-screenshots/Privacy-First-Chatbot.png',
    imageAlt: 'Privacy-First Chatbot',
    highlights: [
      'Implemented a 3-strategy hybrid retrieval pipeline (semantic + MMR + BM25) with exact source attribution, and persistent chat sessions stored in SQLite.',
      'Orchestrated 3 containerized services via Docker Compose with one-command deployment, featuring a glassmorphism UI with real-time health monitoring.',
    ],
  },
  {
    id: 2,
    title: 'Mentovara - Full Stack EdTech Platform',
    description:
      'Developed a multi-role EdTech platform (instructor + student) with course management, video streaming, and enrollment — scoring 95 on Lighthouse.',
    tech: [
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Docker',
      'GitHub Actions',
      'Razorpay',
      'Nodemailer',
      'SMTP Service',
      'Multer',
      'Cloudinary',
    ],
    github: 'https://github.com/rustom-yadav/mentovara-edtech',
    demo: 'https://mentovara.vercel.app/',
    image: '/projects-screenshots/Mentovara.png',
    imageAlt: 'Mentovara - Full Stack EdTech Platform',
    highlights: [
      'Integrated Razorpay payment gateway with webhook-driven enrollment and JWT-secured REST APIs with SMTP-based authentication.',
      'Containerized the full stack with Docker and configured CI/CD via GitHub Actions for consistent multi-environment deployments.',
    ],
  },
  {
    id: 3,
    title: 'Video Streaming Backend API',
    description:
      'Developed a production-ready backend API with user authentication, cloud-based video uploads via Cloudinary, and efficient streaming through modular RESTful endpoints.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Multer', 'Cloudinary', 'JWT'],
    github: 'https://github.com/rustom-yadav/rustom-backend-project',
    demo: 'https://rustom-backend-project.onrender.com/',
    image: '/projects-screenshots/Backend-project-youtube.png',
    imageAlt: 'Video Streaming Backend API',
    highlights: [
      'Hardened the API with rate limiting, input validation, and centralized error handling for reliable performance.',
    ],
  },
];
