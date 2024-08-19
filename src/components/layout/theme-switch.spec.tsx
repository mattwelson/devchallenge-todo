import { describe, it, expect, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { ThemeSwitch, ThemeSwitchElement } from "./theme-switch";
import { useTheme } from "next-themes";

vi.mock("next-themes", () => ({
  useTheme: vi.fn(),
}));

afterEach(cleanup);

describe("light mode", () => {
  it("renders with a theme showing light", () => {
    render(<ThemeSwitchElement isLight={true} handleChange={vi.fn()} />);

    expect(
      screen.getByRole("switch").attributes.getNamedItem("data-state")?.value,
    ).toEqual("checked");
  });

  it.todo("shows moon icon at half opacity");
  it.todo("shows sun icon at full opacity");

  it("toggles to dark on click", async () => {
    const setTheme = vi.fn();
    render(<ThemeSwitchElement isLight={true} handleChange={setTheme} />);

    const user = userEvent.setup();

    await user.click(screen.getByRole("switch"));

    expect(setTheme).toHaveBeenCalledOnce();
  });
});

describe("toggled to dark mode", () => {
  const setTheme = vi.fn();
  vi.mocked(useTheme, { partial: true }).mockReturnValue({
    theme: "dark",
    setTheme,
  });

  it("renders with a theme showing dark", () => {
    render(<ThemeSwitch />);

    expect(
      screen.getByRole("switch").attributes.getNamedItem("data-state")?.value,
    ).toEqual("unchecked");
  });

  it.todo("shows moon icon at full opacity");
  it.todo("shows sun icon at half opacity");
  it.todo("toggles to light on click");
});
