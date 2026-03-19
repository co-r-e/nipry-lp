"use client";

import { useEffect, useRef, type ReactNode } from "react";

const GRADIENTS: [string, string][] = [
  ["#facc15", "#f59e0b"],
  ["#fbbf24", "#f97316"],
  ["#f97316", "#ef4444"],
  ["#fb923c", "#f43f5e"],
  ["#fde047", "#fb923c"],
  ["#ef4444", "#dc2626"],
  ["#f59e0b", "#ea580c"],
  ["#fcd34d", "#f87171"],
  ["#f43f5e", "#e11d48"],
  ["#fbbf24", "#ef4444"],
];

const TYPES = ["type-title", "type-list", "type-chart", "type-split", "type-code"];

export function HeroBackground(): ReactNode {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let slideWidth = 132;
    let gapX = 28;
    let gapY = 22;

    if (window.innerWidth <= 600) {
      slideWidth = 92;
      gapX = 14;
      gapY = 12;
    } else if (window.innerWidth <= 960) {
      slideWidth = 108;
      gapX = 20;
      gapY = 16;
    }

    const slideHeight = Math.round((slideWidth * 9) / 16);
    const coveragePadding = 200;

    el.style.setProperty("--slide-width", `${slideWidth}px`);
    el.style.setProperty("--slide-height", `${slideHeight}px`);
    el.style.setProperty("--slide-gap-x", `${gapX}px`);
    el.style.setProperty("--slide-gap-y", `${gapY}px`);

    const cols = Math.ceil((window.innerWidth + coveragePadding) / (slideWidth + gapX)) + 4;
    const rows = Math.ceil((window.innerHeight + coveragePadding) / (slideHeight + gapY)) + 4;
    const total = cols * rows;

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < total; i++) {
      const slide = document.createElement("div");
      slide.classList.add("slide-thumbnail");

      const [c1, c2] = GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)];
      const angle = Math.floor(Math.random() * 360);
      slide.style.background = `linear-gradient(${angle}deg, ${c1}, ${c2})`;
      slide.classList.add(TYPES[Math.floor(Math.random() * TYPES.length)]);

      fragment.appendChild(slide);
    }
    el.appendChild(fragment);
  }, []);

  return <div ref={ref} className="hero-background" />;
}
