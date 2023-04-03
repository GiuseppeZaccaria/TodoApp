import {AuthObj, Todo} from "./interfaces";
import {RouterReducerState} from "@ngrx/router-store";

export interface AppState {
  todoState: TodoState,
  router: RouterReducerState,
  authState: AuthState
}

export interface AuthState {
  user: AuthObj,
  isLogged: boolean
}

export interface TodoState {
  todos: Todo[],
  noData: boolean,
  error: any
}
