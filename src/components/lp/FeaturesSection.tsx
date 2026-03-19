import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { FadeIn } from "./FadeIn";

interface FeaturesSectionProps {
  dict: Dictionary;
}

export function FeaturesSection({ dict }: FeaturesSectionProps): ReactNode {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">{dict.features.title}</h2>
          <p className="section-subtitle">{dict.features.subtitle}</p>
        </div>
        <div className="grid grid-2">
          {dict.features.items.map((item, i) => (
            <FadeIn key={i} className="feature-item">
              <div className="feature-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
