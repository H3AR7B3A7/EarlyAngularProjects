import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos = new BehaviorSubject<Todo[]>([]);
  private _todos2 = new BehaviorSubject<Todo[]>([]);
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private dataStore: { todos: Todo[], todos2: Todo[] } = { todos: [], todos2: [] };

  constructor(private http: HttpClient) { }


  // FIRST SUBJECT

  get todos() {
    return this._todos.asObservable();
  }

  loadAll(): void {
    this.http.get<Todo[]>(`${this.baseUrl}/todos?_limit=5`).subscribe(
      (data) => {
        this.dataStore.todos = data;
        this._todos.next(Object.assign(this.dataStore).todos);
      },
      (error: any) => console.log('Could not load todos: ' + error.message)
    );
  }

  addOne(): void {
    let myTodo: Todo = {
      userId: 1,
      id: 6,
      title: 'My New Todo',
      completed: false
    }
    this.dataStore.todos.push(myTodo)
  }


  // SECOND SUBJECT

  get todos2() {
    return this._todos2.asObservable();
  }

  loadAll2(): void {
    this.http.get<Todo[]>(`${this.baseUrl}/todos?_start=5&_limit=5`).subscribe(
      (data) => {
        this.dataStore.todos2 = data;
        this._todos2.next(Object.assign(this.dataStore).todos2);
      },
      (error: any) => console.log('Could not load todos: ' + error.message)
    );
  }

  addOne2(): void {
    let myTodo: Todo = {
      userId: 1,
      id: 11,
      title: 'My New Todo',
      completed: true
    }
    this.dataStore.todos2.push(myTodo)
  }
}
