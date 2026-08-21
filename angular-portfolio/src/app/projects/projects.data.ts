export type ProjectCategory = 'ai' | 'education' | 'games' | 'web';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  imageAlign?: 'top' | 'center' | 'bottom';
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
      "A platform that turns an idea into a finished children's storybook. It writes the story, illustrates it, lays out the pages, adds stickers, and exports something printable. I built it end to end with a partner, for a client who was doing all of that by hand.",
    projectType: 'AI Platform',
    tech: ['Python', 'LLMs', 'Image Generation', 'Automation', 'PDF Export'],
    featured: true
  },
  {
    id: 'limitless-ai',
    title: 'AI Systems at Limitless Technologies',
    category: 'ai',
    image: 'assets/images/projects/limitless.png',
    link: '#',
    overlay: 'Under NDA',
    description:
      "My day job. I build AI systems at Limitless Technologies, a Beirut company working in health and insurance technology. The toolkit: Python, large language models, document understanding including scanned documents, browser automation, and the databases and deployment work that keeps it all running.",
    projectType: 'Confidential',
    tech: ['Python', 'LLMs', 'Document Understanding', 'Automation'],
    featured: true
  },
  {
    id: 'gptector',
    title: 'GPTector',
    category: 'ai',
    image: 'assets/images/projects/gptector.jpg',
    link: 'https://gptector-flask.onrender.com/',
    overlay: 'View Tool',
    description:
      "A tool that spots AI-written text. Most detectors are themselves large models, which is expensive for what is really a yes or no question. This one uses older, lighter techniques, runs on an ordinary CPU, and answers instantly. It also handles short text, which is where most detectors fall apart. Built in support of SUPSI research.",
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
      "Smart glasses that describe what is in front of someone who cannot see it. I led the team that built it, using object recognition to call out obstacles and landmarks as you walk. It won the AUB hackathon.",
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
      "An eight week online certificate for people starting from zero, co-authored for the American University of Beirut. It covers using AI for everyday work: automating tasks, analysing data, making things, and knowing where the limits are. The examples are local, including ones in Arabic.",
    projectType: 'Professional Certificate',
    tech: ['LLMs', 'Curriculum', 'Online Course']
  },
  {
    id: 'uae-ai-academy',
    title: 'UAE AI Academy',
    category: 'education',
    image: 'assets/images/projects/ai-academy.jpg',
    imageAlign: 'bottom',
    link: 'https://www.middleeastainews.com/p/microsoft-upskill-1-million-in-ai-uae',
    overlay: 'View Article',
    description:
      "A national AI programme run with Microsoft for university students, faculty and staff. I co-wrote the course and taught on it. Two months, self-paced material, live workshops and a hackathon at the end.",
    projectType: 'University Program',
    tech: ['Microsoft', 'University', 'AI Curriculum']
  },
  {
    id: 'corporate-ai-training',
    title: 'Corporate AI Training',
    category: 'education',
    image: 'assets/images/projects/visa.jpg',
    link: '#',
    overlay: 'Client Programmes',
    description:
      "AI training written and delivered for VISA Jordan, Inception / G42 and IMAGIC. Different audiences, same problem: people who are good at their jobs and now have to work out what these tools are actually for. Practical sessions, not theory.",
    projectType: 'Corporate Training',
    tech: ['Corporate', 'Applied AI', 'AI Literacy']
  },
  {
    id: 'sefactory-aie-bootcamp',
    title: 'SE Factory: AI Engineering Bootcamp',
    category: 'education',
    image: 'assets/images/projects/sefactory-course.png',
    link: 'https://sefactory.io/',
    overlay: 'View Bootcamp',
    description:
      "A ten week bootcamp that takes people from understanding AI to shipping it. I designed and taught it with two colleagues, and ran the code reviews for the AI track. Reviewing someone's code honestly is the part of teaching that actually changes how they work.",
    projectType: 'Mentorship & Code Review',
    tech: ['ML', 'Computer Vision', 'Code Review', 'Mentorship']
  },
  {
    id: 'zaka-certification',
    title: 'ZAKA: Certification & Bootcamps',
    category: 'education',
    image: 'assets/images/projects/zaka.jpg',
    link: 'https://zaka.ai/ai-certification/',
    overlay: 'View Program',
    description:
      "Three years of teaching and writing at ZAKA, across the four week AI bootcamp and the longer career tracks. Most of what I made was recorded, so it kept running for people I never met.",
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
      "The first K-12 AI curriculum in the region. I wrote content for it, covering grades 4 to 12: data, how machines learn, what the tools can do, and how to use them responsibly. It has since reached 730 teachers.",
    projectType: 'Educational Program',
    tech: ['Curriculum', 'AI Literacy', 'K-12']
  },
  {
    id: 'ai-tools-training',
    title: 'AI Tools Training',
    category: 'education',
    image: 'assets/images/projects/ai-personal-toolkit.jpg',
    imageAlign: 'top',
    link: 'https://zaka.ai/personal-toolkit/',
    overlay: 'View Course',
    description:
      'Delivered ZAKA’s AI Personal Toolkit, a 7-module program on AI fundamentals, ChatGPT mastery, generative tools, creative problem solving, and ethics. Tailored versions for L’Oréal, USJ, IMAGIC, and others.',
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
      'Mentored 50+ students on AI capstone projects and pitch competitions, advising on data preparation, model design, evaluation metrics, and presentation. Projects spanned recommender systems, health-tech, and social impact applications.',
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
      'Served as a judge at Berytech’s Clyntech Hackathon, evaluating clean-tech and green-innovation solutions for technical feasibility, impact, scalability, and AI usage, and giving feedback to teams addressing environmental challenges with AI.',
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
    overlay: 'View on itch.io',
    description:
      "A text RPG in Java with dice-based combat, character stats and a rarity system for equipment. 121 commits of working on it alone, which taught me more about designing game systems than anything else I have done. I am rebuilding it now as an experiment in having a model generate the enemies, the lore and the story while you play, instead of writing all of it up front.",
    projectType: 'Text-Based RPG · LLM Prototype',
    tech: ['LLMs', 'Java', 'D&D Mechanics', 'Procedural Content']
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
      'A 2D side-scrolling action game where you defend your city from waves of bomb-dropping aircraft. Aim a cannon, shoot bombs out of the sky, and survive, built around precision and fast reflexes.',
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
      'End-to-end fullstack e-commerce platform built for a flower shop: product catalog, cart, checkout, and admin dashboard. Designed and shipped the full stack from database to UI.',
    projectType: 'Fullstack E-Shop',
    tech: ['TypeScript', 'Node.js', 'MongoDB', 'E-Commerce']
  }
];
