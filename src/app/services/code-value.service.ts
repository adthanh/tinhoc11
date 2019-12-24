import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {CodeValueRequest} from '../requests/code-value-request';
@Injectable({
  providedIn: 'root'
})
export class CodeValueService {

  constructor(private http: HttpClient) { }

  getCodeValue(request: CodeValueRequest) {
    return this.http.post(environment.API_ENDPOINT + '/pascal/compiler', request)
      .pipe(
        map(
          result => {
            return result;
          },
          (error: any) => {
            console.log(error);
          }
        ),
      );
  }

}
