import {Component, OnInit} from '@angular/core';
import './editorcode';
import {CodeValueRequest} from '../../../requests/code-value-request';
import {CodeValueService} from '../../../services/code-value.service';
import base64 from 'base-64';
import utf8 from 'utf8';
import {FormControl} from '@angular/forms';
import {Project} from 'src/app/response/project-dto';
import {ProjectService} from 'src/app/services/project.service';
import {ActivatedRoute, Router} from '@angular/router';

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
    private codeValueService: CodeValueService,
  ) {
    this.id = this.route.snapshot.params.id;
  }

  project: any = {};

  error = '';
  output = '';
  check = ['Hello World!'];
  isError = undefined;
  correct: string = undefined;
  checked = 0;
  id = '';
  isCode = true;
  selectedEntry: any;
  questionCorrect: any;

  proExercises = [];

  ngOnInit() {
    this.output = '';
    this.loadProject();
  }

  getCodeValue() {
    this.output = '';
    this.isError = '';
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
              this.isError = 'Bạn đã code đúng rồi nhá :D Hãy qua bài mới nào';
            }else{
              this.isError = 'Bạn đã code gần đúng rồi. Hãy cố gắng thêm chút nữa.';
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

  onSelectionChange(question: any, currentAns: any) {
    // this.selectedEntry = items.key;
    if (question.correct == currentAns) {
      this.checked++;
    } else {
      this.checked--;
    }
    if (this.checked < 0) {
      this.checked = 0;
    }
  }

  loadProject() {
    return this.projectService.findById(this.id).subscribe(
      result => {
        if (result) {
          this.project = result;
          this.isCode = this.project.type !== 1;
          if (this.project.type === 1) {
            this.proExercises = JSON.parse(this.project.json_data);
          } else {
            this.check = JSON.parse(this.project.json_data);
          }
        } else {
          this.project = [];
        }
      }
    );
  }

  onsubmit() {
    if (this.checked === this.proExercises.length) {
      this.correct = 'Bạn trả lời đúng rồi đó - Hãy qua bài khác làm nhé 😙';
    } else {
      this.correct = 'Bạn trả lời sai rồi vui lòng thử lại nhé 😑';
    }
  }
  
  hiddenMainLeft() {
    var hidden = document.getElementById('hidden-main-left');
    if (hidden.style.display === 'block')
    {
      hidden.style.display = 'none';
      hidden.style.transition= '1s';
    }
    else {
      hidden.style.display = 'block';
      hidden.style.transition= '1s';
    }
  }

}

