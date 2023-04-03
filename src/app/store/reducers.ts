import {createReducer, on} from '@ngrx/store';
import {
  ActionSubmit,
  AddDataSuccess,
  loadMyDataError,
  loadMyDataSuccess, LoginSuccess,
  noData,
  RemoveDataSuccess,
  Reply,
  Toggle
} from './actions';
import {AuthState, TodoState} from "./index";

const initialTodoState: TodoState = {
  todos: [],
  noData: false,
  error: ''
};

export const todoReducer = createReducer(
  initialTodoState,
  on(AddDataSuccess, Reply, (state, action) => {
    return {
      ...state,
      todos: [...state.todos, { id: action.id, text: action.text, todo: true }]
    };
  }),

  on(loadMyDataSuccess, (state, action) => {
    return {
      ...state,
      todos: action.response,
      noData: action.state
    };
  }),

  on(RemoveDataSuccess, (state, action) => {
    return {
      ...state,
      todos: state.todos.filter(i => i.id !== action.id)
    };
  }),

  on(Toggle, (state, action) => {
    return {
      ...state,
      todos: state.todos.map(i => i.id === action.id ? {...i, todo: !i.todo} : i)
    };
  }),

  on(noData, (state, action) => ({ ...state, noData: action.state})),
  on(loadMyDataError, (state, action) => ({...state, error: action.error})),
);


const initialAuthState: AuthState = {
  user: {
    username: '',
    password: ''
  },
  isLogged: false
};

export const authReducer = createReducer(
  initialAuthState,

  on(LoginSuccess, (state, action) => {
    return {
      ...state,
      isLogged: true,
      user: {username: action.state.username, password: action.state.password}
    };
  }),



);
