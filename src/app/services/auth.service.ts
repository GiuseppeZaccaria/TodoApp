import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlForGetTodoData = 'assets/get-todo.json';
  private urlForAddRemoveTodoData = 'assets/add-todo.json';

  constructor(private http: HttpClient) {}

  public login(): Observable<any> {
    return this.http.get<any>(this.urlForGetTodoData);
  }


}
