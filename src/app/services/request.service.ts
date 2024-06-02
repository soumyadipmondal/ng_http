import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  storedData: any[] = [1, 2, 3];

  constructor(private _http: HttpClient) {}

  auth() {
    return this._http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      catchError((err) => {
        const err1 = { message: 'Error Occured', errDesc: err };
        console.log('service level called', err1);
        return throwError(() => err1);
      })
    );
  }
}
