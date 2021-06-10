import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';

import { FlexboxExampleRoutingModule } from './flexbox-example-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    FlexboxExampleRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class FlexboxExampleModule { }
