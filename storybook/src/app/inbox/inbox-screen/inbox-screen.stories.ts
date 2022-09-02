import {moduleMetadata, Meta, Story} from '@storybook/angular';

import {CommonModule} from '@angular/common';
import {TasksModule} from '../../tasks/tasks.module';
import {InboxScreenComponent} from "./inbox-screen.component";
import {NgxsModule, Store} from "@ngxs/store";
import {TasksState} from "../../state/task.state";

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
  title: 'PureInboxScreen',
} as Meta;

const Template: Story = args => ({
  props: args,
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: true,
};
