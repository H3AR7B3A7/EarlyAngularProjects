import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { Todo } from './Todo'
import { TodoService } from './todo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'dataService'
  todos!: Todo[]
  todos2!: Todo[]
  subscription!: Subscription
  subscription2!: Subscription

  constructor(
    private todoService: TodoService
  ) { }


  ngOnInit(): void {
    this.subscription = this.todoService.todos.subscribe(
      data => this.todos = data
    )
    this.todoService.loadAll()

    this.subscription2 = this.todoService.todos2.subscribe(
      data => this.todos2 = data
    )
    this.todoService.loadAll2()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    this.subscription2.unsubscribe()
  }

  add(): void {
    this.todoService.addOne()
  }

  add2(): void {
    this.todoService.addOne2()
  }
}
