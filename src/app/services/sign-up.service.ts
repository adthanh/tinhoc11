import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { SignUpRequest } from '../requests/sign-up-request';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  UserAuthentication(request: SignUpRequest) {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }

  getRegister(request : SignUpRequest, errorCb: any) {
    return this.http.post(environment.API_ENDPOINT + '/register', request)
      .pipe(
        map(
          result => {
            if (result) {
              return result;
            }
          },
          (response: any) => {
            return response;
          }
        ),
      );
  }
}
