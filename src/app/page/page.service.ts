import {Injectable} from '@angular/core';
import {PageModule} from './page.module';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

interface ClientCommand {
  command: string;
  payload: string;
}

export interface SearchResult {
  id: string;
  url: string;
  crawlDate: Date;
}

@Injectable({
  providedIn: PageModule
})
export class PageService {

  constructor(private _httpClient: HttpClient) {
  }

  public searchPages(criteria: string): Observable<SearchResult[]> {
    return this._httpClient.get<SearchResult[]>(environment.apiUrl + '/pages', {
      params: new HttpParams().set('criteria', criteria)
    });
  }
}
