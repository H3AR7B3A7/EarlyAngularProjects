import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list/car-list.component';



@NgModule({
  declarations: [CarListComponent],
  imports: [
    CommonModule
  ],
  exports: [CarListComponent]
})
export class CarsModule { }
