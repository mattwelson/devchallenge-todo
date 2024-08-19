import type { Meta, StoryObj } from "@storybook/react";

import { ThemeSwitch, ThemeSwitchElement } from "./theme-switch";
import { useState } from "react";
import { cn } from "@/lib/utils";

const meta = {
  component: ThemeSwitch,
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

function ThemeSwitchContainer({
  theme = "light",
}: {
  theme?: "dark" | "light";
}) {
  const [isLight, setIsLight] = useState(theme === "light");

  function handleChange(checked: boolean) {
    setIsLight(checked);
  }

  return (
    <div className={cn("bg-background p-4", { dark: !isLight })}>
      <ThemeSwitchElement isLight={isLight} handleChange={handleChange} />
    </div>
  );
}

export const Default: Story = {
  args: {},
  render: () => <ThemeSwitchContainer />,
};

export const LightMode: Story = {
  args: {},
  render: () => <ThemeSwitchContainer theme="light" />,
};

export const DarkMode: Story = {
  args: {},
  render: () => <ThemeSwitchContainer theme="dark" />,
};
