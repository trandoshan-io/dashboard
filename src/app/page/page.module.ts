import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageRoutingModule} from './page-routing.module';
import {PageListComponent} from './page-list.component';
import {MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [PageListComponent],
  imports: [
    CommonModule,
    PageRoutingModule, MatTableModule, MatFormFieldModule, MatInputModule, FormsModule
  ]
})
export class PageModule {
}
