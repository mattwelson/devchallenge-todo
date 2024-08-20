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
import { TaskForm } from "./task-form";

export function NewItem({ addNew }: { addNew: () => void }) {
  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          "grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-x-4 rounded-2xl bg-orange-100 p-4 dark:text-background",
        )}
        onClick={addNew}
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
        <TaskForm />
      </SheetContent>
    </Sheet>
  );
}
