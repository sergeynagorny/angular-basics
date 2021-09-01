import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export type TTodo = {
  id: number;
  title: string;
  completed: boolean;
};
export type TNewTodo = Omit<TTodo, 'id'>;
export type TNewData = Partial<TTodo>;

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private http: HttpClient) {}

  postTodo(newTodo: TNewTodo): Observable<TTodo> {
    return this.http.post<TTodo>('https://jsonplaceholder.typicode.com/todos', newTodo, {
      headers: new HttpHeaders({
        'My-Custom-Header': Math.random().toString(),
      }),
    });
  }

  getTodos(): Observable<TTodo[]> {
    return this.http.get<TTodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2').pipe(delay(500));
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  putTodo(id: number, TNewData: TNewData): Observable<TTodo> {
    return this.http.put<TTodo>(`https://jsonplaceholder.typicode.com/todos/${id}`, TNewData);
  }
}
