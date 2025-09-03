import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CaseStudiesComponent } from './case-studies/case-studies.component';

const routes: Routes = [
  { path: 'case-studies', component: CaseStudiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
