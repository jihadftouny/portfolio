import {
  Component,
  ElementRef,
  HostListener,
  NgZone,
  OnDestroy,
  Renderer2,
  ViewChild
} from '@angular/core';
import { MotionService } from '../shared/motion.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnDestroy {
  readonly phrases = [
    "I'm an AI Engineer.",
    "I'm an AI Instructor.",
    "I build ML systems.",
    "I mentor AI talent."
  ];

  @ViewChild('avatar') avatar?: ElementRef<HTMLImageElement>;

  private rafPending = false;

  constructor(
    private renderer: Renderer2,
    private zone: NgZone,
    private motion: MotionService
  ) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.motion.reduced || !this.avatar || this.rafPending) return;
    this.rafPending = true;
    this.zone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        this.rafPending = false;
        const y = Math.max(-24, window.scrollY * -0.06);
        this.renderer.setStyle(
          this.avatar!.nativeElement,
          'transform',
          `translateY(${y}px)`
        );
      });
    });
  }

  ngOnDestroy(): void {
    /* HostListener cleans up automatically */
  }
}
