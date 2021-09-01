import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

export type TTodo = {
  id: number;
  title: string;
  completed: boolean;
};

export type TNewTodo = Omit<TTodo, 'id'>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: TTodo[] = [];
  isLoading = false;
  todoTitle = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) return;

    const newTodo: TNewTodo = {
      title: this.todoTitle,
      completed: false,
    };

    this.postTodo(newTodo);
  }

  getTodos() {
    this.isLoading = true;
    this.http
      .get<TTodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
      .subscribe((todos) => {
        this.todos = todos;
        this.isLoading = false;
      });
  }

  postTodo(newTodo: TNewTodo) {
    this.http
      .post<TTodo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe((todo) => this.todos.push(todo));
  }

  deleteTodo(id: number) {
    this.http
      .delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(() => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
      });
  }
}
