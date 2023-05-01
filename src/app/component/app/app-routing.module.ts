import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EducationComponent } from '../education/education.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { ThankyouComponent } from '../thankyou/thankyou.component';
import { AssemblySimulationVisualizationComponent } from '../projects/assembly-simulation-visualization/assembly-simulation-visualization.component';
import { CapstoneComponent } from '../projects/capstone/capstone.component';
import { MsPaintCloneComponent } from '../projects/ms-paint-clone/ms-paint-clone.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'education', component:EducationComponent},
  {path:'skills', component: SkillsComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'contact', component: ContactComponent},
  {path:'thankyou', component: ThankyouComponent},
  {path:'projects/assembly-simulation-visualization', component: AssemblySimulationVisualizationComponent},
  {path:'projects/capstone', component:CapstoneComponent},
  {path:'projects/ms-paint-clone', component:MsPaintCloneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
