"use client";

import { formationOffer } from "@/lib/formation-offer";
import { CheckoutLink } from "./CheckoutLink";

export function StickyFormationCta() {
  return (
    <aside aria-label="Accès rapide à la formation" className="fixed inset-x-0 bottom-0 z-[60] border-t border-[var(--or)] bg-[rgba(15,30,51,0.97)] pb-[env(safe-area-inset-bottom)] shadow-[0_-18px_45px_rgba(0,0,0,0.32)] backdrop-blur-xl">
      <div className="container-fc flex min-h-[72px] items-center justify-between gap-3 py-2">
        <div className="min-w-0">
          <p className="display-font whitespace-nowrap text-lg font-semibold text-[var(--creme)] sm:text-xl md:hidden">{formationOffer.online.priceLabel}</p>
          <p className="text-[11px] text-[var(--creme-muted)] md:hidden">Formation en ligne</p>
          <p className="hidden text-base font-medium text-[var(--creme)] md:block">Formation complète en ligne — <strong className="text-[var(--or)]">{formationOffer.online.priceLabel}</strong></p>
        </div>
        <CheckoutLink source="sticky" className="focus-ring inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[var(--or)] px-5 text-sm font-bold text-[var(--navy)] transition hover:bg-[var(--or-bright)] sm:px-7">
          <span className="md:hidden">Commencer</span><span className="hidden md:inline">Accéder maintenant</span>
        </CheckoutLink>
      </div>
    </aside>
  );
}
