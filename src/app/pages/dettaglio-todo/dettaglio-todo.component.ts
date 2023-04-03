import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {Todo} from "../../store/interfaces";
import {first, Observable} from "rxjs";
import {selectTodoById} from "../../store/selector";

@Component({
  selector: 'app-dettaglio-todo',
  templateUrl: './dettaglio-todo.component.html',
  styleUrls: ['./dettaglio-todo.component.css']
})
export class DettaglioTodoComponent {

  todo: Todo | undefined;

  constructor(private store: Store, private router: Router) {
    this.store.pipe(select(selectTodoById))
      .pipe(first())
      .subscribe(todo => {
        this.todo = todo;
      });
  }

  public goBack() {
    this.router.navigate(['']);
  }


}
