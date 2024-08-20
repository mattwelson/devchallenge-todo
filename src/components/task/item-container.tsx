"use client";

import type { z } from "zod";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Item, type ItemProps } from "./item";
import { TaskForm, type formSchema } from "./task-form";
import { useState } from "react";
import { api } from "@/trpc/react";
import { toast } from "sonner";

export function ItemContainer(props: z.infer<typeof formSchema>) {
  const [isOpen, setIsOpen] = useState(false);

  const utils = api.useUtils();
  const updateItem = api.items.update.useMutation();
  const deleteItem = api.items.delete.useMutation();

  async function handleUpdate(values: z.infer<typeof formSchema>) {
    await updateItem.mutateAsync(values);
    await utils.items.invalidate();
    setIsOpen(false);
    toast.success("Item updated");
  }

  async function handleDelete() {
    await deleteItem.mutateAsync({ id: props.id! });
    await utils.items.invalidate();
    setIsOpen(false);
    toast.success("Item deleted");
  }

  return (
    <Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <SheetTrigger asChild>
        <div className="cursor-pointer">
          <Item
            name={props.name}
            icon={props.icon}
            description={props.description}
            status={props.status}
          />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit task</SheetTitle>
        </SheetHeader>
        <TaskForm
          addOrUpdate={handleUpdate}
          initialValues={props}
          isEdit
          isPending={updateItem.isPending}
          deleteItem={handleDelete}
        />
      </SheetContent>
    </Sheet>
  );
}
