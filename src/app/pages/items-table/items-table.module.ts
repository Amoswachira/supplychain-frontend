import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { CdkTableModule } from '@angular/cdk/table';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbActionsModule, NbButtonModule, NbTabsetModule, NbUserModule, NbRadioModule, NbSelectModule, NbListModule, NbLayoutModule, NbSpinnerModule, NbTooltipModule } from '@nebular/theme';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ThemeModule } from '../../@theme/theme.module';
import { ItemsTableComponent } from './items-table.component';
import { ItemsTableRoutingModule } from './itesm-table-routing.module';



@NgModule({
  declarations: [
    ItemsTableComponent
    ],
  imports: [
    ItemsTableRoutingModule,
    CommonModule,
   
  
    FormsModule,

    ReactiveFormsModule,

    CdkTableModule,

    ThemeModule,
    NgxDatatableModule,
    NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,
 
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbUserModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbLayoutModule,
    NbSpinnerModule,
    NbTooltipModule,
  ]
})
export class ItemstableModule { }