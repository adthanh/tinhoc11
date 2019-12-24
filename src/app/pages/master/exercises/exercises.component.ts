import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/response/project-dto';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  projects: Project[];
  isCorrect: FormControl = new FormControl;
  checked: number = 0;
  id = '';
  ngOnInit() {
    this.loadProject();
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    // debugger;
  }
  selectedEntry: any;
  onSelectionChange(question: any, currentAns :any) {
    // this.selectedEntry = items.key;
    if(question.correct == currentAns)
    this.checked++;
    else this.checked--;
    if(this.checked < 0 ) this.checked = 0;
  }


  proExercises = [
    {
      "title": "day la cau hoi so 1",
      "answers": {
        "1": "day la cau tra loi 1",
        "2": "day la cau tra loi 2",
        "3": "day la cau tra loi 3",
        "4": "day la cau tra loi 4"
      },
      "correct": 1
    },
    {
      "title": "day la cau hoi so 2",
      "answers": {
        "1": "day la cau tra loi 3",
        "2": "day la cau tra loi 4",
        "3": "day la cau tra loi 5",
        "4": "day la cau tra loi 6"
      },
      "correct": 2
    }
  ]

  loadProject() {
    return this.projectService.getAllProject().subscribe(
      result => {
        if (result) {
          this.projects = result;
        } else {
          this.projects = [];
        }
      }
    );
  }

  onsubmit(){
    if(this.checked === this.proExercises.length) console.log("All true");
  }

}

