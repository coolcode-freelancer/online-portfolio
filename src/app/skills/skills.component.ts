import { Component, OnInit } from '@angular/core';
import { Skill } from '../Skill';
import { SKILLS } from '../skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = SKILLS;
  constructor() { }

  ngOnInit() {
  }

}
