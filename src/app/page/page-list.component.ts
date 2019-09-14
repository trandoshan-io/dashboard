import { Component, OnInit } from '@angular/core';
import {PageDetail, PageService} from './page.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  displayedColumns: string[] = ['url', 'crawlDate'];
  dataSource: PageDetail[] = [{url: 'http://fezfg4342fezgrzh.onion/index.php', crawlDate: new Date()}];

  constructor(private _pageService: PageService) { }

  ngOnInit() {
  }

  public formatDate(date: Date): string {
    const day = date.getDay() < 9 ? '0' + date.getDay() : date.getDay();
    const month = date.getMonth() < 9 ? '0' + date.getMonth() : date.getMonth();
    return day + '/' + month + '/' + date.getFullYear() + ' @ ' + date.getHours() + ':' + date.getMinutes();
  }
}
