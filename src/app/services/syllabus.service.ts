import { RestResult } from './../response/rest-result';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class SyllabusService {
  constructor(private http: HttpClient) { }
}
