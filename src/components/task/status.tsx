import { cn } from "@/lib/utils";

import Complete from "@/icons/Done_round_duotone.svg";
import InProgress from "@/icons/Time_atack_duotone.svg";
import WontDo from "@/icons/close_ring_duotone.svg";
import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export enum Statuses {
  default = "default",
  progress = "progress",
  complete = "complete",
  wontdo = "wontdo",
}

export function Status({ status }: { status: Statuses }) {
  if (status === Statuses.default) return null;

  let bg: string;
  let image: StaticImport;

  switch (status) {
    case Statuses.progress:
      bg = "bg-yellow-500";
      image = InProgress as StaticImport;
      break;
    case Statuses.complete:
      bg = "bg-green-500";
      image = Complete as StaticImport;
      break;
    case Statuses.wontdo:
      bg = "bg-rose-500";
      image = WontDo as StaticImport;
      break;
  }

  return (
    <div
      className={cn("flex size-12 items-center justify-center rounded-lg", bg)}
    >
      <Image src={image} alt="" className="size-6" />
    </div>
  );
}
