"use client";

import type { ReactNode } from "react";
import { formationInPersonUrl } from "@/lib/formation-offer";

export function InPersonLink({ children, className }: { children: ReactNode; className: string }) {
  return <a href={formationInPersonUrl} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}
