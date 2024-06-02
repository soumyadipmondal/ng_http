import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrInterceptor implements HttpInterceptor {
  constructor(private _toastr: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    //console.log("Interceptor Called");
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('Interceptor Called');
        const errorMessage: { errMsg: string; isHandled: boolean } =
          this.errorHandler(error);
        const toastConfig = {
          progressBar: true,
          positionClass: 'toast-top-right',
          closeButton: true,
        };
        if (errorMessage.isHandled) {
          //return of(error)
          this._toastr.error(errorMessage.errMsg, 'Error', toastConfig);
          return throwError(errorMessage.errMsg);
        } else {
          this._toastr.error(errorMessage.errMsg, 'Error', toastConfig);
          return throwError(errorMessage);
        }
      })
    );
  }

  errorHandler(err: HttpErrorResponse): { errMsg: string; isHandled: boolean } {
    console.log(err);
    let errMsg = '';
    let isHandled: boolean = false;
    if (err instanceof HttpErrorResponse) {
      if (err instanceof ErrorEvent) {
        //Client Side Error

        errMsg = 'Client Side Error Occure';
        return { errMsg, isHandled };
      } else {
        //Server side Error
        console.log('Hit');
        errMsg = 'Server Side Error Occure::';
        switch (err.status) {
          case 400:
            errMsg += 'Bad Request Made';
            isHandled = true;
            break;
          case 401:
            errMsg += 'User is Unauthorized';
            isHandled = true;
            break;
          case 403:
            errMsg += 'Forbidden Access';
            isHandled = true;
            break;
          case 404:
            errMsg += 'URL Not Found';
            isHandled = true;
            break;

          default:
            errMsg += 'Unknown Error';
            isHandled = true;
        }
        return { errMsg, isHandled };
      }
    } else {
      console.log('Un');
      errMsg = 'Unknown Error';
      return { errMsg, isHandled };
    }
  }
}
