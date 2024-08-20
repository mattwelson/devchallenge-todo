import type { Meta, StoryObj } from "@storybook/react";

import { Status, Statuses } from "./status";

const meta = {
  component: Status,
  tags: ["autodocs"],
} satisfies Meta<typeof Status>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: Statuses.default,
  },
};

export const Complete: Story = {
  args: {
    status: Statuses.complete,
  },
};

export const Progress: Story = {
  args: {
    status: Statuses.progress,
  },
};
export const WontDo: Story = {
  name: `Won't do`,
  args: {
    status: Statuses.wontdo,
  },
};
