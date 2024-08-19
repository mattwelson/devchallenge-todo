"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function ThemeSwitchElement({
  isLight,
  handleChange,
}: {
  isLight: boolean;
  handleChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex justify-end gap-2 p-2">
      <Moon className="text-foreground/50 dark:text-foreground" />
      <Switch checked={isLight} onCheckedChange={handleChange} className="" />
      <Sun className="text-foreground dark:text-foreground/50" />
    </div>
  );
}

export function ThemeSwitch() {
  const { setTheme, theme } = useTheme();
  const isLight = (theme ?? "light") === "light";

  function handleChange(light: boolean) {
    setTheme(light ? "light" : "dark");
  }

  return <ThemeSwitchElement isLight={isLight} handleChange={handleChange} />;
}
