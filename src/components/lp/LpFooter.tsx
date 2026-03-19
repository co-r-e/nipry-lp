import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { assetUrl } from "@/lib/asset-path";

interface LpFooterProps {
  dict: Dictionary;
}

export function LpFooter({ dict }: LpFooterProps): ReactNode {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="logo">
            <img
              src={assetUrl("/assets/dexcode-logo.svg")}
              alt="DexCode logo"
              className="logo-img-sm"
            />
          </div>
          <p className="copyright">{dict.footer.copyright}</p>
        </div>
        <div className="footer-right">
          <a href="https://github.com/co-r-e/dexcode" className="footer-link">
            {dict.footer.github}
          </a>
          <a href="/dexcode-lp/docs/getting-started/introduction" className="footer-link">
            {dict.footer.docs}
          </a>
          <a
            href="https://co-r-e.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            {dict.footer.company}
          </a>
        </div>
      </div>
    </footer>
  );
}
