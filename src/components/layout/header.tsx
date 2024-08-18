import Image from "next/image";
import logo from "@/icons/Logo.svg";
import edit from "@/icons/Edit_duotone.svg";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export function Header() {
  return (
    <header className="mx-auto grid max-w-4xl grid-cols-[auto_1fr] gap-4">
      <Image src={logo as StaticImport} alt="Logo" />
      <h1 className="flex items-center gap-2 text-4xl">
        My Task Board
        <span className="text-base">
          <Image src={edit as StaticImport} alt="Edit" className="size-12" />
        </span>
      </h1>
      <div className="col-start-2">Tasks to keep organised</div>
    </header>
  );
}
