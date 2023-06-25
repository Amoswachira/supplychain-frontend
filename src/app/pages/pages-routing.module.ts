import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ItemsTableComponent } from './items-table/items-table.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { AddEventComponent } from './add-event/add-event.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'items',
      component: ItemsTableComponent,
    },
    {
      path: '',
      redirectTo: 'items',
      pathMatch: 'full',
    },
    {
      path:'add-items',
      component: AddItemsComponent,
    },
    {
      path:'view-item',
      component:ViewItemComponent,
    },
    {
      path:'add-event',
      component:AddEventComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
