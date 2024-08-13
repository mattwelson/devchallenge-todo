import Image from "next/image";
import logo from "@/icons/Logo.svg";

export function Header() {
  return (
    <header className="mx-auto grid max-w-4xl grid-cols-[auto_1fr] gap-4">
      <Image src={logo} alt="Logo" />
      <h1 className="flex items-center gap-2 text-4xl">
        My Task Board <span className="text-base">🖊️</span>
      </h1>
      <div className="col-start-2">Tasks to keep organised</div>
    </header>
  );
}
