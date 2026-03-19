import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

interface CtaSectionProps {
  dict: Dictionary;
}

export function CtaSection({ dict }: CtaSectionProps): ReactNode {
  return (
    <section className="cta-section">
      <div className="cta-deco cta-deco-1" />
      <div className="cta-deco cta-deco-2" />
      <div className="cta-deco cta-deco-3" />
      <div className="cta-deco cta-deco-4" />
      <div className="cta-deco cta-deco-5" />
      <div className="cta-deco cta-deco-6" />
      <div className="cta-deco cta-deco-7" />
      <div className="cta-deco cta-deco-8" />
      <div className="container text-center">
        <p className="cta-label">{dict.cta.label}</p>
        <h2
          className="cta-title"
          dangerouslySetInnerHTML={{ __html: dict.cta.title.replace(/\n/g, "<br>") }}
        />
        <p className="cta-subtitle">{dict.cta.subtitle}</p>
        <div className="cta-buttons">
          <a
            href="https://github.com/co-r-e/dexcode"
            className="btn btn-primary btn-large"
          >
            {dict.cta.button}
          </a>
          <a
            href="/dexcode-lp/docs/getting-started/introduction"
            className="btn btn-secondary btn-large"
          >
            {dict.cta.docsButton}
          </a>
        </div>
      </div>
    </section>
  );
}
