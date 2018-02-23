import { Component, OnInit } from '@angular/core';
import { Section } from '../Section';
import { SECTIONS } from '../mock-sections';
import { Qualification } from '../Qualification';
import { QUALIFICATIONS } from '../qualifications';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  title = SECTIONS[0].title;

  // jumbotronBG = 'assets/img/jumbotronBG.jpeg';
  qualifications = QUALIFICATIONS;

  constructor() { } 

  ngOnInit() {
  }

}
