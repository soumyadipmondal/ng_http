import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RequestService } from './services/request.service';
import { ChangeDetectorRef } from '@angular/core';
import { catchError, of, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;
  error: any = null;
  constructor(
    private reqServ: RequestService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.reqServ
      .auth()
      .pipe(
        tap((data: any) => {
          console.log('App tap level called', data);
        }),
        catchError((err) => {
          console.log('App service level called', err);
          return throwError(() => err);
        })
      )

      .subscribe({
        next: (data: any) => {
          console.log('App data called', data);
          this.reqServ.storedData = data;
          //this.cdr.markForCheck();
        },

        error: (error: any) => {
          this.isLoading = !this.isLoading;
          this.reqServ.storedData = [];
          this.error = error;
        },

        complete: () => (this.isLoading = !this.isLoading),
      });
  }
}
