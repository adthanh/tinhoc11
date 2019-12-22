import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { LoginRequest } from '../requests/login-request';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  url: string = "localhost:50000/oauth/token";

  UserAuthentication(UserName: string, Password: string) {
    let postData = { email: UserName, password: Password };
    return this.http.post<any>(this.url, postData)
      .pipe(map(restaurant => {
        if (restaurant) {
          localStorage.setItem('currentRestaurant', JSON.stringify(restaurant));
          return restaurant;
        }
      })
      );
    // return this.http.post(this.url, request)
    //   .pipe(
    //     map(
    //       result => {
    //         return result;
    //       },
    //       (error: any) => {
    //         console.log(error);
    //       }
    //     ),
    //   );
  }

}
