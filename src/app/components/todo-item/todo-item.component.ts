import {Component, Input} from '@angular/core';
import {Remove, Reply, Toggle} from "../../store/actions";
import {Todo} from "../../store/interfaces";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo: Todo | undefined;

  constructor(private store: Store, private router: Router) {
  }

  removeTodo(id: any) {
    this.store.dispatch(Remove({ id }));
  }

  toggleTodo(id: any) {
    this.store.dispatch(Toggle({ id }));
  }

  replyTodo(todo: any) {
    this.store.dispatch(Reply({ text: todo.text || 'Untitled task', id:  Math.floor(Math.random() * 100) }));
  }

  goToDetailTodo(selectedTodo: any) {
    this.router.navigate(['dettaglio', selectedTodo.id]);
  }


}
