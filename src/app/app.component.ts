import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  isLoading = false;
  todoTitle = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) return;

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false,
    };

    this.postTodo(newTodo);
  }

  getTodos() {
    this.isLoading = true;
    this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
      .subscribe((todos) => {
        this.todos = todos;
        this.isLoading = false;
      });
  }

  postTodo(newTodo: Todo) {
    this.http
      .post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe((todo) => this.todos.push(todo));
  }
}
