import {Component, OnInit} from '@angular/core';
import './editorcode';
import {CodeValueRequest} from '../../../requests/code-value-request';
import {CodeValueService} from '../../../services/code-value.service';
import base64 from 'base-64';
import utf8 from 'utf8';

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

  constructor(private codeValueService: CodeValueService) {
  }

  ngOnInit() {
    this.output = '';

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
}

