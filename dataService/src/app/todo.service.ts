import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos = new BehaviorSubject<Todo[]>([]);
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private dataStore: { todos: Todo[] } = { todos: [] };

  constructor(private http: HttpClient) { }

  get todos() {
    return this._todos.asObservable();
  }

  loadAll(): void {
    this.http.get<Todo[]>(`${this.baseUrl}/todos?_limit=5`).subscribe(
      (data) => {
        this.dataStore.todos = data;
        this._todos.next(Object.assign({}, this.dataStore).todos);
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
}
