import type { Meta, StoryObj } from "@storybook/react";

import { defaultEmojis, EmojiPicker } from "./emoji-picker";
import { fn } from "@storybook/test";

const meta = {
  component: EmojiPicker,
  tags: ["autodocs"],
  args: {
    emojis: defaultEmojis,
    onChange: fn(),
  },
} satisfies Meta<typeof EmojiPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
export const Selected: Story = {
  args: {
    emoji: "☕",
  },
};
