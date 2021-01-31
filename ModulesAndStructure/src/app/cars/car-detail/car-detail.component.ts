import { Component, Host, Input, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarDetailService } from './car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers: [CarDetailService]
})
export class CarDetailComponent implements OnInit {

  car?: Car;
  @Input()
  serialNumber!: number;

  constructor(@Host() private carDetailService: CarDetailService) { }

  ngOnInit(): void {
    this.car = this.carDetailService.getCar(this.serialNumber);
  }
}
