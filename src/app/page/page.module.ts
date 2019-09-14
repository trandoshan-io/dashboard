import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageRoutingModule} from './page-routing.module';
import {PageListComponent} from './page-list.component';
import {MatTableModule} from '@angular/material';


@NgModule({
  declarations: [PageListComponent],
  imports: [
    CommonModule,
    PageRoutingModule, MatTableModule
  ]
})
export class PageModule {
}
