import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { HeroBackground } from "./HeroBackground";
import { TerminalWindow } from "./TerminalWindow";

interface HeroSectionProps {
  dict: Dictionary;
}

export function HeroSection({ dict }: HeroSectionProps): ReactNode {
  return (
    <section className="hero">
      <HeroBackground />
      <div className="hero-overlay" />
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">{dict.hero.eyebrow}</p>
          <h1 className="hero-title">
            <span className="highlight">{dict.hero.titleHighlight}</span>
            {dict.hero.titleRest}
          </h1>
          <p className="hero-subtitle">{dict.hero.subtitle}</p>
          <div className="hero-actions">
            <a
              href="https://github.com/co-r-e/dexcode"
              className="btn btn-primary"
            >
              {dict.hero.cta}
            </a>
          </div>
          <p className="hero-oss-note">
            <span className="oss-indicator" />
            {dict.hero.ossNote}
          </p>
        </div>
        <div className="hero-visual">
          <TerminalWindow />
        </div>
      </div>
    </section>
  );
}
