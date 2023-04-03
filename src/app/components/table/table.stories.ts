import { Story, Meta } from '@storybook/angular/types-6-0';
import {TableComponent} from "./table.component";
import {componentWrapperDecorator} from "@storybook/angular";

export default {
  title: 'Table',
  component: TableComponent,
  decorators: [
    componentWrapperDecorator((story) => `<div style="color: darkgrey;box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;padding: 20px;border-radius: 20px;margin-left: 20%;max-width: 700px; background-color: white">${story}</div>`),
  ]
} as Meta;

const Template: Story<TableComponent> = (args) => ({
  props: args,
});

export const Table = Template.bind({});
Table.args = {
  data: [{id: 1, name: 'Mario Rossi', age: 30}, {id: 2, name: 'Luigi Bianchi', age: 40}],
  columns: ['id', 'name', 'age']
};
