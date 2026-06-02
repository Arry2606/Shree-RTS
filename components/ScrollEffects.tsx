"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add("shadow-md");
      } else {
        header.classList.remove("shadow-md");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
