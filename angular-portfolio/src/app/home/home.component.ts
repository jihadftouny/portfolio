import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  aiProjects = [
    {
      title: 'AI Text Detector',
      image: '../../assets/images/projects/gptector.jpg',
      link: 'https://gptector-flask.onrender.com/',
      overlay: 'Access WebApp'
    }
  ];

  gameProjects = [
    {
      title: 'Elvish Rootings',
      image: '../../assets/images/projects/elvish-rootings.jpg',
      link: 'https://bramevet.itch.io/elvish-rootings',
      overlay: 'Play on Browser'
    },
    {
      title: 'The Void',
      image: '../../assets/images/projects/the-void.jpg',
      link: 'https://bramevet.itch.io/the-void',
      overlay: 'Access Page'
    }
  ];

  websiteProjects = [
    {
      title: 'Think AI',
      image: '../../assets/images/projects/thinkai.jpeg',
      link: 'https://www.thinkai.me/',
      overlay: 'Access Page'
    },
    {
      title: 'ABZ Flowers',
      image: '../../assets/images/projects/abz-flowers.jpg',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7100400060353425408/',
      overlay: 'See Demo'
    }
  ];

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '../../assets/downloads/Jihad_Ftouny_CV.pdf';
    link.target = '_blank';
    link.download = 'Jihad_Ftouny_CV.pdf';
    link.click();
  }
}
