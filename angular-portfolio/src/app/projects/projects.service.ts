import { Injectable } from '@angular/core';
import { PROJECTS, Project, ProjectCategory } from './projects.data';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  all(): Project[] {
    return PROJECTS;
  }

  byCategory(category: ProjectCategory): Project[] {
    return PROJECTS.filter(p => p.category === category);
  }

  countsByCategory(): Record<'all' | ProjectCategory, number> {
    return {
      all: PROJECTS.length,
      ai: this.byCategory('ai').length,
      education: this.byCategory('education').length,
      games: this.byCategory('games').length,
      web: this.byCategory('web').length
    };
  }
}
