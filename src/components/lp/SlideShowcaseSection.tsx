import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { slideRows } from "./slide-data";
import { MarqueeTrack } from "./MarqueeTrack";

interface SlideShowcaseSectionProps {
  dict: Dictionary;
}

export function SlideShowcaseSection({ dict }: SlideShowcaseSectionProps): ReactNode {
  return (
    <section className="slide-showcase">
      <div className="slide-showcase-header">
        <p className="slide-showcase-label">{dict.showcase.label}</p>
        <h2 className="section-title">{dict.showcase.title}</h2>
        <p className="section-subtitle">{dict.showcase.subtitle}</p>
      </div>
      <div className="marquee-wrapper">
        {slideRows.map((row, i) => (
          <MarqueeTrack
            key={i}
            direction={i % 2 === 0 ? "left" : "right"}
            images={row}
          />
        ))}
      </div>
    </section>
  );
}
