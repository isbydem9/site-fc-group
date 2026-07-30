import Image from "next/image";
import Link from "next/link";

export function FooterLegal() {
  return (
    <footer className="border-t border-[var(--navy-line)] py-12">
      <div className="container-fc flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-fcgroup.png"
            alt="Logo FC Group"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="display-font text-lg font-semibold text-[var(--creme)]">FC Group</span>
        </div>

        <div className="space-y-1 text-sm text-[var(--creme-muted)] md:text-right">
          <p>FC SERVICES — entreprise individuelle · RCCM ML-BKO-01-2026-A-03806</p>
          <p>Kalaban Coro, Bamako, Mali · +223 79 06 17 89</p>
          <p>
            <Link
              href="/mentions-legales"
              className="focus-ring underline decoration-[var(--or)] underline-offset-4 transition-colors hover:text-[var(--or)]"
            >
              Mentions légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
