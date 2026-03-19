import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { FadeIn } from "./FadeIn";

interface HowItWorksSectionProps {
  dict: Dictionary;
}

export function HowItWorksSection({ dict }: HowItWorksSectionProps): ReactNode {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">{dict.howItWorks.title}</h2>
          <p className="section-subtitle">{dict.howItWorks.subtitle}</p>
        </div>

        <div className="steps">
          {dict.howItWorks.steps.map((step, i) => (
            <FadeIn key={i} className="step">
              <div className="step-number">{String(i + 1).padStart(2, "0")}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="code-block">
                  <pre>
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
