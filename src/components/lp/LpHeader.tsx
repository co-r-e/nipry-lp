import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { assetUrl } from "@/lib/asset-path";

interface LpHeaderProps {
  dict: Dictionary;
  locale: Locale;
}

export function LpHeader({ dict, locale }: LpHeaderProps): ReactNode {
  const langHref = assetUrl(locale === "en" ? "/ja" : "/");

  return (
    <header className="header">
      <div className="container header-container">
        <nav className="nav nav-left">
          <ul className="nav-list">
            <li>
              <a href="#features" className="nav-link">
                {dict.header.features}
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="nav-link">
                {dict.header.howItWorks}
              </a>
            </li>
            <li>
              <a href="/dexcode-lp/docs/getting-started/introduction" className="nav-link">
                Docs
              </a>
            </li>
          </ul>
        </nav>
        <a href={assetUrl(locale === "en" ? "/" : "/ja")} className="logo">
          <img
            src={assetUrl("/assets/dexcode-logo.svg")}
            alt="DexCode logo"
            className="logo-img"
          />
        </a>
        <div className="nav nav-right">
          <a
            href={langHref}
            className="nav-link lang-switch"
            aria-label={dict.header.langSwitchAriaLabel}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lang-icon"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            {dict.header.langLabel}
          </a>
          <span
            className="btn btn-primary btn-header btn-disabled"
            role="button"
            aria-disabled="true"
            tabIndex={0}
            data-tooltip={dict.maintenance.ctaTooltip}
            title={dict.maintenance.ctaTooltip}
          >
            {dict.header.cta}
          </span>
        </div>
      </div>
    </header>
  );
}
