import {Injectable} from '@angular/core';
import {PageModule} from './page.module';

export interface SearchResult {
  url: string;
  crawlDate: Date;
}

interface SearchCommand {
  criteria: string;
}

@Injectable({
  providedIn: PageModule
})
export class PageService {

  constructor() {
  }
}
