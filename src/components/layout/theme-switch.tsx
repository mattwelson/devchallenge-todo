"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function ThemeSwitch() {
  const { setTheme, theme } = useTheme();
  const isLight = (theme ?? "light") === "light";

  function handleChange(light: boolean) {
    setTheme(light ? "light" : "dark");
  }
  console.log({ theme });

  return (
    <div className="flex gap-2">
      <Moon className="text-foreground/50 dark:text-foreground" />
      <Switch checked={isLight} onCheckedChange={handleChange} />
      <Sun className="text-foreground dark:text-foreground/50" />
    </div>
  );
}
