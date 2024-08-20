import { cn } from "@/lib/utils";
import { Status, statusLookup, type Statuses } from "../status";
import Image from "next/image";

import DoneIcon from "@/icons/Done_round.svg";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export function StatusPickerItem({
  checked = false,
  status,
  onClick,
}: {
  checked?: boolean;
  status: Statuses;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex cursor-pointer items-center gap-4 rounded-xl border-2 border-border p-1",
        {
          "border-primary": checked,
        },
      )}
    >
      <Status status={status} />
      <span className="flex-1 select-none">{statusLookup(status)}</span>
      {checked && (
        <div className="mr-4 flex size-6 items-center justify-center justify-self-end rounded-full bg-primary">
          <Image
            src={DoneIcon as StaticImport}
            alt="Selected"
            className="size-3"
          />
        </div>
      )}
    </div>
  );
}
