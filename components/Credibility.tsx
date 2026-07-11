import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";

const legalDetails = [
  { label: "RCCM", value: "ML-BKO-01-2026-A-03806" },
  { label: "NINA", value: "325900107010001D0009Y" },
  { label: "Siège", value: "Kalaban Coro, Bamako" },
];

export function Credibility() {
  return (
    <section id="credibilite" className="section-pad bg-[var(--navy)]">
      <div className="container-fc">
        <Reveal>
          <p className="eyebrow">Une entreprise réelle</p>
          <h2 className="display-font mt-5 max-w-3xl text-4xl font-semibold leading-tight text-[var(--creme)] md:text-6xl">
            Une entreprise déclarée, un engagement concret.
          </h2>
          <p className="mt-7 max-w-3xl text-base leading-[1.7] text-[var(--creme-muted)] md:text-lg">
            FC Group est édité par FC SERVICES, entreprise individuelle immatriculée à Bamako. Ni
            promesse en l’air, ni structure fantôme : une entreprise déclarée, avec un vrai
            responsable et une vraie adresse.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {legalDetails.map((detail) => (
              <div
                key={detail.label}
                className="rounded-xl border border-[var(--navy-line)] bg-[rgba(201,167,107,0.06)] p-5"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--or)]">
                  {detail.label}
                </p>
                <p className="mt-2 text-sm text-[var(--creme-muted)]">{detail.value}</p>
              </div>
            ))}
          </div>

          <Link
            href="/mentions-legales"
            className="focus-ring mt-8 inline-block text-[var(--or)] transition-opacity hover:opacity-80"
          >
            Voir les mentions légales →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
