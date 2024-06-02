import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent implements OnInit {
  data: any = {};
  constructor(public reqServ: RequestService) {}

  ngOnInit(): void {
    this.data = this.reqServ.storedData;
    console.log(this.data);
  }
}
