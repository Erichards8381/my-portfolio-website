import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { EducationComponent } from '../education/education.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { ThankyouComponent } from '../thankyou/thankyou.component';
import { AssemblySimulationVisualizationComponent } from '../projects/assembly-simulation-visualization/assembly-simulation-visualization.component';
import { CapstoneComponent } from '../projects/capstone/capstone.component';
import { MsPaintCloneComponent } from '../projects/ms-paint-clone/ms-paint-clone.component';
import { FullScreenImageDirective } from 'src/app/directives/full-screen-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ThankyouComponent,
    AssemblySimulationVisualizationComponent,
    CapstoneComponent,
    MsPaintCloneComponent,
    FullScreenImageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
