"use client";

import { useEffect, useRef } from "react";

type MagneticButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  useEffect(() => {
    const loop = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }
      raf.current = requestAnimationFrame(loop);
    };

    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  function handleMove(event: React.MouseEvent<HTMLAnchorElement>) {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    target.current.x = ((event.clientX - rect.left) / rect.width - 0.5) * 20;
    target.current.y = ((event.clientY - rect.top) / rect.height - 0.5) * 20;
  }

  const base =
    "focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all duration-500 ease-[var(--ease-signature)]";
  const styles =
    variant === "primary"
      ? "bg-[var(--or)] text-[var(--navy)] hover:bg-[var(--or-bright)]"
      : "border border-[var(--navy-line)] text-[var(--creme)] hover:border-[var(--or)] hover:bg-[var(--or)] hover:text-[var(--navy)]";

  return (
    <a
      ref={ref}
      className={`${base} ${styles} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        target.current.x = 0;
        target.current.y = 0;
      }}
      {...props}
    >
      {children}
    </a>
  );
}
