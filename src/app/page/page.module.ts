import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageListComponent } from './page-list.component';


@NgModule({
  declarations: [PageListComponent],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
