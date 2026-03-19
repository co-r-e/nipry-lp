import type { ReactNode, SVGProps } from "react";

export function DocsLogo(props: SVGProps<SVGSVGElement>): ReactNode {
  return (
    <svg
      viewBox="0 0 160 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Slide stack icon */}
      <rect x="3" y="6" width="16" height="12" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="6" y="4" width="16" height="12" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="9" y="2" width="16" height="12" rx="2" fill="currentColor" opacity="0.8" />
      {/* "DexCode" text */}
      <text x="32" y="20" fill="currentColor" fontFamily="var(--font-figtree), system-ui, sans-serif" fontSize="18" fontWeight="700" letterSpacing="-0.02em">
        DexCode
      </text>
    </svg>
  );
}
