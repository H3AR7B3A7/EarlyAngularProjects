import { Injectable } from '@angular/core';
import { Car } from '../car.model';
import { CarService } from '../car.service';

@Injectable()
export class CarDetailService {
  private car?: Car;

  constructor(private carService: CarService) { }

  getCar(serialNumber: number): Car | undefined {
    const cars = this.carService.getCars();
    if (!this.car){
      this.car = cars.find(car => car.serialNumber === serialNumber);
    }
    return this.car;
  }
}
