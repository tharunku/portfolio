import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  {path: 'profile', component: ProfileComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'education', component: EducationPageComponent},
  {path: 'experience', component: ExperiencePageComponent},
  {path: 'skills', component: SkillsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
