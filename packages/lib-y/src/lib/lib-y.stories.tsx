import type { Meta, StoryObj } from '@storybook/react';
import { LibY } from './lib-y';

const meta: Meta<typeof LibY> = {
  component: LibY,
  title: 'LibY',
};
export default meta;
type Story = StoryObj<typeof LibY>;

export const Primary = {
  args: {},
};
