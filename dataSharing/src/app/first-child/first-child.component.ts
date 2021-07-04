import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';


@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent implements OnInit, OnDestroy {

  @Input() newTitle: any

  @Output() eventClick = new EventEmitter

  subscription!: Subscription;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.subscription = this.dataService.currentFirstChildTitle.subscribe(newTitle => {
      this.newTitle = newTitle
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  handleClick(): void {
    this.eventClick.emit('Title Set By Child')
  }

}
