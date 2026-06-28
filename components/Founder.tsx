import { Camera, Music2, Play, Video } from "lucide-react";
import { MaskReveal } from "@/components/ui/MaskReveal";
import { Reveal } from "@/components/ui/Reveal";

const socials = [
  { label: "TikTok", href: "https://www.tiktok.com/@sahelagent", icon: Music2 },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCB60cGygrCWsIqSVC7rrQ0w", icon: Video },
  { label: "Instagram", href: "https://www.instagram.com/fcgroupml", icon: Camera },
  { label: "Facebook", href: "https://www.facebook.com/61586727920038", icon: Play },
];

export function Founder() {
  return (
    <section id="fondateur" className="section-pad bg-[var(--navy-elevated)]">
      <div className="container-fc">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div className="gold-border relative aspect-[4/5] min-h-[580px] overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(201,167,107,0.28),rgba(10,22,40,0.8))]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/founder.jpg')", objectFit: "cover", objectPosition: "center 25%" }}
                aria-label="Ismaël Dembélé, fondateur de FC Group"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,transparent,rgba(10,22,40,0.72))]" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-[var(--navy-line)] bg-[rgba(10,22,40,0.72)] p-5 backdrop-blur-md">
                <p className="display-font text-2xl font-semibold">Ismaël Dembélé</p>
                <p className="mt-1 text-sm text-[var(--creme-muted)]">Bamako, Mali</p>
              </div>
            </div>

            <div>
              <p className="eyebrow">Le fondateur</p>
              <h2 className="display-font mt-5 text-4xl font-semibold text-[var(--creme)] md:text-6xl">
                <MaskReveal lines={["Ismaël Dembélé"]} />
              </h2>
              <p className="mt-3 font-medium text-[var(--champagne)]">Fondateur — FC Group</p>
              <div className="mt-8 space-y-6 text-base leading-[1.75] text-[var(--creme-muted)] md:text-lg">
                <p className="display-font text-2xl italic leading-snug text-[var(--creme)]">
                  Je n&apos;ai jamais couru après l&apos;argent. J&apos;ai couru après le temps.
                </p>
                <p>
                  Enfant, je voyais mes parents travailler sans relâche. J&apos;ai compris très tôt
                  que je voulais réussir autrement — sans sacrifier ma vie pour gagner ma vie.
                </p>
                <p>
                  J&apos;ai essayé beaucoup de choses : le e-commerce, la publicité, une agence
                  marketing, même l&apos;aviculture. La plupart ont échoué. Mais chaque échec m&apos;a
                  appris la même chose : en Afrique, l&apos;entrepreneur est seul. Il fait tout, tout
                  le temps, et il s&apos;épuise.
                </p>
                <p>
                  Quand mes clients me réclamaient des campagnes miracles sans savoir vendre,
                  j&apos;ai compris ce qui manquait vraiment : pas de la publicité, mais un guide.
                  Une intelligence qui t&apos;apprend et qui construit avec toi. C&apos;est comme ça
                  qu&apos;est née Assi.
                </p>
                <p>
                  FC Group porte les initiales de ma mère, Fatoumata Coulibaly — celle qui m&apos;a
                  soutenu quand je n&apos;avais rien. Aujourd&apos;hui, je construis ce que j&apos;aurais voulu
                  avoir : des outils qui rendent leur temps aux entrepreneurs. Pas pour qu&apos;ils
                  restent seuls. Pour qu&apos;ils grandissent.
                </p>
                <p className="display-font text-2xl italic leading-snug text-[var(--creme)]">
                  Je ne vends pas de rêve. Je construis des preuves. Si un jeune de Bamako peut
                  bâtir ça, tu peux bâtir le tien.
                </p>
                <p className="font-medium text-[var(--champagne)]">— Ismaël Dembélé</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-[var(--navy-line)] text-[var(--or)] transition hover:border-[var(--or)] hover:bg-[rgba(201,167,107,0.12)]"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
