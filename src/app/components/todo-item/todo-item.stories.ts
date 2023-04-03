import {componentWrapperDecorator, Meta, moduleMetadata, Story} from '@storybook/angular';
import { TodoItemComponent } from './todo-item.component';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Todo Item',
  component: TodoItemComponent,
  decorators: [
    componentWrapperDecorator((story) => `<div style="margin: 5em">${story}</div>`),
    moduleMetadata({
      providers: [
        {
          provide: Store,
          useValue: {
            dispatch: action('dispatch'),
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: action('navigate'),
          },
        },
      ],
    }),
  ],
} as Meta;

const Template: Story<TodoItemComponent> = (args: TodoItemComponent) => ({
  component: TodoItemComponent,
  props: args,
});

export const TodoItem = Template.bind({});
TodoItem.args = {
  todo: { id: 1, text: 'Go to shopping at 9.00 AM, and after go to the bar with ska', todo: true },
};

