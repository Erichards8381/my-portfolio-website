import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EducationComponent } from '../education/education.component';
import { SkillsComponent } from '../skills/skills.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'education', component:EducationComponent},
  {path:'skills', component: SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
