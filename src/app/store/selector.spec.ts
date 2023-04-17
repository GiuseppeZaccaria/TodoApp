import {selectAllTodos, selectHttpError, selectNoDataError} from "./selector";
import {expect} from '@jest/globals';

const initialState = {
  todos: [
    {
      id: 99,
      text: 'Make the task have effect preventived my back home',
      todo: true
    },
    {
      id: 9999,
      text: 'Go to shopping at 9.00 AM, and after go to the bar with ska',
      todo: false
    }
  ],
  noData: false,
  error: ''
};

describe('App Selectors', () => {
  it('should get all todos', () => {
    const result = selectAllTodos.projector(initialState);
    expect(result).toBe(initialState.todos);
  });

  it('should retrieve no Data', () => {
    const result = selectNoDataError.projector(initialState);
    expect(result).toBe(initialState.noData);
  });

  it('should retrieve http error', () => {
    const result = selectHttpError.projector(initialState);
    expect(result).toBe(initialState.error);
  });

});
