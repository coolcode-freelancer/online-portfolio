import { Component } from '@angular/core';
import { Section } from './Section';
import { SECTIONS } from './mock-sections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sections = SECTIONS;
  display = false;
  toggle(): void {
    this.display = !this.display;
  };
}
