import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {selectHttpError} from "./store/selector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  httpError$: Observable<boolean>

  dataSets = [ {
    label: "Sales1",
    data: ['467','576', '572', '79', '92',
      '574', '573', '576'],
    backgroundColor: 'black'
  },
    {
      label: "Sales2",
      data: ['467','576', '572', '79', '92',
        '574', '573', '576'],
      backgroundColor: 'green'
    }];

  constructor(private store: Store) {
    this.httpError$ = this.store.pipe(select(selectHttpError));
  }


}
