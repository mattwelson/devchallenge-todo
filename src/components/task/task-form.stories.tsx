import type { Meta, StoryObj } from '@storybook/react';

import { TaskForm } from './task-form';

const meta = {
  component: TaskForm,
} satisfies Meta<typeof TaskForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};