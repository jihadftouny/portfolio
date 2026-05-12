import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface SoftSkill {
  label: string;
  svg: SafeHtml;
}

@Component({
  selector: 'app-soft-skills-marquee',
  templateUrl: './soft-skills-marquee.component.html',
  styleUrls: ['./soft-skills-marquee.component.scss']
})
export class SoftSkillsMarqueeComponent implements AfterViewInit, OnDestroy {
  readonly skills: SoftSkill[];
  inView = true;

  @ViewChild('viewport') viewport?: ElementRef<HTMLElement>;
  private io?: IntersectionObserver;

  constructor(
    sanitizer: DomSanitizer,
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {
    const icon = (inner: string): SafeHtml =>
      sanitizer.bypassSecurityTrustHtml(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${inner}</svg>`
      );

    this.skills = [
      {
        label: 'Simplifying Complexity',
        svg: icon('<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2z"/>')
      },
      {
        label: 'Active Listening',
        svg: icon('<path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"/><path d="M9 8.5a3 3 0 0 1 6 0"/>')
      },
      {
        label: 'Receiving Feedback',
        svg: icon('<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"/>')
      },
      {
        label: 'Giving Feedback',
        svg: icon('<path d="M22 2 11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>')
      },
      {
        label: 'Critical Thinking',
        svg: icon('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M8 11h6"/><path d="M11 8v6"/>')
      },
      {
        label: 'Adaptability',
        svg: icon('<path d="m18 14 4 4-4 4"/><path d="m18 2 4 4-4 4"/><path d="M2 18h1.97a4 4 0 0 0 3.3-1.7l5.46-8.6a4 4 0 0 1 3.3-1.7H22"/><path d="M2 6h1.97a4 4 0 0 1 3.6 2.2"/><path d="M22 18h-6.04a4 4 0 0 1-3.3-1.8l-.36-.45"/>')
      },
      {
        label: 'Continuous Learning',
        svg: icon('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>')
      },
      {
        label: 'Curiosity',
        svg: icon('<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>')
      },
      {
        label: 'Pragmatism',
        svg: icon('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>')
      },
      {
        label: 'Patience',
        svg: icon('<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.17a2 2 0 0 0-.59-1.41L12 12l-4.41 4.42A2 2 0 0 0 7 17.83V22"/><path d="M17 2v4.17a2 2 0 0 1-.59 1.41L12 12 7.59 7.58A2 2 0 0 1 7 6.17V2"/>')
      },
      {
        label: 'Resilience',
        svg: icon('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>')
      },
      {
        label: 'Action Bias',
        svg: icon('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>')
      },
      {
        label: 'Mentorship',
        svg: icon('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>')
      },
      {
        label: 'Intellectual Humility',
        svg: icon('<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>')
      },
      {
        label: 'Self-Awareness',
        svg: icon('<path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"/><circle cx="12" cy="12" r="3"/>')
      }
    ];
  }

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined' || !this.viewport) return;
    this.zone.runOutsideAngular(() => {
      this.io = new IntersectionObserver(entries => {
        const next = entries[0]?.isIntersecting ?? false;
        if (next !== this.inView) {
          this.zone.run(() => {
            this.inView = next;
            this.cdr.markForCheck();
          });
        }
      });
      this.io.observe(this.viewport!.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
