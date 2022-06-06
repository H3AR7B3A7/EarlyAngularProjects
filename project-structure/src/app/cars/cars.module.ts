import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list/car-list.component';
import { FavoriteCarsComponent } from './favorite-cars/favorite-cars.component';
import { CarDetailComponent } from './car-detail/car-detail.component';



@NgModule({
  declarations: [CarListComponent, FavoriteCarsComponent, CarDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [CarListComponent]
})
export class CarsModule { }
