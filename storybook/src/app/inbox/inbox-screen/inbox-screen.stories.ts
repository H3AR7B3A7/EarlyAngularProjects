import {moduleMetadata, Meta, Story} from '@storybook/angular';

import {CommonModule} from '@angular/common';
import {TasksModule} from '../../tasks/tasks.module';
import {InboxScreenComponent} from "./inbox-screen.component";
import {NgxsModule, Store} from "@ngxs/store";
import {TasksState} from "../../state/task.state";
import {fireEvent, within} from "@storybook/testing-library";

// To solve: NullInjectorError: No provider for Store!
export default {
  component: InboxScreenComponent,
  decorators: [
    moduleMetadata({
      declarations: [InboxScreenComponent],
      imports: [CommonModule, TasksModule, NgxsModule.forRoot([TasksState])],
      providers: [Store],
    }),
  ],
  title: 'InboxScreen',
} as Meta;

const Template: Story = args => ({
  props: args,
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: true,
};

export const WithInteractions = Template.bind({});
WithInteractions.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  // Simulates pinning the first task
  await fireEvent.click(canvas.getByLabelText('pinTask-1'));
  // Simulates pinning the third task
  await fireEvent.click(canvas.getByLabelText('pinTask-3'));
};
