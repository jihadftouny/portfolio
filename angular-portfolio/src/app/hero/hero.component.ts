import { Component } from '@angular/core';

interface SkillIcon {
  src: string;
  label: string;
}

interface SkillCategory {
  title: string;
  skills: SkillIcon[];
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  readonly phrases = [
    "I'm an AI Engineer.",
    "I'm an AI Instructor.",
    "I build ML systems.",
    "I mentor AI talent."
  ];

  readonly stats = [
    { value: '400+', label: 'Students Taught & Mentored' },
    { value: '5+', label: 'Programs Delivered' },
    { value: '🏆', label: 'AUB Hackathon Winner' }
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Languages & Stack',
      skills: [
        { src: 'https://skillicons.dev/icons?i=py', label: 'Python' },
        { src: 'https://skillicons.dev/icons?i=ts', label: 'TypeScript' },
        { src: 'https://skillicons.dev/icons?i=java', label: 'Java' },
        { src: 'https://skillicons.dev/icons?i=nodejs', label: 'Node.js' },
        { src: 'https://skillicons.dev/icons?i=mongodb', label: 'MongoDB' }
      ]
    },
    {
      title: 'ML & AI',
      skills: [
        { src: 'https://skillicons.dev/icons?i=sklearn', label: 'scikit-learn' },
        { src: 'https://skillicons.dev/icons?i=tensorflow', label: 'TensorFlow' },
        { src: 'https://skillicons.dev/icons?i=pytorch', label: 'PyTorch' },
        { src: 'assets/images/skills/huggingface.png', label: 'Hugging Face' },
        { src: 'assets/images/skills/ultralytics.png', label: 'Ultralytics' },
        { src: 'assets/images/skills/langchain.png', label: 'LangChain' },
        { src: 'assets/images/skills/prompt-engineering.svg', label: 'Prompt Engineering' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { src: 'https://skillicons.dev/icons?i=git', label: 'Git' },
        { src: 'https://skillicons.dev/icons?i=linux', label: 'Linux' },
        { src: 'https://skillicons.dev/icons?i=figma', label: 'Figma' },
        { src: 'https://skillicons.dev/icons?i=ps', label: 'Photoshop' },
        { src: 'https://skillicons.dev/icons?i=ableton', label: 'Ableton' }
      ]
    }
  ];
}
