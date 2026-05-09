import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import { MotionService } from './motion.service';

@Directive({
  selector: '[appTypewriter]'
})
export class TypewriterDirective implements OnInit, OnDestroy {
  @Input('appTypewriter') phrases: string[] = [];
  @Input() typeSpeed = 70;
  @Input() deleteSpeed = 40;
  @Input() pause = 1800;

  private timer: any;
  private destroyed = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private zone: NgZone,
    private motion: MotionService
  ) {}

  ngOnInit(): void {
    if (!this.phrases?.length) return;

    if (this.motion.reduced) {
      this.renderer.setProperty(this.el.nativeElement, 'textContent', this.phrases[0]);
      return;
    }

    this.zone.runOutsideAngular(() => this.run());
  }

  private run(): void {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      if (this.destroyed) return;
      const phrase = this.phrases[phraseIndex];
      charIndex += deleting ? -1 : 1;
      this.renderer.setProperty(
        this.el.nativeElement,
        'textContent',
        phrase.substring(0, charIndex)
      );

      let delay = deleting ? this.deleteSpeed : this.typeSpeed;
      if (!deleting && charIndex === phrase.length) {
        delay = this.pause;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % this.phrases.length;
        delay = 400;
      }
      this.timer = setTimeout(tick, delay);
    };

    tick();
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    if (this.timer) clearTimeout(this.timer);
  }
}
