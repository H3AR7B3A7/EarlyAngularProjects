import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-favorite-cars',
  templateUrl: './favorite-cars.component.html',
  styleUrls: ['./favorite-cars.component.css']
})
export class FavoriteCarsComponent implements OnInit {
  cars!: Car[];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

}
