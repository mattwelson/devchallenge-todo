import AddIcon from "@/icons/Add_round_duotone.svg";

import { cn } from "@/lib/utils";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TaskForm, type formSchema } from "./task-form";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import type { z } from "zod";
import { useState } from "react";

export function NewItem() {
  const [isOpen, setIsOpen] = useState(false);

  const utils = api.useUtils();
  const createItem = api.items.create.useMutation();

  async function handleUpdate(values: z.infer<typeof formSchema>) {
    await createItem.mutateAsync(values);
    await utils.items.invalidate();
    setIsOpen(false);
    toast.success("Item created");
  }

  return (
    <Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <SheetTrigger
        className={cn(
          "grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-x-4 rounded-2xl bg-orange-100 p-4 dark:text-background",
        )}
        asChild
      >
        <div>
          <div className="flex size-12 items-center justify-center rounded-lg bg-orange-400">
            <Image src={AddIcon as StaticImport} alt="" className="size-6" />
          </div>
          <div className="text-xl font-semibold">Add new task</div>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Task details</SheetTitle>
          <SheetClose />
        </SheetHeader>
        <TaskForm addOrUpdate={handleUpdate} isPending={createItem.isPending} />
      </SheetContent>
    </Sheet>
  );
}
