// TODO: Switch to a DB schema later

import { cn } from "@/lib/utils";
import { Status, Statuses } from "./status";

// TODO: switch to CVA for status?

export function Item({
  icon,
  title,
  description,
  status,
  open,
}: {
  icon: string;
  title: string;
  description?: string;
  status: Statuses;
  open: () => void;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-[auto_1fr_auto] items-center gap-x-4 rounded-2xl bg-slate-300 p-4",
        {
          "bg-yellow-300": status === Statuses.progress,
          "bg-green-300": status === Statuses.complete,
          "bg-rose-300": status === Statuses.wontdo,
        },
      )}
      onClick={open}
    >
      <div className="flex size-12 items-center justify-center rounded-lg bg-background">
        {icon}
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <Status status={status} />
      {description && (
        <div className="col-start-2 font-light">{description}</div>
      )}
    </div>
  );
}
