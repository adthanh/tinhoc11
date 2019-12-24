import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {map} from 'rxjs/operators';
import {Project} from '../response/project-dto';
import {ProjectRequest} from '../requests/project-request';
import {StoreRootModule} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  getAllProject() {
    return this.http.get<Project[]>(environment.API_ENDPOINT + '/project/getall')
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

  createProject(request: ProjectRequest) {
    return this.http.post<Project[]>(environment.API_ENDPOINT + '/project/create/', request).pipe(
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

  searchProject(name: any) {
    return this.http.get<Project[]>(environment.API_ENDPOINT + '/project/findbyname?name=' + name)
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

  updateProject(request: ProjectRequest) {
    return this.http.post<Project[]>(environment.API_ENDPOINT + '/project/edit/', request)
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

  deleteProject(id: number) {
    return this.http.delete<Project[]>(environment.API_ENDPOINT + '/project/delete?id=' + id)
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

  findById(id: string) {
    return this.http.get<Project[]>(environment.API_ENDPOINT + '/project/findbyid?id=' + id)
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

  getCout(){
    return this.http.get(environment.API_ENDPOINT + '/home/getcount')
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
