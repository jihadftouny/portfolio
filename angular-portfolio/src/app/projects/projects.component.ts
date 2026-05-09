import { Component, OnInit } from '@angular/core';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Project, ProjectCategory } from './projects.data';
import { ProjectsService } from './projects.service';
import { MotionService } from '../shared/motion.service';

type FilterKey = 'all' | ProjectCategory;

interface TabDef {
  key: FilterKey;
  label: string;
  count: number;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('filterFade', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(8px)' }),
            stagger(40, [
              animate(
                '280ms cubic-bezier(.2,.8,.2,1)',
                style({ opacity: 1, transform: 'translateY(0)' })
              )
            ])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  activeFilter: FilterKey = 'all';
  filtered: Project[] = [];
  tabs: TabDef[] = [];

  constructor(
    private projectsSvc: ProjectsService,
    private motion: MotionService
  ) {}

  ngOnInit(): void {
    const counts = this.projectsSvc.countsByCategory();
    this.tabs = [
      { key: 'all', label: 'All', count: counts.all },
      { key: 'ai', label: 'AI', count: counts.ai },
      { key: 'education', label: 'Education', count: counts.education },
      { key: 'games', label: 'Games', count: counts.games },
      { key: 'web', label: 'Web', count: counts.web }
    ];
    this.applyFilter();
  }

  setFilter(key: FilterKey): void {
    if (this.activeFilter === key) return;
    this.activeFilter = key;
    this.applyFilter();
  }

  /** Used as the trigger key for the filterFade animation. Returns a stable
   * value when reduced-motion is on so the trigger does not re-run. */
  get animKey(): FilterKey | 'static' {
    return this.motion.reduced ? 'static' : this.activeFilter;
  }

  trackById = (_: number, p: Project): string => p.id;

  onTabKey(event: KeyboardEvent): void {
    const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
    if (!keys.includes(event.key)) return;
    event.preventDefault();

    const currentIndex = this.tabs.findIndex(t => t.key === this.activeFilter);
    let nextIndex = currentIndex;
    if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % this.tabs.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + this.tabs.length) % this.tabs.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = this.tabs.length - 1;
    }

    const nextKey = this.tabs[nextIndex].key;
    this.setFilter(nextKey);

    // move focus to the newly active tab
    queueMicrotask(() => {
      const el = document.getElementById(`tab-${nextKey}`);
      el?.focus();
    });
  }

  private applyFilter(): void {
    this.filtered =
      this.activeFilter === 'all'
        ? this.projectsSvc.all()
        : this.projectsSvc.byCategory(this.activeFilter);
  }
}
