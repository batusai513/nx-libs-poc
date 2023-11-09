import type { Meta, StoryObj } from '@storybook/react';
import { LibX } from './lib-x';

const meta: Meta<typeof LibX> = {
  component: LibX,
  title: 'LibX',
};
export default meta;
type Story = StoryObj<typeof LibX>;

export const Primary = {
  args: {},
};
