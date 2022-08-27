import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  /**
  * @ignore
  * Component property to define ordering of tasks
  */
  tasksInOrder: Task[] = [];

  /** Checks if it's in loading state */
  @Input() loading = false;

  /** Event to change the task to pinned */
  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  /** Event to change the task to archived */
  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();

  @Input()
  set tasks(arr: Task[]) {
    const initialTasks = [
      ...arr.filter(t => t.state === 'TASK_PINNED'),
      ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ];
    const filteredTasks = initialTasks.filter(
      t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
    this.tasksInOrder = filteredTasks.filter(
      t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
  }
}
