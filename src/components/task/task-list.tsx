"use client";

import { api } from "@/trpc/react";
import { NewItem } from "./new-item";
import { Item } from "./item";
import { ItemContainer } from "./item-container";

export function TaskList() {
  const [items] = api.items.get.useSuspenseQuery();

  console.log({ items });
  return (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      {items.map((item) => (
        <ItemContainer key={item.id} {...item} />
      ))}
      <NewItem />
    </div>
  );
}
