import { Component, Input, HostBinding } from '@angular/core';

export interface Project {
  title: string;
  image: string;
  link: string;
  overlay?: string;
  description?: string;
  tech?: string[];
  projectType?: string;
}

export const featuredProjects: Project[] = [
  {
    title: 'GPTector: AI Text Detection Research',
    image: '../../assets/images/projects/gptector.jpg',
    link: 'https://gptector-flask.onrender.com/',
    overlay: 'View Tool',
    description:
      'Created GPTector, a lightweight machine-learning tool for detecting AI-generated text. The project supported SUPSI (University of Applied Sciences and Arts of Southern Switzerland) research by demonstrating that compact models can identify AI-authored content without the computational overhead of large deep-learning models. Highlighted efficient, responsible AI practices.',
    projectType: 'Research Tool'
  },
  {
    title: 'Smart Glasses Prototype',
    image: '../../assets/images/projects/aub-hackathon.jpg',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7090393604661071872/',
    overlay: 'View Post',
    description:
      'Led a team that won an AUB hackathon by designing a smart-glasses prototype for visually impaired users. Integrated computer vision with YOLO to provide object recognition and navigational assistance, showcasing human-centric AI innovation.',
    projectType: 'Competition Project'
  }
];

export const featuredEducation: Project[] = [
  {
    title: 'ZAKA AI Certification & Bootcamps',
    image: '../../assets/images/projects/zaka.jpg',
    link: 'https://zaka.ai/ai-certification/',
    overlay: 'View Program',
    description:
      'Delivered in‑person and online sessions for ZAKA’s AI Certification and Bootcamp programs, covering machine learning, deep learning, NLP, and computer vision. Guided participants through building end‑to‑end AI pipelines, deploying models, and understanding real‑world AI ethics and biases.',
    projectType: 'Professional Trainings'
  },
  {
    title: 'SEEDS: K-12 AI Curriculum',
    image: '../../assets/images/projects/seeds.jpg',
    link: 'https://seeds.school/',
    overlay: 'View Page',
    description:
      'Developed ZAKA’s SEEDS educational content, the first K-12 AI program in the MENA region. Designed hands-on lessons that introduce AI concepts to Grades 4–12 and encourage critical thinking, ethical creativity, and innovation. Helped build modules covering data, machine learning, AI tools, and responsible AI to prepare the next generation of AI leaders.',
    projectType: 'Educational Program'
  },
  {
    title: 'AUB: AI Starter Kit',
    image: '../../assets/images/projects/aub-starter-kit.jpg',
    link: 'https://aub.edu.lb/msfea/online/Programs/AI-starter-kit.html',
    overlay: 'View Project',
    description:
      'Developed AUB’s AI Starter Kit, an 8‑week online certificate program designed for absolute beginners. The course cuts through complexity to teach practical AI skills such as task automation, data analysis, content creation, workflow optimization, and ethical considerations. Localized examples include Arabic LLMs and regional use cases.',
    projectType: 'Professional Certificate'
  },
  {
    title: 'UAE AI Academy: From Campus to the Future',
    image: '../../assets/images/projects/ai-academy.jpg',
    link: 'https://www.middleeastainews.com/p/microsoft-upskill-1-million-in-ai-uae',
    overlay: 'View Article',
    description:
      'Developed course content for the UAE AI Academy, a national initiative launched in partnership with Microsoft. This 2‑month program provides flexible, high‑impact learning for university students, faculty, and staff, combining self‑paced AI courses, expert‑led workshops, and a national hackathon. It is open to all university roles with no prior experience required and aims to build an AI‑empowered academic community.',
    projectType: 'University Program'
  },
  {
    title: 'AI Tools Training',
    image: '../../assets/images/projects/ai-personal-toolkit.jpg',
    link: 'https://zaka.ai/personal-toolkit/',
    overlay: 'View Course',
    description:
      'Delivered ZAKA’s AI Personal Toolkit trainings, a 7‑module program covering AI fundamentals, ChatGPT mastery, generative image/audio tools, creative problem solving, and ethics. Delivered tailored AI tools trainings for L’Oréal, USJ, IMAGIC, and other organizations, enabling professionals to adopt AI in their workflows. Served as an expert trainer for USJ’s Certificate in AI Tools program, teaching modules on computer vision, LLMs, and ethical AI.',
    projectType: 'Training Program'
  },
  {
    title: 'Capstone Mentorship & Student Projects',
    image: '../../assets/images/projects/zaka.jpg',
    link: 'https://www.linkedin.com/in/jihad-ftouny/details/recommendations/?detailScreenTabIndex=0',
    overlay: 'View Recommendations',
    description:
      'Mentored more than 30 students on AI capstone projects and pitch competitions, advising on data preparation, model design, evaluation metrics, and presentation. Projects ranged from recommender systems and health‑tech prototypes to social impact applications, emphasizing rigorous engineering and responsible AI.',
    projectType: 'Mentorship'
  },
  {
    title: 'Judge at Clyntech Hackathon',
    image: '../../assets/images/projects/clyntech.jpg',
    link: '#',
    overlay: 'View Event',
    description:
      'Served as a judge at Berytech’s Clyntech Hackathon, evaluating solutions in clean‑technology and green innovation. Assessed projects for technical feasibility, impact, scalability, and AI usage, and provided feedback to teams aspiring to address environmental challenges through AI.',
    projectType: 'Community Engagement'
  },
  {
    title: 'IMAGIC Training Program',
    image: '../../assets/images/projects/imagic.jpg',
    link: 'https://www.g42.ai/companies/inception-institute-of-ai',
    overlay: 'View Company',
    description:
      'Developed and delivered training sessions as part of a professional program.',
    projectType: 'Corporate Training'
  },
  {
    title: 'Inception / G42 Training Program',
    image: '../../assets/images/projects/inception.jpg',
    link: 'https://www.g42.ai/companies/inception-institute-of-ai',
    overlay: 'View Company',
    description:
      'Developed and delivered training sessions as part of a professional program.',
    projectType: 'Professional Training'
  },
  {
    title: 'VISA Training Program',
    image: '../../assets/images/projects/visa.jpg',
    link: 'https://corporate.visa.com/en/services/visa-consulting-analytics.html',
    overlay: 'View Company',
    description:
      'Developed training workshops for professionals.',
    projectType: 'Corporate Training'
  }
];


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project: Project | any;
  @Input() index = 0;

  @HostBinding('class.reverse')
  get hostReverse() {
    return this.index % 2 === 1;
  }

}
