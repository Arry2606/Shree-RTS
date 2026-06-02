"use client";

import { useState } from "react";
import MaterialIcon from "./MaterialIcon";

const navLinks = [
  { href: "#plans", label: "Tiffin Plans" },
  { href: "#breakfast", label: "Breakfast Menu" },
  { href: "#timings", label: "Timings" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-outline-variant/30 bg-surface/90 shadow-sm backdrop-blur-md dark:bg-surface-dim/90">
      <nav
        className="mx-auto flex h-16 max-w-container-max items-center justify-between px-5 py-stack-sm md:px-margin-desktop"
        aria-label="Main navigation"
      >
        <div className="font-display-lg text-title-lg font-bold text-primary md:text-headline-md">
          Shree Ram Tiffin
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
            className="rounded-full bg-primary px-6 py-2 font-label-md text-on-primary transition-opacity duration-200 hover:opacity-90 active:scale-95"
            href="tel:9711467998"
          >
            Call Now
          </a>
        </div>
        <button
          type="button"
          className="text-primary md:hidden"
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
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="inline-flex w-fit rounded-full bg-primary px-6 py-2 font-label-md text-on-primary transition-opacity hover:opacity-90"
              href="tel:9711467998"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
