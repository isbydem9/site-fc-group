import Image from "next/image";
import { InPersonLink } from "./InPersonLink";

export function FormationHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--navy-line)] bg-[rgba(10,22,40,0.9)] backdrop-blur-xl">
      <div className="container-fc flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-3" aria-label="FC Group">
          <Image src="/logo-fcgroup.png" alt="Logo FC Group" width={36} height={36} priority className="h-9 w-9 rounded-full object-cover" />
          <span className="display-font text-xl font-semibold text-[var(--creme)]">FC Group</span>
        </div>
        <InPersonLink className="focus-ring hidden min-h-11 items-center rounded-full border border-[var(--navy-line)] px-5 text-sm font-bold text-[var(--creme)] transition hover:border-[var(--or)] sm:inline-flex">
          Parler sur WhatsApp
        </InPersonLink>
      </div>
    </header>
  );
}
