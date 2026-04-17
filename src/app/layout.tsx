import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Figtree, Inter, Fira_Code, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Amaroad | AI-First Slide Authoring & Refinement Tool",
  description:
    "Amaroad is an AI-first slide authoring tool. Create slide drafts fast, refine each slide in parallel with AI agents, then share a live URL via Cloudflare Tunnel.",
  icons: {
    icon: "/assets/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): ReactNode {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.variable} ${inter.variable} ${firaCode.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
