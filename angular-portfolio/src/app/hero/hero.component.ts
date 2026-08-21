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
    "I build AI systems that do real work.",
    "I write the courses that teach them.",
    "I make games.",
    "I mentor people who are starting out."
  ];

  readonly stats = [
    { value: '7,000+', label: 'Trained Through Programs I Built' },
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
      title: 'Games',
      skills: [
        { src: 'https://skillicons.dev/icons?i=unity', label: 'Unity' },
        { src: 'https://skillicons.dev/icons?i=threejs', label: 'Three.js' }
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
