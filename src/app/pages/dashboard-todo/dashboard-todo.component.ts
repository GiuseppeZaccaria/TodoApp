import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "../../store/interfaces";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store";
import {selectAllTodos, selectNoDataError} from "../../store/selector";
import {AddData, loadMyData, Remove, Reply, Toggle} from "../../store/actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-todo',
  templateUrl: './dashboard-todo.component.html',
  styleUrls: ['./dashboard-todo.component.css']
})
export class DashboardTodoComponent implements OnInit{
  todos$: Observable<Todo[]>;
  noDataError$: Observable<boolean>
  newTodoText: string = "";
  index: number;

  constructor(private store: Store<AppState>,
              private router: Router) {
    this.todos$ = this.store.pipe(select(selectAllTodos));
    this.noDataError$ = this.store.pipe(select(selectNoDataError));
    this.index = 1;
  }

  ngOnInit(): void {
    this.store.dispatch(loadMyData());
  }

  addTodo() {
    this.index++;
    this.store.dispatch(AddData({ text: this.newTodoText || 'Untitled task', id: this.index }));
  }


}
