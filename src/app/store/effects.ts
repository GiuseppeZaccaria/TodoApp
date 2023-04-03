import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, concatMap, exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators';
import {
  ActionSubmit,
  AddData,
  AddDataSuccess,
  loadMyData,
  loadMyDataError,
  loadMyDataSuccess, LoginSuccess,
  noData,
  Remove,
  RemoveDataSuccess
} from './actions';
import {TodoService} from "../services/todo.service";
import {of} from "rxjs";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoSrv: TodoService, private authSrv: AuthService,
              private route: Router) {}

  loadMyData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMyData),
      switchMap(() =>
        this.todoSrv.getData().pipe(
          map(data => {
            if (!data.payload.length) {
              return noData({state: true});
            }else{
              return loadMyDataSuccess({ response: data.payload, state: false })
            }
          }),
          catchError(error => {
            return of(loadMyDataError({ error }))
          })
        )
      )
    )
  );

  addData$ = createEffect(() => this.actions$.pipe(
    ofType(AddData),
    concatMap((action) => this.todoSrv.addTodo(action)
      .pipe(
        map((data) => AddDataSuccess({ id: action.id, text: action.text })),
      )),
  ));

  removeData$ = createEffect(() => this.actions$.pipe(
    ofType(Remove),
    mergeMap((action) => this.todoSrv.removeTodo(action)
      .pipe(
        map((data) => RemoveDataSuccess({ id: action.id })),
      )),
  ));

  actionSubmit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionSubmit),
      switchMap((action) =>
        this.authSrv.login().pipe(
          map(data => {
            this.route.navigate(['dashboard']);
            return LoginSuccess({ state: {username: action.state.username, password: action.state.password } })
          }),
          catchError(error => {
            return of(loadMyDataError({ error }))
          })
        )
      )
    )
  );

}
