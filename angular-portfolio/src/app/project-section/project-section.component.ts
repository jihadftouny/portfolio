import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent {
  /** Section header shown above the list; can be set by parent (e.g. "Technical Projects" or "Educational Experience") */
  @Input() title: string = 'Projects';
  @Input() projects: any[] = [];
}
