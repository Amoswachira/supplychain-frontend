import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ItemstableModule } from './items-table/items-table.module';
import { AddItemsModule } from './add-items/add-items.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ItemstableModule,
    AddItemsModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
