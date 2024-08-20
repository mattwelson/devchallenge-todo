import type { Meta, StoryObj } from "@storybook/react";

import { StatusPickerItem } from "./status-picker-item";
import { Statuses } from "../status";
import { fn } from "@storybook/test";

const meta = {
  component: StatusPickerItem,
  args: {
    status: Statuses.progress,
    checked: false,
    onClick: fn(),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StatusPickerItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "In progress",
  args: {
    status: Statuses.progress,
    checked: true,
  },
};
export const WontDo: Story = {
  name: `Won't do`,
  args: {
    status: Statuses.wontdo,
  },
};
export const Complete: Story = {
  args: {
    status: Statuses.complete,
  },
};
