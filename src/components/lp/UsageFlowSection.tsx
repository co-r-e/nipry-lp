import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { FadeIn } from "./FadeIn";

interface UsageFlowSectionProps {
  dict: Dictionary;
}

function CodeSnippet({ code }: { code: string }): ReactNode {
  return (
    <div className="usage-code-snippet">
      <div className="usage-code-header">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
      </div>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: code.replace(/^\$/, '<span class="prompt">$</span>').replace(/\n\$/g, '\n<span class="prompt">$</span>').replace(/^>/gm, '<span class="prompt">&gt;</span>') }} />
      </pre>
    </div>
  );
}

export function UsageFlowSection({ dict }: UsageFlowSectionProps): ReactNode {
  const { steps, shareOptions } = dict.usage;

  return (
    <section className="usage-flow usage-flow-decorated">
      <div className="usage-bottom-deco usage-bottom-l1" />
      <div className="usage-bottom-deco usage-bottom-l2" />
      <div className="usage-bottom-deco usage-bottom-l3" />
      <div className="usage-bottom-deco usage-bottom-r1" />
      <div className="usage-bottom-deco usage-bottom-r2" />
      <div className="usage-bottom-deco usage-bottom-r3" />
      <div className="container">
        <div className="section-header text-center usage-header-decorated">
          <div className="usage-deco usage-deco-l1" />
          <div className="usage-deco usage-deco-l2" />
          <div className="usage-deco usage-deco-l3" />
          <div className="usage-deco usage-deco-r1" />
          <div className="usage-deco usage-deco-r2" />
          <div className="usage-deco usage-deco-r3" />
          <p className="usage-flow-label">{dict.usage.label}</p>
          <h2
            className="section-title"
            dangerouslySetInnerHTML={{ __html: dict.usage.title.replace(/\n/g, "<br>") }}
          />
          <p className="section-subtitle">{dict.usage.subtitle}</p>
        </div>

        <div className="usage-timeline">
          {steps.map((step, i) => (
            <FadeIn key={i} className="usage-step">
              <div className="usage-step-marker">
                <span className="usage-step-num">{i + 1}</span>
              </div>
              <div className="usage-step-body">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {step.code && <CodeSnippet code={step.code} />}
                {step.badge && (
                  <div className="usage-preview-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <polyline points="13 2 13 9 20 9" />
                    </svg>
                    <span>{step.badge}</span>
                    <span className="usage-live-dot" />
                    <span className="usage-live-text">{step.badgeLive}</span>
                  </div>
                )}
                {i === steps.length - 1 && (
                  <div className="usage-share-options">
                    {shareOptions.map((opt) => (
                      <span key={opt} className="usage-option">
                        {opt}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
