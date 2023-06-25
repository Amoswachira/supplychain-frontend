import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { ViewItemComponent } from './view-item.component';



const routes: Routes = [{
  
    path: '',
    component:ViewItemComponent ,
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ViewItemRoutingModule {
  }