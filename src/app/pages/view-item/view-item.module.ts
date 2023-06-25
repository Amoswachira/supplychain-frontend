import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { CdkTableModule } from '@angular/cdk/table';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbActionsModule, NbButtonModule, NbTabsetModule, NbUserModule, NbRadioModule, NbSelectModule, NbListModule, NbLayoutModule, NbSpinnerModule, NbTooltipModule } from '@nebular/theme';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ThemeModule } from '../../@theme/theme.module';
import { ViewItemRoutingModule } from './view-item-routing.module';
import { ViewItemComponent } from './view-item.component';



@NgModule({
  declarations: [
    ViewItemComponent
    ],
  imports: [
    ViewItemRoutingModule,
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
export class ViewItemModule { }