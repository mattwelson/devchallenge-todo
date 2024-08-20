import type { Meta, StoryObj } from "@storybook/react";

import { Item } from "./item";
import { fn } from "@storybook/test";
import { Statuses } from "./status";
import { NewItem } from "./new-item";

const meta = {
  component: Item,
  argTypes: {
    status: {
      control: "radio",
      options: [
        Statuses.default,
        Statuses.progress,
        Statuses.complete,
        Statuses.wontdo,
      ],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "🍔",
    name: "title",
    status: Statuses.default,
  },
};

export const Progress: Story = {
  args: {
    icon: "🖊️",
    name: "In Progress",
    status: Statuses.progress,
  },
};

export const Complete: Story = {
  args: {
    icon: "✨",
    name: "Complete",
    status: Statuses.complete,
  },
};

export const WontDo: Story = {
  args: {
    icon: "🐳",
    name: "Won't do",
    status: Statuses.wontdo,
  },
};

export const WithDescription: Story = {
  args: {
    icon: "❓",
    name: "With description",
    status: Statuses.default,
    description: "Some long description",
  },
};

export const NewItemRow: Story = {
  args: {
    icon: "",
    name: "Won't render",
    status: Statuses.wontdo,
  },
  render: () => <NewItem />,
};
