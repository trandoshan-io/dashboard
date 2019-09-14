import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageRoutingModule} from './page/page-routing.module';


const routes: Routes = [
  {path: 'pages', loadChildren: () => import('./page/page.module').then(m => m.PageModule)},
  {path: '', pathMatch: 'full', redirectTo: 'pages'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
