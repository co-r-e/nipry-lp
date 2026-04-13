import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import "@/styles/lp.css";

import { LpHeader } from "./LpHeader";
import { NoticeBanner } from "./NoticeBanner";
import { HeroSection } from "./HeroSection";
import { UsageFlowSection } from "./UsageFlowSection";
import { SlideShowcaseSection } from "./SlideShowcaseSection";
import { ConceptSection } from "./ConceptSection";
import { FeaturesSection } from "./FeaturesSection";
import { AgentSkillsSection } from "./AgentSkillsSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { CtaSection } from "./CtaSection";
import { LpFooter } from "./LpFooter";

interface LpPageProps {
  locale: Locale;
  dict: Dictionary;
}

export function LpPage({ locale, dict }: LpPageProps): ReactNode {
  return (
    <div className="lp-root">
      <LpHeader dict={dict} locale={locale} />
      <NoticeBanner dict={dict} />
      <main>
        <HeroSection dict={dict} />
        <UsageFlowSection dict={dict} />
        <SlideShowcaseSection dict={dict} />
        <ConceptSection dict={dict} />
        <FeaturesSection dict={dict} />
        <AgentSkillsSection dict={dict} />
        <HowItWorksSection dict={dict} />
        <CtaSection dict={dict} />
      </main>
      <LpFooter dict={dict} />
    </div>
  );
}
