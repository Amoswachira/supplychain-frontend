import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ItemstableModule } from './items-table/items-table.module';
import { AddItemsModule } from './add-items/add-items.module';
import { AddEventModule } from './add-event/add-event.module';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ItemstableModule,
    AddItemsModule,
    AddEventModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
