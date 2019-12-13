import { Syllabus } from './../../../response/syllabus-dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syllabus-mn',
  templateUrl: './syllabus-mn.component.html',
  styleUrls: ['./syllabus-mn.component.css']
})
export class SyllabusMnComponent implements OnInit {

  constructor() { }

  syllabuss: Syllabus[];
  syllabus: Syllabus;
  ngOnInit() {
  }

}
