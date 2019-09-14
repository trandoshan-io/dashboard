import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import {MatToolbarModule} from '@angular/material';



@NgModule({
  declarations: [ToolbarComponent],
  exports: [
    ToolbarComponent
  ],
  imports: [
    CommonModule, MatToolbarModule
  ]
})
export class ToolbarModule { }
