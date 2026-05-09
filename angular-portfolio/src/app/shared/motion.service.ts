import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MotionService {
  private mq: MediaQueryList | null =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;

  get reduced(): boolean {
    return !!this.mq?.matches;
  }
}
