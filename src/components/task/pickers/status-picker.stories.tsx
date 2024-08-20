import type { Meta, StoryObj } from "@storybook/react";

import { StatusPicker } from "./status-picker";
import { Statuses } from "../status";

const meta = {
  component: StatusPicker,
  tags: ["autodocs"],
} satisfies Meta<typeof StatusPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: Statuses.default,
    statuses: [Statuses.progress, Statuses.complete, Statuses.wontdo],
  },
};

export const WithChecked: Story = {
  args: {
    status: Statuses.progress,
    statuses: [Statuses.progress, Statuses.complete, Statuses.wontdo],
  },
};
