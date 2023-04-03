import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private urlForGetTodoData = 'assets/get-todo.json';
  private urlForAddRemoveTodoData = 'assets/add-todo.json';

  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlForGetTodoData);
  }

  public addTodo(data: any): Observable<any> {
    return this.http.get<any>(this.urlForAddRemoveTodoData);
  }

  public removeTodo(data: any): Observable<any> {
    return this.http.get<any>(this.urlForAddRemoveTodoData);
  }

}
