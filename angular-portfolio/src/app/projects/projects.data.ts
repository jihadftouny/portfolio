export type ProjectCategory = 'ai' | 'education' | 'games' | 'web';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  link: string;
  overlay?: string;
  description?: string;
  tech?: string[];
  projectType?: string;
  year?: number;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  // ─── AI ──────────────────────────────────────────────────────────────
  {
    id: 'magic-wonder',
    title: 'Magic Wonder',
    category: 'ai',
    image: 'assets/images/projects/magic-wonder.jpg',
    link: '#',
    overlay: 'Client Project',
    description:
      "An end-to-end AI platform that automates the creation of children's storybooks. Built the full pipeline — story generation with LLMs, illustration synthesis, page layout, sticker system, and PDF/PowerPoint export — plus a public-facing site with an in-browser cover generator. Architected, built, and deployed end-to-end.",
    projectType: 'AI Platform',
    tech: ['Python', 'LLMs', 'Image Generation', 'Automation', 'PDF/PPT Export'],
    featured: true
  },
  {
    id: 'lia-assurex',
    title: 'LIA Assurex: Customer-Facing AI Agent',
    category: 'ai',
    image: 'assets/images/projects/lia-assurex.png',
    link: '#',
    overlay: 'Client Project',
    description:
      'Built the LIA Assurex AI agent — a customer-facing assistant that lets clients ask about their policies and related questions in natural language. Designed the prompt architecture, conversation flows, and grounding behavior end-to-end. Delivered for LIA while at Limitless.',
    projectType: 'Conversational AI',
    tech: ['LLMs', 'Prompt Engineering', 'RAG', 'Conversational AI'],
    featured: true
  },
  {
    id: 'internal-chatbots',
    title: 'Internal Chatbots',
    category: 'ai',
    image: 'assets/images/projects/limitless.png',
    link: '#',
    overlay: 'Under NDA',
    description:
      'During my time at Limitless, built internal chatbots for a variety of companies — covering knowledge retrieval, workflow assistance, and policy-grounded Q&A. Specific clients and technical details are under NDA.',
    projectType: 'Internal AI Tools',
    tech: ['LLMs', 'Conversational AI']
  },
  {
    id: 'gptector',
    title: 'GPTector: AI Text Detection Research',
    category: 'ai',
    image: 'assets/images/projects/gptector.jpg',
    link: 'https://gptector-flask.onrender.com/',
    overlay: 'View Tool',
    description:
      'A lightweight machine-learning tool for detecting AI-generated text. Built in support of SUPSI research, it shows that compact models can identify AI-authored content without the computational overhead of large deep-learning models — a study in efficient, responsible AI.',
    projectType: 'Research Tool',
    tech: ['Python', 'scikit-learn', 'Flask', 'NLP'],
    featured: true
  },
  {
    id: 'smart-glasses',
    title: 'Smart Glasses Prototype',
    category: 'ai',
    image: 'assets/images/projects/aub-hackathon.jpg',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7090393604661071872/',
    overlay: 'View Post',
    description:
      'Led a team to win an AUB hackathon by designing a smart-glasses prototype for visually impaired users. Integrated computer vision with YOLO for object recognition and navigational assistance — human-centric AI in hardware.',
    projectType: 'Competition Project',
    tech: ['Python', 'YOLO', 'Computer Vision'],
    featured: true
  },

  // ─── Education ───────────────────────────────────────────────────────
  {
    id: 'aub-starter-kit',
    title: 'AUB: AI Starter Kit',
    category: 'education',
    image: 'assets/images/projects/aub-starter-kit.jpg',
    link: 'https://aub.edu.lb/msfea/online/Programs/AI-starter-kit.html',
    overlay: 'View Project',
    description:
      'Developed AUB’s AI Starter Kit, an 8-week online certificate for absolute beginners. Covers task automation, data analysis, content creation, workflow optimization, and ethics — with localized examples including Arabic LLMs.',
    projectType: 'Professional Certificate',
    tech: ['LLMs', 'Curriculum', 'Online Course']
  },
  {
    id: 'visa-training',
    title: 'VISA Training Program',
    category: 'education',
    image: 'assets/images/projects/visa.jpg',
    link: 'https://corporate.visa.com/en/services/visa-consulting-analytics.html',
    overlay: 'View Company',
    description:
      'Designed AI training workshops for VISA professionals, focused on AI literacy, hands-on tooling, and responsible AI for finance and analytics teams.',
    projectType: 'Corporate Training',
    tech: ['Finance', 'AI Literacy']
  },
  {
    id: 'inception-g42',
    title: 'Inception / G42 Training Program',
    category: 'education',
    image: 'assets/images/projects/inception.jpg',
    link: 'https://www.g42.ai/companies/inception-institute-of-ai',
    overlay: 'View Company',
    description:
      'Designed and delivered AI training sessions for Inception / G42, building capability across teams in applied AI, modern ML workflows, and responsible deployment.',
    projectType: 'Professional Training',
    tech: ['Corporate', 'Applied AI']
  },
  {
    id: 'imagic-training',
    title: 'IMAGIC Training Program',
    category: 'education',
    image: 'assets/images/projects/imagic.jpg',
    link: 'https://www.g42.ai/companies/inception-institute-of-ai',
    overlay: 'View Company',
    description:
      'Designed and delivered AI training sessions for IMAGIC professionals, focused on practical adoption of AI tools and workflows in production environments.',
    projectType: 'Corporate Training',
    tech: ['Corporate', 'AI Adoption']
  },
  {
    id: 'sefactory-aie-bootcamp',
    title: 'SE Factory: AI Engineering Bootcamp',
    category: 'education',
    image: 'assets/images/projects/sefactory-course.png',
    link: 'https://sefactory.io/',
    overlay: 'View Bootcamp',
    description:
      "Mentor and code reviewer for SE Factory's Artificial Intelligence Engineering Bootcamp. Reviewed student code across ML foundations, data pipelines, supervised baselines, computer vision, and AWS Bedrock labs — guided trainees on debugging, model evaluation, and capstone projects.",
    projectType: 'Mentorship & Code Review',
    tech: ['ML', 'Computer Vision', 'Code Review', 'Mentorship']
  },
  {
    id: 'zaka-certification',
    title: 'ZAKA AI Certification & Bootcamps',
    category: 'education',
    image: 'assets/images/projects/zaka.jpg',
    link: 'https://zaka.ai/ai-certification/',
    overlay: 'View Program',
    description:
      'Delivered in‑person and online sessions for ZAKA’s AI Certification and Bootcamp programs, covering machine learning, deep learning, NLP, and computer vision. Guided participants through end‑to‑end AI pipelines, deployment, and AI ethics.',
    projectType: 'Professional Training',
    tech: ['ML', 'Deep Learning', 'NLP', 'CV']
  },
  {
    id: 'seeds-k12',
    title: 'SEEDS: K-12 AI Curriculum',
    category: 'education',
    image: 'assets/images/projects/seeds.jpg',
    link: 'https://seeds.school/',
    overlay: 'View Page',
    description:
      'Developed ZAKA’s SEEDS content — the first K-12 AI program in the MENA region. Designed hands-on lessons for Grades 4–12 covering data, machine learning, AI tools, and responsible AI to prepare the next generation of AI leaders.',
    projectType: 'Educational Program',
    tech: ['Curriculum', 'AI Literacy', 'K-12']
  },
  {
    id: 'uae-ai-academy',
    title: 'UAE AI Academy: From Campus to the Future',
    category: 'education',
    image: 'assets/images/projects/ai-academy.jpg',
    link: 'https://www.middleeastainews.com/p/microsoft-upskill-1-million-in-ai-uae',
    overlay: 'View Article',
    description:
      'Course author for the UAE AI Academy — a national initiative with Microsoft. A 2-month flexible program for university students, faculty, and staff that combines self-paced AI courses, expert workshops, and a national hackathon.',
    projectType: 'University Program',
    tech: ['Microsoft', 'University', 'AI Curriculum']
  },
  {
    id: 'ai-tools-training',
    title: 'AI Tools Training',
    category: 'education',
    image: 'assets/images/projects/ai-personal-toolkit.jpg',
    link: 'https://zaka.ai/personal-toolkit/',
    overlay: 'View Course',
    description:
      'Delivered ZAKA’s AI Personal Toolkit — a 7-module program on AI fundamentals, ChatGPT mastery, generative tools, creative problem solving, and ethics. Tailored versions for L’Oréal, USJ, IMAGIC, and others.',
    projectType: 'Training Program',
    tech: ['ChatGPT', 'GenAI', 'LLMs']
  },
  {
    id: 'capstone-mentorship',
    title: 'Capstone Mentorship & Student Projects',
    category: 'education',
    image: 'assets/images/projects/zaka.jpg',
    link: 'https://www.linkedin.com/in/jihad-ftouny/details/recommendations/?detailScreenTabIndex=0',
    overlay: 'View Recommendations',
    description:
      'Mentored 30+ students on AI capstone projects and pitch competitions, advising on data preparation, model design, evaluation metrics, and presentation. Projects spanned recommender systems, health-tech, and social impact applications.',
    projectType: 'Mentorship',
    tech: ['Mentorship', 'Capstone', 'Pitch Coaching']
  },
  {
    id: 'clyntech-judge',
    title: 'Judge at Clyntech Hackathon',
    category: 'education',
    image: 'assets/images/projects/clyntech.jpg',
    link: 'https://berytech.org/',
    overlay: 'View Event',
    description:
      'Served as a judge at Berytech’s Clyntech Hackathon, evaluating clean-tech and green-innovation solutions for technical feasibility, impact, scalability, and AI usage — and giving feedback to teams addressing environmental challenges with AI.',
    projectType: 'Community Engagement',
    tech: ['Hackathon', 'Judging', 'CleanTech']
  },

  // ─── Game Development ────────────────────────────────────────────────
  {
    id: 'the-void',
    title: 'The Void',
    category: 'games',
    image: 'assets/images/projects/the-void.png',
    link: 'https://bramevet.itch.io/the-void',
    overlay: 'Play on itch.io',
    description:
      'A text-based RPG with turn-based combat set in the Undercity. Play as the Chosen One — hand-picked by the Arch-Mage — and face randomly generated enemies through a D&D-inspired die-roll system. Atmospheric, story-rich, cyberpunk. Currently in development.',
    projectType: 'Text-Based RPG',
    tech: ['HTML5', 'D&D Mechanics', 'Story Rich']
  },
  {
    id: 'elvish-rootings',
    title: 'Elvish Rootings',
    category: 'games',
    image: 'assets/images/projects/elvish-rootings.png',
    link: 'https://bramevet.itch.io/elvish-rootings',
    overlay: 'Play on itch.io',
    description:
      'Built for Global Game Jam 2023. Play as Elidar, village Elder, on a multi-stage quest to gather Evergreen Vine roots and Eldertree Sprouts to brew the Mystical Brew. Retro top-down, fast-paced arcade pacing.',
    projectType: 'Action / Arcade',
    tech: ['RPG Maker', 'Top-Down', 'Game Jam']
  },
  {
    id: 'airstrike-defense',
    title: 'Airstrike Defense',
    category: 'games',
    image: 'assets/images/projects/airstrike-defense.png',
    link: 'https://bramevet.itch.io/airstrike-defense',
    overlay: 'Play on itch.io',
    description:
      'A 2D side-scrolling action game where you defend your city from waves of bomb-dropping aircraft. Aim a cannon, shoot bombs out of the sky, and survive — built around precision and fast reflexes.',
    projectType: 'Action / Side Scroller',
    tech: ['Unity', '2D', 'Side Scroller']
  },

  // ─── Web & E-Commerce ────────────────────────────────────────────────
  {
    id: 'abz-flowers',
    title: 'ABZ Flowers',
    category: 'web',
    image: 'assets/images/projects/abz-flowers.jpg',
    link: '#',
    overlay: 'Client Project',
    description:
      'End-to-end fullstack e-commerce platform built for a flower shop — product catalog, cart, checkout, and admin dashboard. Designed and shipped the full stack from database to UI.',
    projectType: 'Fullstack E-Shop',
    tech: ['TypeScript', 'Node.js', 'MongoDB', 'E-Commerce']
  }
];
