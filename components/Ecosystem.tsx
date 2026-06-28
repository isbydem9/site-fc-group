import { MaskReveal } from "@/components/ui/MaskReveal";
import { Reveal } from "@/components/ui/Reveal";

const apps = [
  {
    name: "Sahel Agent",
    desc: "Copilote commercial IA",
    status: "EN PRODUCTION",
    tone: "live",
  },
  {
    name: "Djinn",
    desc: "De l'idée au business plan",
    status: "EN PRODUCTION",
    tone: "live",
  },
  {
    name: "Veille & rédaction journalistique",
    desc: "Information et contenu par l'IA",
    status: "PROCHAINEMENT",
    tone: "build",
    note: "nom de code",
  },
  {
    name: "Gestion d'entreprise",
    desc: "Piloter son activité au quotidien",
    status: "EN CONCEPTION",
    tone: "next",
    note: "nom de code",
  },
];

const badgeStyle = {
  live: "bg-[rgba(201,167,107,0.15)] text-[var(--or-bright)]",
  build: "bg-[rgba(224,196,138,0.12)] text-[var(--champagne)]",
  next: "bg-[rgba(168,162,147,0.12)] text-[var(--creme-muted)]",
};

export function Ecosystem() {
  return (
    <section id="ecosysteme" className="section-pad bg-[var(--navy)]">
      <div className="container-fc">
        <Reveal>
          <p className="eyebrow">L&apos;écosystème FC Group</p>
          <h2 className="display-font mt-5 max-w-3xl text-4xl font-semibold leading-tight text-[var(--creme)] md:text-6xl">
            <MaskReveal lines={["Un écosystème.", "Un seul cerveau."]} />
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-[1.7] text-[var(--creme-muted)] md:text-lg">
            Toutes les applications FC Group partagent la même intelligence — Assi. Plus elles
            servent d&apos;entrepreneurs, plus elles deviennent intelligentes.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {apps.map((app, index) => (
            <Reveal key={app.name} delay={index * 0.08}>
              <article className="gold-border min-h-48 rounded-2xl bg-[var(--navy-elevated)] p-6 transition-all duration-500 ease-[var(--ease-signature)] hover:-translate-y-1 hover:border-[var(--or)]">
                <span className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.14em] ${badgeStyle[app.tone as keyof typeof badgeStyle]}`}>
                  {app.status}
                </span>
                <h3 className="display-font mt-8 text-2xl font-semibold text-[var(--creme)]">{app.name}</h3>
                {"note" in app && app.note ? (
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[var(--creme-muted)]">
                    {app.note}
                  </p>
                ) : null}
                <p className="mt-3 leading-[1.6] text-[var(--creme-muted)]">{app.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 overflow-hidden border-y border-[var(--navy-line)] py-4">
          <div className="ecosystem-marquee gap-6">
            {[...apps, ...apps].map((app, index) => (
              <span
                key={`${app.name}-${index}`}
                className="flex items-center gap-3 whitespace-nowrap text-sm text-[var(--creme-muted)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--or)]" />
                <span className="font-medium text-[var(--creme)]">{app.name}</span>
                <span>{app.status}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
