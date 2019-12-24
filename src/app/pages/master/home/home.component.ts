import { SyllabusService } from './../../../services/syllabus.service';
import { Component, OnInit } from '@angular/core';
import { Syllabus } from 'src/app/response/syllabus-dto';
import { Project } from 'src/app/response/project-dto';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // items: any[] = [0, 1, 2, 3, 4, 5];
  syllabuss: Syllabus[];
  syllabus: Syllabus;
  projects: Project[];
  project: Project;
  constructor(
    private syllabusService: SyllabusService,
    private projectService: ProjectService,
    private router: Router,
  ) { }
  
  ngOnInit() {
    this.loadSyllabusByGroup();
  }
  
  loadSyllabusByGroup() {
    return this.syllabusService.getlistsyllabusbygroup().subscribe(
      result => {
        if (result) {
          this.syllabuss = result;
          // this.router.navigateByUrl('exercises/',this.project.id);
        } else {
          this.syllabuss = [];
        }
      }
    );
  }

  trackById(index: any, item: any) {
    return item.id;
  }
}
