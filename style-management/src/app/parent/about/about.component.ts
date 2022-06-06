import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpeningHoursService } from './opening-hours.service';

@Component({
  selector: 'app-about',
  template: `
    <div class="content">
    <h3>Opening Hours:</h3>
    <ul>
      <li *ngFor="let hours of openingHours">{{ hours.day }} : {{ hours.hours }}</li>
    </ul>
    </div>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  openingHours?: any

  constructor(
    private openingHoursService: OpeningHoursService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.openingHours = this.route.snapshot.data['hours']
  }
}
