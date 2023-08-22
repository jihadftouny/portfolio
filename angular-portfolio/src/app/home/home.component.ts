import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '../../assets/downloads/Jihad_Ftouny_CV.pdf';
    link.target = '_blank';
    link.download = 'Jihad_Ftouny_CV.pdf';
    link.click();
  }
}
