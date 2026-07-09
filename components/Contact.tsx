import { Camera, Music2, Play, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Constellation } from "@/components/ui/Constellation";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MaskReveal } from "@/components/ui/MaskReveal";
import { Reveal } from "@/components/ui/Reveal";

const socials = [
  { label: "TikTok", href: "https://www.tiktok.com/@sahelagent", icon: Music2 },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCB60cGygrCWsIqSVC7rrQ0w", icon: Video },
  { label: "Instagram", href: "https://www.instagram.com/fcgroupml", icon: Camera },
  { label: "Facebook", href: "https://www.facebook.com/61586727920038", icon: Play },
];

export function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[var(--navy)]">
      <div className="absolute inset-0">
        <Constellation density={40} />
        <div className="aurora aurora-1 opacity-[0.12]" />
        <div className="aurora aurora-2 opacity-[0.10]" />
      </div>
      <div className="section-pad container-fc relative z-10 text-center">
        <Reveal>
          <h2 className="display-font mx-auto max-w-4xl text-4xl font-semibold leading-tight text-[var(--creme)] md:text-6xl">
            <MaskReveal lines={["Une idée ? Un partenariat ?", "On en parle."]} />
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.7] text-[var(--creme-muted)] md:text-lg">
            Investisseurs, partenaires, entrepreneurs — la porte est ouverte.
          </p>
          <div className="mt-10">
            <MagneticButton href="https://wa.me/22379061789" target="_blank" rel="noopener noreferrer">
              Écrire sur WhatsApp
            </MagneticButton>
          </div>

          <div className="mt-9 flex justify-center gap-3">
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
        </Reveal>
      </div>

      <div className="border-t border-[var(--navy-line)]">
        <div className="container-fc flex flex-col gap-4 py-7 text-sm text-[var(--creme-muted)] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-fcgroup.png"
              alt="Logo FC Group"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
            />
            <span>FC Group — À ton appel, Mali.</span>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/mentions-legales"
              className="focus-ring transition hover:text-[var(--or)]"
            >
              Mentions légales
            </Link>
            <span>© 2026 FC Group. Bamako, Mali.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
