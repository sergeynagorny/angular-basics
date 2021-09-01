import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    return this.http.post<TTodo>('https://jsonplaceholder.typicode.com/todos', newTodo, {
      headers: new HttpHeaders({
        'My-Custom-Header': Math.random().toString(),
      }),
    });
  }

  getTodos(): Observable<TTodo[]> {
    const params = this.getParams({ _custom: 'any', _limit: '5' });
    return this.http.get<TTodo[]>('https://jsonplaceholder.typicode.com/todos', { params }).pipe(delay(500));
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  putTodo(id: number, TNewData: Partial<TTodo>): Observable<TTodo> {
    return this.http.put<TTodo>(`https://jsonplaceholder.typicode.com/todos/${id}`, TNewData);
  }

  getParams(params: { [key: string]: string }) {
    return Object.entries(params).reduce((acc, [key, value]) => acc.append(key, value), new HttpParams());
  }
}
