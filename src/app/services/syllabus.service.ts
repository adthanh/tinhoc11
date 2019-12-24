import { RestResult } from './../response/rest-result';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Syllabus } from '../response/syllabus-dto';
import { SyllabusRequest } from '../requests/syllabus-request';


@Injectable({ providedIn: 'root' })
export class SyllabusService {
  [x: string]: any;
  constructor(private http: HttpClient) { }

  getAllSyllabus() {
    return this.http.get<Syllabus[]>(environment.API_ENDPOINT + '/syllabus/getall')
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
  
  createSyllabus(request: SyllabusRequest) {
    return this.http.post<Syllabus[]>(environment.API_ENDPOINT + '/syllabus/create/', request).pipe(
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

  searchSyllabus(name : any){
    return this.http.get<Syllabus[]>(environment.API_ENDPOINT + '/syllabus/findbyname?name=' + name)
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

  updateSyllabus(request: SyllabusRequest){
    return this.http.post(environment.API_ENDPOINT + '/syllabus/edit' , request)
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

  deleteSyllabus(id: number){
    return this.http.delete<Syllabus[]>(environment.API_ENDPOINT + '/syllabus/delete?id=' + id)
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

  getlistsyllabusbygroup(){
    return this.http.get<Syllabus[]>(environment.API_ENDPOINT + '/syllabus/getlistsyllabusbygroup')
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

    // createSyllabus(name: string, subName: string) {
  //   let customHeaders = new HttpHeaders();
  //   const payload = new HttpParams()
  //   .set('name', name)
  //   .set('sub_name', subName);
  //   customHeaders = customHeaders.set('Content-Type', 'application/x-www-form-urlencoded');
  //   return this.http.post(environment.API_ENDPOINT + '/syllabus/create', payload, {headers: customHeaders}).pipe(
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
}


