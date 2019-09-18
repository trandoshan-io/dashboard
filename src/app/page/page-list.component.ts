import {Component, HostListener, OnInit} from '@angular/core';
import {PageService, SearchResult} from './page.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'url', 'crawlDate'];
  dataSource: SearchResult[] = [];
  searchCriteria = '';

  constructor(private _pageService: PageService) {
  }

  ngOnInit() {
  }

  @HostListener('document:keydown.enter', ['$event'])
  public onKeydownHandler(evt: KeyboardEvent) {
    this._pageService.searchPages(this.searchCriteria).subscribe(pages => this.dataSource = pages);
  }

  public formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const day = date.getDay() < 9 ? '0' + date.getDay() : date.getDay();
    const month = date.getMonth() < 9 ? '0' + date.getMonth() : date.getMonth();
    return day + '/' + month + '/' + date.getFullYear() + ' @ ' + date.getHours() + ':' + date.getMinutes();
  }
}
