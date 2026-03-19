import type { ReactNode } from "react";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { LpPage } from "@/components/lp/LpPage";

const SITE_URL = "https://co-r-e.github.io/dexcode-lp";
const dict = getDictionary("ja");

export const metadata: Metadata = {
  title: dict.meta.title,
  description: dict.meta.description,
  alternates: {
    canonical: `${SITE_URL}/ja`,
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
    url: `${SITE_URL}/ja`,
    title: dict.meta.ogTitle,
    description: dict.meta.ogDescription,
    siteName: "DexCode",
    images: [
      {
        url: `${SITE_URL}/assets/og-image.png?v=2`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: dict.meta.ogTitle,
    description: dict.meta.ogDescription,
    images: [`${SITE_URL}/assets/og-image.png?v=2`],
  },
};

export default function JapaneseLpPage(): ReactNode {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "DexCode",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "macOS, Linux, Windows (WSL)",
            description: dict.meta.description,
            url: `${SITE_URL}/ja/`,
            author: {
              "@type": "Organization",
              name: "CORe Inc.",
              url: "https://co-r-e.com",
            },
            license: "https://opensource.org/licenses/MIT",
            codeRepository: "https://github.com/co-r-e/dexcode",
            offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
          }),
        }}
      />
      <LpPage locale="ja" dict={dict} />
    </>
  );
}
