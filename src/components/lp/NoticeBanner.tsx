import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

interface NoticeBannerProps {
  dict: Dictionary;
}

export function NoticeBanner({ dict }: NoticeBannerProps): ReactNode {
  return (
    <div className="notice-banner" role="status" aria-live="polite">
      <div className="container notice-banner-inner">
        <span className="notice-banner-icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </span>
        <span className="notice-banner-text">{dict.maintenance.banner}</span>
      </div>
    </div>
  );
}
