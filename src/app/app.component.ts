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
    this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
      this.isLoading = false;
    });
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    });
  }
}
