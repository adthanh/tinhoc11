import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { LoginRequest } from '../requests/login-request';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  [x: string]: any;
  error(message: any, arg1: string) {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }

  UserAuthentication(request: LoginRequest, errorCb: any) {
    return this.http.post(environment.API_POINT + '/token', request)
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

  logout() {
    window.sessionStorage.removeItem('userToken');
  }
}
