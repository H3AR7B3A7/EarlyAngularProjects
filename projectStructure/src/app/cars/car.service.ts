import { Injectable } from '@angular/core';
import { Car } from './car.model';

const car0: Car = {
  serialNumber: 1,
  brand: 'Suzuki',
  carModel: 'Swift',
  type: 'Hatchback'
};
const car1: Car = {
  serialNumber: 2,
  brand: 'Suzuki',
  carModel: 'Ciaz',
  type: 'Sedan'
};
const car2: Car = {
  serialNumber: 3,
  brand: 'Datsun',
  carModel: 'GO+',
  type: 'MPV'
};
const car3: Car = {
  serialNumber: 4,
  brand: 'Land Rover',
  carModel: 'Discovery Sport',
  type: 'SUV'
};
const car4: Car = {
  serialNumber: 5,
  brand: 'Volvo',
  carModel: 'S60 Cross Country',
  type: 'Crossover'
};
const car5: Car = {
  serialNumber: 6,
  brand: 'Mercedes-Benz',
  carModel: 'GLE Coupe',
  type: 'Coupe'
};
const car6: Car = {
  serialNumber: 7,
  brand: 'Audi',
  carModel: 'A3',
  type: 'Convertible'
};

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars(): Car[]{
    return [
      car0,
      car1,
      car2,
      car3,
      car4,
      car5,
      car6
    ];
  }
}
