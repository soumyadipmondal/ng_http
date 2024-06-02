import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor() {}

  handleError(error: HttpErrorResponse) {
    console.log('Global Services called');
    console.log(typeof error);
  }
}
