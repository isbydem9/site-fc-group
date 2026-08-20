"use client";

import type { ReactNode } from "react";
import { formationCheckoutUrl } from "@/lib/formation-offer";
import { trackCheckout, type CheckoutSource } from "./FormationTracking";

export function CheckoutLink({ children, className, ariaLabel, source }: { children: ReactNode; className: string; ariaLabel?: string; source?: CheckoutSource }) {
  return (
    <a
      href={formationCheckoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
      onClick={(event) => {
        const location = source ?? (event.currentTarget.closest("#offre")
          ? "offer"
          : event.currentTarget.closest('[aria-label="Présentation vidéo"]')
            ? "vsl"
            : "final");
        trackCheckout(location);
      }}
    >
      {children}
    </a>
  );
}
