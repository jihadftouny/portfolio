import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ProfileSummaryComponent } from './profile-summary/profile-summary.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaseStudiesComponent,
    BlogComponent,
    BlogPostComponent,
    ContactComponent,
    NavbarComponent,
    HeroComponent,
    ProfileSummaryComponent,
    ProjectSectionComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
