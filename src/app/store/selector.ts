import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState, AuthState, TodoState} from "./index";
import {selectRouteParams} from "./router-selectors";

export const selectTodoState = (state: any) => state.todoState;

export const selectAuthState = (state: any) => state.authState;

export const selectIsLogged = createSelector(
  selectAuthState,
  (state: AuthState) => state.isLogged
);

export const selectAllTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
);

export const selectNoDataError = createSelector(
  selectTodoState,
  (state: TodoState) => state.noData
);

export const selectHttpError = createSelector(
  selectTodoState,
  (state: TodoState) => state.error
);

export const selectTodoById = createSelector(
  selectAllTodos,
  selectRouteParams,
  (todo,  todoId ) => todo.find(x => x.id == parseInt(todoId['id']))
);
