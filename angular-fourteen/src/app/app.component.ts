import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

@Component({
  standalone: true,
  imports: [
    AppRoutingModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
