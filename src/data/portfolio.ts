import type { Skill, Experience, Project, Education, Publication, Award } from '@/types';

export const personalInfo = {
  name: 'Rayhan Pervej',
  role: 'Software Engineer',
  roles: ['Software Engineer', 'Flutter Developer', 'AI/LLM Engineer', 'GenAI Builder'],
  tagline: 'Building AI-Powered Mobile & Backend Solutions',
  bio: 'Junior Solution Developer at Shadhin Lab LLC with hands-on experience building production-ready Flutter applications and GenAI backend systems. I specialize in API-driven mobile apps, autonomous AI agents, and RAG-based chatbot platforms for real-world use cases.',
  email: 'rayhanpervej12@gmail.com',
  linkedin: 'https://linkedin.com/in/rayhanpervej',
  github: 'https://github.com/Rayhan-Pervej',
  location: 'Bashundhara R/A, Dhaka, Bangladesh',
  phone: '+880 16 1106 0324',
  photo: '/images/profile/profile.png',
  aboutPhoto: '/images/about/about.png',
  available: true,
};

export const stats = [
  { label: 'Publications', value: '1' },
  { label: 'Awards', value: '3' },
  { label: 'Projects', value: '10+' },
  { label: 'Experience', value: '1yr' },
];

export const skills: Skill[] = [
  // Mobile
  { name: 'Flutter', category: 'mobile' },
  { name: 'Dart', category: 'mobile' },
  { name: 'BLoC', category: 'mobile' },
  { name: 'Provider', category: 'mobile' },
  { name: 'MVP', category: 'mobile' },
  { name: 'SOLID', category: 'mobile' },
  { name: 'GoRouter', category: 'mobile' },
  { name: 'Dio', category: 'mobile' },
  // Backend
  { name: 'Python', category: 'backend' },
  { name: 'Flask', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Flask-SocketIO', category: 'backend' },
  { name: 'SQLAlchemy', category: 'backend' },
  { name: 'Celery', category: 'backend' },
  { name: 'Boto3', category: 'backend' },
  { name: 'Gunicorn', category: 'backend' },
  { name: 'PyMuPDF', category: 'backend' },
  // AI / LLM
  { name: 'LangChain', category: 'ai' },
  { name: 'LangGraph', category: 'ai' },
  { name: 'RAG', category: 'ai' },
  { name: 'AWS Bedrock', category: 'ai' },
  { name: 'OpenAI API', category: 'ai' },
  { name: 'Google Gemini', category: 'ai' },
  { name: 'Prompt Engineering', category: 'ai' },
  { name: 'Agentic Workflows', category: 'ai' },
  { name: 'FAISS', category: 'ai' },
  { name: 'BM25', category: 'ai' },
  { name: 'ChromaDB', category: 'ai' },
  // Tools
  { name: 'Git & GitHub', category: 'tools' },
  { name: 'Firebase', category: 'tools' },
  { name: 'MongoDB', category: 'tools' },
  { name: 'MySQL', category: 'tools' },
  { name: 'PostgreSQL', category: 'tools' },
  { name: 'Redis', category: 'tools' },
  { name: 'Supabase', category: 'tools' },
  { name: 'Pytest', category: 'tools' },
];

export const experiences: Experience[] = [
  {
    company: 'Shadhin Lab LLC',
    role: 'Junior Solution Developer',
    period: 'May 2025 – Present',
    location: 'Dhaka, Bangladesh',
    type: 'fulltime',
    projects: [
      {
        name: 'Shadhin AI',
        description:
          'Built an AI agent backend that autonomously decides which action to take (web search, document lookup, or human escalation) based on user queries. Designed a multi-step reasoning workflow with loop safeguards and developed a real-time streaming chat API supporting AWS Bedrock and OpenAI.',
        tags: ['LangGraph', 'Python', 'AWS Bedrock', 'OpenAI', 'Streaming API', 'Agentic AI'],
      },
      {
        name: 'NRB Family Support App',
        description:
          'Built a dynamic service booking system in Flutter with API-driven forms supporting multiple field types, field dependencies, and validation rules. Integrated SSLCommerz payment gateway and implemented push notifications with multi-language support.',
        tags: ['Flutter', 'Provider', 'MVP', 'SSLCommerz', 'REST APIs', 'Push Notifications'],
      },
      {
        name: 'Alimaan Institute App',
        description:
          'Built a Flutter app for an online Islamic educational institute, enabling course browsing, enrollment, and access to digital learning resources. Implemented multi-language support with a clean, responsive UI.',
        tags: ['Flutter', 'REST APIs', 'Multi-language', 'Provider', 'E-learning'],
      },
    ],
  },
  {
    company: 'Shadhin Lab LLC',
    role: 'Mobile Application Developer Intern',
    period: 'Feb 2025 – May 2025',
    location: 'Dhaka, Bangladesh',
    type: 'intern',
    projects: [
      {
        name: 'ProTask – Internal Productivity App',
        description:
          'Built core UI components and business logic for an internal task and productivity tracking app. Integrated REST APIs for task management, user assignments, and progress tracking. Collaborated with senior developers to optimize performance and maintain clean code standards.',
        tags: ['Flutter', 'BLoC', 'REST APIs', 'Agile/Scrum'],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'ChatIUB',
    description:
      'AI-powered campus knowledge assistant exclusively for IUB students. Features hybrid RAG retrieval (FAISS dense + BM25 sparse + RRF fusion), LLM-based query rewriting, JWT auth with email verification, real-time streaming via WebSockets, and automated data ingestion via Celery. Built full stack — Next.js frontend + Python/Flask backend powered by AWS Bedrock (Claude 3.5 Sonnet) with Supabase PostgreSQL.',
    image: '/images/projects/chatIUB.png',
    tags: ['Python', 'Flask', 'AWS Bedrock', 'FAISS', 'BM25', 'RAG', 'Next.js', 'Supabase', 'Celery', 'Redis'],
    liveUrl: 'https://chatiub.vercel.app/',
    githubUrl: 'https://github.com/Rayhan-Pervej',
    featured: true,
  },
  {
    title: 'AQI Prediction – LSTM / GRU / CNN',
    description:
      'Deep learning models predicting hourly Air Quality Index (AQI) for Dhaka using 7 years of historical data. Compares LSTM, GRU, and 1D-CNN architectures with 24-hour sliding windows and advanced training callbacks.',
    image: '/images/projects/aqi-prediction.png',
    tags: ['Python', 'TensorFlow', 'LSTM', 'GRU', 'CNN', 'Time-Series', 'ML'],
    githubUrl: 'https://github.com/Rayhan-Pervej/AQI-Prediction-LSTM-GRU-CNN',
    featured: false,
  },
  {
    title: 'Kisukinen – E-Commerce App',
    description:
      'Full-featured cross-platform e-commerce mobile app built with Flutter and Firebase. Includes user auth, product catalog, shopping cart, and profile management — powered by GetX state management.',
    image: '/images/projects/kisukinen.png',
    tags: ['Flutter', 'Dart', 'Firebase', 'GetX', 'E-Commerce'],
    githubUrl: 'https://github.com/Rayhan-Pervej/kisukinen',
    featured: false,
  },
  {
    title: 'Halal Media – Streaming Platform',
    description:
      'Cross-platform video streaming app for culturally curated content, built with Flutter. Supports iOS and Android with native platform integrations, asset management, and content delivery.',
    image: '/images/projects/halal-media.png',
    tags: ['Flutter', 'Dart', 'Streaming', 'iOS', 'Android'],
    githubUrl: 'https://github.com/Rayhan-Pervej/Halal-Media',
    featured: false,
  },
];

export const education: Education[] = [
  {
    institution: 'Independent University, Bangladesh (IUB)',
    degree: 'BSc in Computer Science and Engineering',
    period: 'Jan 2020 – Apr 2025',
    location: 'Dhaka, Bangladesh',
  },
  {
    institution: 'Govt. Rajendra College',
    degree: 'Higher Secondary Certificate (HSC) – Science',
    period: 'Jun 2017 – May 2019',
    location: 'Faridpur, Bangladesh',
  },
];

export const publications: Publication[] = [
  {
    title: 'A Critical Review on the Application and Innovation in Smart Fisheries',
    journal: 'Engineering Reports (Wiley)',
    year: 2026,
    url: 'https://doi.org/10.1002/eng2.70608',
    bullets: [
      'Co-authored a peer-reviewed review paper on AI, Machine Learning, and IoT applications in smart fisheries.',
      'Analyzed recent literature covering disease detection, feeding optimization, species identification, and environmental monitoring.',
      'Identified key research challenges and future directions for sustainable and intelligent aquaculture systems.',
    ],
  },
];

export const awards: Award[] = [
  {
    title: 'Champion',
    event: 'Formula E RC Racing Competition – Techfest IUB',
    year: 2024,
    description:
      'Awarded for building a Formula 1-inspired RC car demonstrating speed, control, and engineering innovation.',
    rank: 'champion',
  },
  {
    title: 'First Runner-Up',
    event: 'QuickBlood – Techfest IUB',
    year: 2023,
    description:
      'Recognized for developing QuickBlood, a platform connecting users with nearby blood donors and real-time blood bank data.',
    rank: 'runner-up',
  },
  {
    title: 'First Runner-Up',
    event: 'Student Performance Monitoring System – Techfest IUB',
    year: 2023,
    description:
      'Acknowledged for redesigning the frontend and integrating visual analytics to enhance usability and functionality.',
    rank: 'runner-up',
  },
];
