import {StoryFn, Meta} from '@storybook/react';
import React from 'react';
import Button, {ButtonProps} from './Button';

const config: Meta = {
  title: `Atoms/${Button.name}`,
  component: Button,
  decorators: [
    (Story) => {
      return (
        <div>
          <Story />
        </div>
      );
    },
  ],
};

export default config;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  children: 'Button',
};
