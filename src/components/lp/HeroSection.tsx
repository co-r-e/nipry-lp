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
            <span
              className="btn btn-primary btn-disabled"
              role="button"
              aria-disabled="true"
              tabIndex={0}
              data-tooltip={dict.maintenance.ctaTooltip}
              title={dict.maintenance.ctaTooltip}
            >
              {dict.hero.cta}
            </span>
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
