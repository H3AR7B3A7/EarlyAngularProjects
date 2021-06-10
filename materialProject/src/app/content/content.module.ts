import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ContentRoutingModule } from './content-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexboxComponent } from './flexbox/flexbox.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    ToolbarComponent,
    FlexboxComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
  ]
})
export class ContentModule { }
