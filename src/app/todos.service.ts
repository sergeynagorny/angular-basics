import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export type TTodo = {
  id: number;
  title: string;
  completed: boolean;
};

export type TNewTodo = Omit<TTodo, 'id'>;

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private http: HttpClient) {}

  postTodo(newTodo: TNewTodo): Observable<TTodo> {
    return this.http.post<TTodo>('https://jsonplaceholder.typicode.com/todos', newTodo);
  }

  getTodos(): Observable<TTodo[]> {
    return this.http.get<TTodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2').pipe(delay(500));
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
