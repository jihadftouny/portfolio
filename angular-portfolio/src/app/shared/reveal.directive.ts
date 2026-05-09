import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  Renderer2
} from '@angular/core';
import { MotionService } from './motion.service';

@Directive({
  selector: '[appReveal]'
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealThreshold = 0.15;
  @Input() revealOnce = true;

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private zone: NgZone,
    private motion: MotionService
  ) {}

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;

    if (this.motion.reduced || typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(node, 'is-revealed');
      return;
    }

    if (this.revealDelay > 0) {
      this.renderer.setStyle(node, 'transition-delay', `${this.revealDelay}ms`);
    }

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.renderer.addClass(node, 'is-revealed');
              if (this.revealOnce) {
                this.observer?.disconnect();
              }
            } else if (!this.revealOnce) {
              this.renderer.removeClass(node, 'is-revealed');
            }
          }
        },
        { threshold: this.revealThreshold }
      );
      this.observer.observe(node);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
