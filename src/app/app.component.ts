import { Component, OnInit } from '@angular/core';
import { TNewTodo, TodosService, TTodo } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: TTodo[] = [];
  isLoading = false;
  todoTitle = '';
  errorMessage = '';

  constructor(private todosService: TodosService) {}

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

  postTodo(newTodo: TNewTodo) {
    this.todosService.postTodo(newTodo).subscribe((todo) => this.todos.push(todo));
  }

  getTodos() {
    this.isLoading = true;
    this.todosService.getTodos().subscribe(
      (todos) => {
        this.todos = todos;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    });
  }

  completeTodo(id: number) {
    this.todosService.putTodo(id, { completed: true }).subscribe((newTodo) => {
      this.todos.find((todo) => todo.id === newTodo.id)!.completed = newTodo.completed;
    });
  }
}
