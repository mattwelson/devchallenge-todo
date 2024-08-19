"use client";

import { NewItem } from "./new-item";

export function TaskList() {
  return (
    <div className="w-full max-w-2xl">
      <NewItem addNew={() => console.log()} />
    </div>
  );
}
