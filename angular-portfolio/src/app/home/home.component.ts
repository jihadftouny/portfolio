import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;

  isPlaying: boolean = false;

  toggleAudioPlayback(): void {
    const audioPlayer = this.audioPlayerRef.nativeElement;

    if (audioPlayer.paused) {
      audioPlayer.play();
      this.isPlaying = true;
    } else {
      audioPlayer.pause();
      this.isPlaying = false;
    }
  }

  @ViewChild('hoverSoundProject') hoverSoundRef!: ElementRef<HTMLAudioElement>;

  playHoverSound(): void {
    const hoverSound = this.hoverSoundRef.nativeElement;
    hoverSound.currentTime = 0; // Reset sound to start
    hoverSound.play();
  }

  @ViewChild('hoverSoundAbout')
  hoverSoundAboutRef!: ElementRef<HTMLAudioElement>;

  playHoverSoundAbout(): void {
    const hoverSound = this.hoverSoundAboutRef.nativeElement;
    hoverSound.currentTime = 0; // Reset sound to start
    hoverSound.play();
  }

  @ViewChild('hoverSoundSkill')
  hoverSoundSkillRef!: ElementRef<HTMLAudioElement>;

  playHoverSoundSkill(): void {
    const hoverSound = this.hoverSoundSkillRef.nativeElement;
    hoverSound.currentTime = 0; // Reset sound to start
    hoverSound.play();
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '../../assets/downloads/Jihad_Ftouny_CV.pdf';
    link.target = '_blank';
    link.download = 'Jihad_Ftouny_CV.pdf';
    link.click();
  }
}
