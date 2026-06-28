"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#vision", label: "Vision" },
  { href: "#apps", label: "Nos outils" },
  { href: "#fondateur", label: "Fondateur" },
  { href: "#ecosysteme", label: "Écosystème" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-[var(--ease-signature)] ${
        scrolled
          ? "border-[var(--navy-line)] bg-[rgba(10,22,40,0.88)] shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "border-transparent bg-[rgba(10,22,40,0.46)] backdrop-blur-md"
      }`}
      aria-label="Navigation principale"
    >
      <div className="container-fc flex h-20 items-center justify-between gap-6">
        <a href="#hero" className="focus-ring flex items-center gap-3" aria-label="FC Group">
          <Image
            src="/logo-fcgroup.png"
            alt="Logo FC Group"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
            priority
          />
          <span className="display-font text-xl font-semibold text-[var(--creme)]">FC Group</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring text-sm font-medium text-[var(--creme-muted)] transition hover:text-[var(--creme)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="focus-ring hidden rounded-full border border-[var(--navy-line)] px-5 py-3 text-sm font-bold text-[var(--creme)] transition-all duration-500 ease-[var(--ease-signature)] hover:border-[var(--or)] hover:bg-[var(--or)] hover:text-[var(--navy)] md:inline-flex"
        >
          Nous contacter
        </a>

        <button
          type="button"
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-[var(--navy-line)] text-[var(--creme)] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--navy-line)] bg-[rgba(10,22,40,0.96)] px-5 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-xl px-3 py-3 text-[var(--creme)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="focus-ring mt-2 rounded-full border border-[var(--or)] px-5 py-3 text-center font-bold text-[var(--creme)]"
            >
              Nous contacter
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
