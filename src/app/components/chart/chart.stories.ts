import { Story, Meta } from '@storybook/angular/types-6-0';
import {componentWrapperDecorator} from "@storybook/angular";
import {ChartComponent} from "./chart.component";

export default {
  title: 'Chart',
  component: ChartComponent,
  decorators: [
    componentWrapperDecorator((story) => `<div style="box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;padding: 20px;border-radius: 20px;margin-left: 20%;max-width: 700px; background-color: white">${story}</div>`),
  ]
} as Meta;

const Template: Story<ChartComponent> = (args) => ({
  props: args,
});

export const MultiLine = Template.bind({});
MultiLine.args = {
  dataSets: [
    {
      label: 'Dataset 1',
      data: ['15', '25', '35', '45', '55', '65', '75', '85'],
      backgroundColor: '#D7C49EFF',
    },
    {
      label: 'Dataset 2',
      data: ['25', '35', '45', '55', '65', '75', '85', '95'],
      backgroundColor: '#343148FF',
    }
  ],
};

export const SingleLine = Template.bind({});
SingleLine.args = {
  dataSets: [
    {
      label: 'Dataset 1',
        data: [10, 20, 30],
        backgroundColor: ['#5F4B8BFF','#E69A8DFF'],
    }
  ],
};
