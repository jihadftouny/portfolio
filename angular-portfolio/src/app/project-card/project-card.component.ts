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
    title: 'GPTector – AI Text Detection Research',
    image: '../../assets/images/projects/gptector.jpg',
    link: '#',
    overlay: 'View Tool',
    description:
      'Created GPTector, a lightweight machine‑learning tool for detecting AI‑generated text. The project supported SUPSI (University of Applied Sciences and Arts of Southern Switzerland) research by demonstrating that compact models can identify AI‑authored content without the computational overhead of large deep‑learning models. Highlighted efficient, responsible AI practices.',
    projectType: 'Research Tool'
  },
  {
    title: 'Smart Glasses Prototype – Assistive Tech for the Visually Impaired',
    image: '../../assets/images/projects/gptector.jpg',
    link: '#',
    overlay: 'View Prototype',
    description:
      'Led a team that won a competition by designing a smart‑glasses prototype for visually impaired users. Integrated computer vision to provide object recognition and navigational assistance, showcasing human‑centric AI innovation.',
    projectType: 'Competition Project'
  }
];

export const featuredEducation: Project[] = [
  // Missing G42 Inception & QudraTech project
  {
    title: 'SEEDS – K‑12 AI Curriculum',
    image: '../../assets/images/projects/gptector.jpg',
    link: 'https://www.linkedin.com/company/seeds-school/',
    overlay: 'View Project',
    description:
      'Co‑developed ZAKA’s SEEDS curriculum, the first K‑12 AI program in the MENA region. Designed hands‑on lessons that introduce AI concepts to Grades 4–12 and encourage critical thinking, ethical creativity, and innovation. Helped build modules covering data, machine learning, AI tools, and responsible AI to prepare the next generation of AI leaders.',
    projectType: 'Educational Program'
  },
  {
    title: 'AI Starter Kit – AUB',
    image: '../../assets/images/projects/gptector.jpg',
    link: 'https://aub.edu.lb/msfea/online/Programs/AI-starter-kit.html',
    overlay: 'View Project',
    description:
      'Developed AUB’s AI Starter Kit, an 8‑week, non‑technical online certificate program designed for absolute beginners. The course cuts through complexity to teach practical AI skills such as task automation, data analysis, content creation, workflow optimization, and ethical considerations. Localized examples include Arabic LLMs and regional use cases.',
    projectType: 'Professional Certificate'
  },
  {
    title: 'UAE AI Academy – AI Skills for Tomorrow',
    image: '../../assets/images/projects/uae-ai-academy.jpg',
    link: '#',
    overlay: 'View Program',
    description:
      'Co-developed course content for the UAE AI Academy, a national initiative launched in partnership with Microsoft. This 2‑month program provides flexible, high‑impact learning for university students, faculty, and staff, combining self‑paced AI courses, expert‑led workshops, and a national hackathon. It is open to all university roles with no prior experience required and aims to build an AI‑empowered academic community:contentReference[oaicite:3]{index=3}.',
    projectType: 'University Program'
  },
  {
    title: 'AI Personal Toolkit & Tools Training',
    image: '../../assets/images/projects/gptector.jpg',
    link: '#',
    overlay: 'View Course',
    description:
      'Designed and taught ZAKA’s AI Personal Toolkit, a 7‑module program covering AI fundamentals, ChatGPT mastery, generative image/audio tools, creative problem solving, and ethics. Delivered tailored AI tools trainings for USJ, IMAGIC, and other organizations—enabling professionals to adopt AI in their workflows. Served as an expert trainer for USJ’s Certificate in AI Tools program, teaching modules on computer vision, LLMs, and ethical AI.',
    projectType: 'Training Program'
  },
  {
    title: 'ZAKA AI Certification Bootcamps',
    image: '../../assets/images/projects/gptector.jpg',
    link: '#',
    overlay: 'View Bootcamps',
    description:
      'Delivered in‑person and online bootcamps for ZAKA’s AI Certification program, covering machine learning, deep learning, NLP, and computer vision. Guided participants through building end‑to‑end AI pipelines, deploying models, and understanding real‑world AI ethics and biases.',
    projectType: 'Bootcamp Series'
  },
  {
    title: 'Capstone Mentorship & Student Projects',
    image: '../../assets/images/projects/gptector.jpg',
    link: '#',
    overlay: 'View Mentorship',
    description:
      'Mentored more than 30 students on AI capstone projects, advising on data preparation, model design, evaluation metrics, and presentation. Projects ranged from recommender systems and health‑tech prototypes to social impact applications, emphasizing rigorous engineering and responsible AI.',
    projectType: 'Mentorship'
  },
  {
    title: 'Judge at Clyntech/Berytech Hackathon',
    image: '../../assets/images/projects/gptector.jpg',
    link: '#',
    overlay: 'View Event',
    description:
      'Served as a judge at Berytech’s Clyntech Hackathon, evaluating solutions in clean‑technology and green innovation. Assessed projects for technical feasibility, impact, scalability, and AI usage, and provided feedback to teams aspiring to address environmental challenges through AI.',
    projectType: 'Community Engagement'
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
