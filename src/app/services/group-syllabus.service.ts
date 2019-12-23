import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { GroupSyllabus } from '../response/group-syllabus-dto';
import { GroupSyllabusRequest } from '../requests/group-syllabus-request';

@Injectable({
  providedIn: 'root'
})
export class GroupSyllabusService {
  [x: string]: any;
  constructor(private http: HttpClient) { }

  getAllGroupSyllabus() {
    return this.http.get<GroupSyllabus[]>(environment.API_ENDPOINT + '/groupsyllabus/getall')
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
  createGroupSyllabus(request: GroupSyllabusRequest) {
    return this.http.post<GroupSyllabus[]>(environment.API_ENDPOINT + '/groupsyllabus/create/', request).pipe(
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
  searchGroupSyllabus(name : any){
    return this.http.get<GroupSyllabus[]>(environment.API_ENDPOINT + '/groupsyllabus/findbyname?name=' + name)
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
  deleteGroupSyllabus(id: any){
    return this.http.delete<GroupSyllabus[]>(environment.API_ENDPOINT + '/groupsyllabus/delete?id='+ id)
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
  updateGroupSyllabus(request: GroupSyllabusRequest){
    return this.http.post(environment.API_ENDPOINT + '/groupsyllabus/edit/', request)
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

    // createGroupSyllabus(createdAt: string, updatedAt: string, name: string) {
  //   let customHeaders = new HttpHeaders();
  //   const payload = new HttpParams()
  //   .set('name', name)
  //   .set('created_at', createdAt)
  //   .set('updated_at', updatedAt);
  //   customHeaders = customHeaders.set('Content-Type', 'application/x-www-form-urlencoded');
  //   return this.http.post(environment.API_ENDPOINT + '/groupsyllabus/create', payload, {headers: customHeaders}).pipe(
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
