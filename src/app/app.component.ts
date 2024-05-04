import { Component, OnInit } from '@angular/core';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng_http';
  constructor(private reqServ: RequestService) {}

  ngOnInit() {
    this.reqServ.auth().subscribe({
      next: (data: any) => {
        this.reqServ.storedData = data;
      },
      complete: () => console.log('data call complete'),
    });
  }
}
