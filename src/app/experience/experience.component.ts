import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../Experience';
import { EXPERIENCES } from '../experiences'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences = EXPERIENCES;

  // @Input display: boolean;
  //
  // toggle(): void {
  //   this.dispaly = !this.dispaly;
  // }


  constructor() { }

  ngOnInit() {
  }

}
