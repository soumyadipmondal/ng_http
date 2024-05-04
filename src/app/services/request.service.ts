import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  storedData: any = {};

  constructor(private _http: HttpClient) {}

  auth() {
    return this._http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
