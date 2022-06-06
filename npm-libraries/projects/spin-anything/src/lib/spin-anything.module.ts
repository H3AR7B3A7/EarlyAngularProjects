import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinAnythingComponent } from './spin-anything.component';



@NgModule({
  declarations: [
    SpinAnythingComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinAnythingComponent
  ]
})
export class SpinAnythingModule { }
