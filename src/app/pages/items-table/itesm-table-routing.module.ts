import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { ItemsTableComponent } from './items-table.component';


const routes: Routes = [{
  
    path: '',
    component: ItemsTableComponent,
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ItemsTableRoutingModule {
  }