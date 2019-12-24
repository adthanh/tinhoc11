import { User } from './../response/user-dto';
import { UserRequest } from './../requests/user-request';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { SignUpRequest } from '../requests/sign-up-request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get<User[]>(environment.API_ENDPOINT + '/users/getall')
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
  
  // createUser(request: UserRequest) {
  //   return this.http.post<User[]>(environment.API_ENDPOINT + '/users/create/', request).pipe(
  //     map(
  //       result => {
  //         return result;
  //       },
  //       (error: any) => {
  //         console.log(error);
  //       }
  //     ),
  //   );
  // }

  createUser(request : SignUpRequest) {
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

  searchUser(name : any){
    return this.http.get<User[]>(environment.API_ENDPOINT + '/users/findbyname?name=' + name)
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

  deleteUser(id: any){
    return this.http.delete<User[]>(environment.API_ENDPOINT + '/users/delete?id='+ id)
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

  updateUser(request: UserRequest){
    return this.http.post(environment.API_ENDPOINT + '/users/edit/', request)
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
