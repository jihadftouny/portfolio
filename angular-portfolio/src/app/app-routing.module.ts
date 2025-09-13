import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

import { ContactComponent } from './contact/contact.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enable automatic scrolling to element IDs when navigating with fragments
    anchorScrolling: 'enabled',
    // restore scroll position on back/forward navigation
    scrollPositionRestoration: 'enabled',
    // allow navigation to the same URL when only the fragment differs
    onSameUrlNavigation: 'reload',
    // offset the scroll to account for fixed navbar (x, y)
    scrollOffset: [0, 80]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
