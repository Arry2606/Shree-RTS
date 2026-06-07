"use client";

import { useEffect, useState } from "react";
import MaterialIcon from "./MaterialIcon";
import Image from "next/image";

const navLinks = [
  { href: "#plans", label: "Tiffin Plans" },
  { href: "#breakfast", label: "Breakfast Menu" },
  { href: "#timings", label: "Timings" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-outline-variant/30 bg-surface/90 shadow-sm backdrop-blur-md dark:bg-surface-dim/90">
      <nav
        className="mx-auto flex h-16 max-w-container-max items-center justify-between px-5 py-stack-sm md:px-margin-desktop"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-3">
  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/20">
    <Image
      src="/logo_2.png"
      alt="Shree Ram Tiffin Logo"
      width={70}
      height={40}
      className="rounded-full object-contain"
      priority
    />
  </div>
  <span
    className="text-xl font-bold leading-none tracking-tight text-primary md:text-2xl"
    style={{ fontFamily: "var(--font-playfair)" }}
  >
    Shree Ram Tiffin
  </span>
</div>
        <div className="hidden items-center gap-gutter md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            className="touch-target inline-flex items-center rounded-full bg-primary px-6 py-2 font-label-md text-on-primary transition-opacity duration-200 hover:opacity-90 active:scale-95"
            href="tel:9711467998"
          >
            Call Now
          </a>
        </div>
        <button
          type="button"
          className="touch-target inline-flex items-center justify-center text-primary md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <MaterialIcon name={mobileOpen ? "close" : "menu"} />
        </button>
      </nav>
      {mobileOpen && (
        <div
          id="mobile-nav-menu"
          className="border-t border-outline-variant/30 bg-surface px-5 py-4 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="touch-target font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="touch-target inline-flex w-fit items-center rounded-full bg-primary px-6 py-2 font-label-md text-on-primary transition-opacity hover:opacity-90"
              href="tel:9711467998"
              onClick={() => setMobileOpen(false)}
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
