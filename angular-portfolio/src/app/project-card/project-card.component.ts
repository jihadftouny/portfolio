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

// Shared project data moved here per request
export const aiProjects: Project[] = [
  {
    title: 'AI Text Detector',
    image: '../../assets/images/projects/gptector.jpg',
    link: 'https://gptector-flask.onrender.com/',
    overlay: 'Access WebApp',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, nisl at convallis placerat, arcu urna pharetra orci, a dictum libero lectus a justo.' ,
    tech: ['Python', 'Flask', 'NLP']
  }
];

export const gameProjects: Project[] = [
  {
    title: 'Elvish Rootings',
    image: '../../assets/images/projects/elvish-rootings.jpg',
    link: 'https://bramevet.itch.io/elvish-rootings',
    overlay: 'Play on Browser',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tech: ['Unity', 'C#']
  },
  {
    title: 'The Void',
    image: '../../assets/images/projects/the-void.jpg',
    link: 'https://bramevet.itch.io/the-void',
    overlay: 'Access Page',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia, sapien id dictum tristique, urna quam efficitur mi, vitae.' ,
    tech: ['Godot', 'GDScript']
  }
];

export const websiteProjects: Project[] = [
  {
    title: 'Think AI',
    image: '../../assets/images/projects/thinkai.jpeg',
    link: 'https://www.thinkai.me/',
    overlay: 'Access Page',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in leo id nibh convallis malesuada.',
    tech: ['Angular', 'Node']
  },
  {
    title: 'ABZ Flowers',
    image: '../../assets/images/projects/abz-flowers.jpg',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7100400060353425408/',
    overlay: 'See Demo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;'
  }
];

export const featuredProjects: Project[] = [
  {
    title: 'Test Project 1',
    image: '../../assets/images/projects/thinkai.jpeg',
    link: '#',
    overlay: 'View Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
    projectType: 'Role'
  },
  {
    title: 'Test Project 2',
    image: '../../assets/images/projects/abz-flowers.jpg',
    link: '#',
    overlay: 'View Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
    projectType: 'Featured Project'
  }
];

export const featuredEducation: Project[] = [
  {
    title: 'Test Project 1',
    image: '../../assets/images/projects/thinkai.jpeg',
    link: '#',
    overlay: 'View Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
    projectType: 'Role'
  },
  {
    title: 'Test Project 2',
    image: '../../assets/images/projects/abz-flowers.jpg',
    link: '#',
    overlay: 'View Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
    projectType: 'Featured Project'
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
