import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent {

  @Input() title: string = '';
  @Input() projects: any[] = [];
}
