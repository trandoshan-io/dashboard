import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageRoutingModule} from './page-routing.module';
import {PageListComponent} from './page-list.component';
import {MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';


@NgModule({
  declarations: [PageListComponent],
  imports: [
    CommonModule,
    PageRoutingModule, MatTableModule, MatFormFieldModule, MatInputModule
  ]
})
export class PageModule {
}
