import type { Meta, StoryObj } from "@storybook/react";

import { TaskForm } from "./task-form";
import { fn } from "@storybook/test";

const meta = {
  component: TaskForm,
  args: {
    isPending: false,
    addOrUpdate: fn(),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TaskForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const isPending: Story = { args: { isPending: true } };

export const isEdit: Story = { args: { isEdit: true } };

export const isEditPending: Story = { args: { isEdit: true, isPending: true } };
