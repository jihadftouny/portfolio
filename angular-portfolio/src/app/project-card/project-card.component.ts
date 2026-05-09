import { Component, Input } from '@angular/core';
import { Project } from '../projects/projects.data';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;

  get categoryLabel(): string {
    switch (this.project?.category) {
      case 'ai':
        return 'AI';
      case 'education':
        return 'Education';
      case 'games':
        return 'Game';
      case 'web':
        return 'Web';
      default:
        return '';
    }
  }

  get isPlaceholder(): boolean {
    return this.project?.link === '#';
  }
}
