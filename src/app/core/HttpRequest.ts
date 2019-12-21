import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpRequest {

  constructor(private http: HttpClient) {}

  createAuthorizationHeader(headers: Headers) {

  }

  get(url) {
    // return this.http.get(url, {
    //   headers: headers
    // });
  }

  post(url, data) {

    let customHeaders = new HttpHeaders();
    customHeaders = customHeaders.set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(url, data, {
      headers: customHeaders
    });
  }
}