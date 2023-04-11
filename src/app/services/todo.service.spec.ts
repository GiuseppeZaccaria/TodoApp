import {TodoService} from './todo.service';
import {expect} from '@jest/globals';
import {createHttpFactory, HttpMethod, SpectatorHttp} from "@ngneat/spectator";

describe('TodoService', () => {
  let spectator: SpectatorHttp<TodoService>;
  const createHttp = createHttpFactory(TodoService);

  beforeEach(() => {
    spectator = createHttp();
  });

  it('should be created', () => {
    expect(spectator).toBeTruthy();
  });

  it('should return todo data', () => {
    const expectedData = {
      "payload": [
        {
          "id": 99,
          "text": "Make the task have effect preventived my back home",
          "todo": true
        },
        {
          "id": 9999,
          "text": "Go to shopping at 9.00 AM, and after go to the bar with ska",
          "todo": false
        }
      ]
    };

    spectator.service.getData().subscribe(data => {
      expect(data).toEqual(expectedData);
    });

    const req = spectator.expectOne('assets/get-todo.json', HttpMethod.GET);
    expect(req.request.method).toBe('GET');
    req.flush(expectedData);
  });

  it('should add a new todo', () => {
    const newTodo = { text: 'New Todo', id: 2 };

    spectator.service.addTodo(newTodo).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = spectator.expectOne('assets/add-todo.json', HttpMethod.GET);
    expect(req.request.method).toBe('GET');
    req.flush({"result": "SUCCESS"});
  });

});

