import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isMuted: boolean = false;
  backgroundMusic: HTMLAudioElement | null = null;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Get a reference to the audio element
    this.backgroundMusic = document.getElementById(
      'backgroundMusic'
    ) as HTMLAudioElement;
    // Set the volume to a lower level (0.5 for example)
    if (this.backgroundMusic) {
      this.backgroundMusic.volume = 0.1; // Adjust the volume level here
      this.backgroundMusic.play();
    }
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    this.playHoverSound();
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnterAbout(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    this.playHoverSoundAbout();
  }

  //having this wrong function solves the issue when a sound is played when you hover outside the page then in again
  @HostListener('mouseenter', ['$event2'])
  onMouseEnterAbout2(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
  }

  playHoverSoundAbout() {
    const audio = this.renderer.createElement('audio');
    audio.src = '../assets/audio/hover-sound-about.mp3'; // Replace with the actual path
    audio.autoplay = true;
    audio.style.display = 'none';

    this.renderer.appendChild(document.body, audio);

    audio.onended = () => {
      this.renderer.removeChild(document.body, audio);
    };
  }
  playHoverSound() {
    const audio = this.renderer.createElement('audio');
    audio.src = '../assets/audio/hover-sound.mp3'; // Replace with the actual path
    audio.autoplay = true;
    audio.style.display = 'none';

    this.renderer.appendChild(document.body, audio);

    audio.onended = () => {
      this.renderer.removeChild(document.body, audio);
    };
  }

  toggleMute() {
    // Toggle the muted state of the audio element
    this.isMuted = !this.isMuted;
    if (this.backgroundMusic) {
      this.backgroundMusic.muted = this.isMuted;
    }
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '../../assets/downloads/Jihad_Ftouny_CV.pdf';
    link.target = '_blank';
    link.download = 'Jihad_Ftouny_CV.pdf';
    link.click();
  }
}
