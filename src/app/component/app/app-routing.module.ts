import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EducationComponent } from '../education/education.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { ThankyouComponent } from '../thankyou/thankyou.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'education', component:EducationComponent},
  {path:'skills', component: SkillsComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'contact', component: ContactComponent},
  {path:'thankyou', component: ThankyouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
