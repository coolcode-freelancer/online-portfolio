import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from 'ng2-scroll-to';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SummaryComponent } from './summary/summary.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { VolunteerComponent } from './volunteer/volunteer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SummaryComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    VolunteerComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
