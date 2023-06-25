import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { AddEventComponent } from './add-event.component';




const routes: Routes = [{
  
    path: '',
    component: AddEventComponent,
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AddEventRoutingModule {
  }