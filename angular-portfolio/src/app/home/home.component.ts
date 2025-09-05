import { Component, ElementRef, ViewChild } from '@angular/core';
import { featuredProjects, aiProjects, gameProjects, websiteProjects } from '../project-card/project-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // Pull shared project lists from project-card component
  aiProjects = aiProjects;
  gameProjects = gameProjects;
  websiteProjects = websiteProjects;
  featuredProjects = featuredProjects;

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '../../assets/downloads/Jihad_Ftouny_CV.pdf';
    link.target = '_blank';
    link.download = 'Jihad_Ftouny_CV.pdf';
    link.click();
  }
}
