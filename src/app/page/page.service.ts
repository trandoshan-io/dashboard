import {Injectable} from '@angular/core';
import {PageModule} from './page.module';

export interface PageDetail {
  url: string;
  crawlDate: Date;
}

@Injectable({
  providedIn: PageModule
})
export class PageService {

  constructor() {
  }
}
