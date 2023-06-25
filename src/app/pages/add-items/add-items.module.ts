import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { CdkTableModule } from '@angular/cdk/table';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbActionsModule, NbButtonModule, NbTabsetModule, NbUserModule, NbRadioModule, NbSelectModule, NbListModule, NbLayoutModule, NbSpinnerModule, NbTooltipModule } from '@nebular/theme';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ThemeModule } from '../../@theme/theme.module';
import { AddItemsRoutingModule } from './add-items-routing.module';
import { AddItemsComponent } from './add-items.component';




@NgModule({
  declarations: [
    AddItemsComponent
    ],
  imports: [
    AddItemsRoutingModule,
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
export class AddItemsModule { }