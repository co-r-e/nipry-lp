import type { ReactNode } from "react";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { LpPage } from "@/components/lp/LpPage";

const SITE_URL = "https://co-r-e.github.io/dexcode-lp";
const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.meta.title,
  description: dict.meta.description,
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      en: `${SITE_URL}/`,
      ja: `${SITE_URL}/ja`,
      "x-default": `${SITE_URL}/`,
    },
  },
  verification: {
    google: "CBcDA0b8srBcFKeEHkeDyhDckldYfdR1QRjYWExLy7I",
  },
  authors: [{ name: "CORe Inc." }],
  other: {
    "theme-color": "#111111",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    title: dict.meta.ogTitle,
    description: dict.meta.ogDescription,
    siteName: "Amaroad",
    images: [
      {
        url: `${SITE_URL}/assets/og-image.png?v=2`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    alternateLocale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: dict.meta.ogTitle,
    description: dict.meta.ogDescription,
    images: [`${SITE_URL}/assets/og-image.png?v=2`],
  },
};

export default function EnglishLpPage(): ReactNode {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Amaroad",
              description: dict.meta.description,
              url: `${SITE_URL}/`,
              applicationCategory: "DeveloperApplication",
              operatingSystem: "macOS, Linux, Windows (WSL)",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              license: "https://opensource.org/licenses/MIT",
              codeRepository: "https://github.com/co-r-e/amaroad",
              installUrl: "https://github.com/co-r-e/amaroad",
              downloadUrl: "https://github.com/co-r-e/amaroad",
              softwareVersion: "0.1.3",
              datePublished: "2025-01-01",
              inLanguage: ["en", "ja"],
              author: {
                "@type": "Organization",
                name: "CORe Inc.",
                url: "https://co-r-e.com",
              },
              screenshot: `${SITE_URL}/assets/og-image.png`,
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Amaroad",
              url: `${SITE_URL}/`,
              inLanguage: ["en", "ja"],
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/docs/getting-started/introduction`,
              },
            },
          ]),
        }}
      />
      <LpPage locale="en" dict={dict} />
    </>
  );
}
