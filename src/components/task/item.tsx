// TODO: Switch to a DB schema later

import { cn } from "@/lib/utils";
import { Status, Statuses } from "./status";

// TODO: switch to CVA for status?
export interface ItemProps {
  icon?: string | null;
  name: string;
  description?: string | null;
  status?: string | null;
}

export function Item({
  icon,
  name,
  description,
  status = "default",
}: ItemProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-[auto_1fr_auto] items-center gap-x-4 rounded-2xl bg-slate-200 p-4 dark:text-background",
        {
          "bg-yellow-300": status === Statuses.progress,
          "bg-green-300": status === Statuses.complete,
          "bg-rose-300": status === Statuses.wontdo,
        },
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-lg bg-background">
        {icon ?? "❓"}
      </div>
      <h2 className="text-xl font-semibold">{name}</h2>
      <Status status={status as Statuses} />
      {description && (
        <div className="col-start-2 font-light">{description}</div>
      )}
    </div>
  );
}
