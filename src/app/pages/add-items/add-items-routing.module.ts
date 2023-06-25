import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { AddItemsComponent } from './add-items.component';



const routes: Routes = [{
  
    path: '',
    component: AddItemsComponent,
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AddItemsRoutingModule {
  }