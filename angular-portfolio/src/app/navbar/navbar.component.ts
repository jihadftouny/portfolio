import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  NgZone,
  OnDestroy,
  Renderer2,
  ViewChild
} from '@angular/core';

declare const bootstrap: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  readonly sections: { id: string; label: string }[] = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  activeId = 'hero';
  scrolled = false;

  @ViewChild('navCollapse') navCollapse?: ElementRef<HTMLElement>;

  private observer?: IntersectionObserver;

  constructor(
    private renderer: Renderer2,
    private zone: NgZone
  ) {}

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => this.initSectionObserver());
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const next = window.scrollY > 24;
    if (next !== this.scrolled) {
      this.zone.run(() => (this.scrolled = next));
    }
  }

  closeNav(): void {
    const el = this.navCollapse?.nativeElement;
    if (!el || typeof bootstrap === 'undefined') return;
    const inst = bootstrap.Collapse.getInstance(el);
    if (inst) inst.hide();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private initSectionObserver(): void {
    if (typeof IntersectionObserver === 'undefined') return;

    const targets = this.sections
      .map(s => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);

    if (!targets.length) {
      // Sections not yet in DOM (route still rendering); retry next tick.
      setTimeout(() => this.initSectionObserver(), 200);
      return;
    }

    this.observer?.disconnect();
    this.observer = new IntersectionObserver(
      entries => {
        const intersecting = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (intersecting.length) {
          const id = (intersecting[0].target as HTMLElement).id;
          if (id !== this.activeId) {
            this.zone.run(() => (this.activeId = id));
          }
        }
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );
    targets.forEach(t => this.observer!.observe(t));
  }
}
