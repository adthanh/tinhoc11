import {Component, OnInit} from '@angular/core';
import './editorcode';
import {CodeValueRequest} from '../../../requests/code-value-request';
import {CodeValueService} from '../../../services/code-value.service';
import base64 from 'base-64';
import utf8 from 'utf8';
import { FormControl } from '@angular/forms';
import { Project } from 'src/app/response/project-dto';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})

export class ExercisesComponent implements OnInit {
  error = '';
  output = '';
  check = ['Hello World!'];
  isDone = false;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private codeValueService: CodeValueService
  ) { }

  projects: Project[];
  isCorrect: FormControl = new FormControl;
  checked: number = 0;
  id = '';
  ngOnInit() {
    this.output = '';
    this.loadProject();
    this.id = this.route.snapshot.params['id'];
  }

  getCodeValue() {
    this.output = '';
    this.isDone = false;
    const request = new CodeValueRequest();
    // @ts-ignore
    request.code = this.encodeBase64(window.getCodeValue());
    this.codeValueService.getCodeValue(request).subscribe(
      (result: any) => {
        if (result.success) {
          // @ts-ignore
          window.customConsoleLog = (x) => {
            this.output += x + '\n';
            if (this.check.includes(x)) {
              this.isDone = true;
            }
          };
          eval.call(this, atob(result.message));
        } else {
          this.error = result.message
            .replace('Parse error on line 1', 'Lỗi câu lệnh ở dòng ')
            .replace('Expecting \'', 'Mong đợi \'')
            .replace('got \'', 'hiện tại \'');
        }


        return result;
      },
      error => {
        console.log('error ' + error);
      }
    );
  }

  encodeBase64(text) {
    const bytes = utf8.encode(text);
    return base64.encode(bytes);
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

