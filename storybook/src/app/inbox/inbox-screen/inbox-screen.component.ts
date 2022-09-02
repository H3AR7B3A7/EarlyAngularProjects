import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-inbox-screen',
  templateUrl: './inbox-screen.component.html',
  styleUrls: ['./inbox-screen.component.css']
})
export class InboxScreenComponent {
  @Input() error: any;
}
