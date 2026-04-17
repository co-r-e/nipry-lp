import type { ReactNode } from "react";
import Link from "next/link";
import { OsTabs } from "@/components/lp";

const TERMINAL_BLOCK = "overflow-x-auto rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 font-mono text-xs leading-6 text-white sm:text-sm";
const SECTION_LABEL = "text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-soft)]";
const BTN_PRIMARY = "inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90";
const BTN_OUTLINE = "inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-[rgba(255,255,255,0.06)]";

type ShellLineProps = { prompt?: string; children: ReactNode };

function ShellLine({ prompt = "$", children }: ShellLineProps): ReactNode {
  return (
    <div className="whitespace-nowrap">
      <span className="mr-2 text-white/50">{prompt}</span>
      {children}
    </div>
  );
}

type ShellCommentProps = { first?: boolean; children: ReactNode };

function ShellComment({ first = false, children }: ShellCommentProps): ReactNode {
  return (
    <div className={`whitespace-nowrap${first ? "" : " mt-3"}`}>
      <span className="mr-2 text-white/50">#</span>
      <span className="text-white/40">{children}</span>
    </div>
  );
}

const features = [
  {
    title: "AI-First Workflow",
    description: "Use Claude Code, Codex, Gemini CLI, or Cursor to create and refine slides. Same terminal, same flow.",
  },
  {
    title: "Per-Slide Parallel Editing",
    description: "After the draft, run one agent per slide and push multiple revisions simultaneously instead of serial rework.",
  },
  {
    title: "Live Hot Reload",
    description: "Every change reflects instantly in the browser. HMR keeps your preview fresh as files are saved.",
  },
  {
    title: "Built-in Components",
    description: "Charts, icons, code blocks, tables, multi-column layouts, math equations, and shapes — ready to use.",
  },
  {
    title: "Cloudflare Tunnel Sharing",
    description: "Expose your deck with a shareable URL and collect real-time feedback from teammates anywhere.",
  },
  {
    title: "Presenter Mode",
    description: "Open a separate fullscreen window for projector output, synced in real-time via BroadcastChannel.",
  },
  {
    title: "PDF & PPTX Export",
    description: "Export decks to high-quality PDF via Playwright or PPTX for sharing, printing, or offline use.",
  },
  {
    title: "Image Generation Skills",
    description: "Generate photorealistic images via Gemini API and professional SVG diagrams directly from the CLI.",
  },
];

const faqItems = [
  {
    q: "What is Amaroad?",
    a: "Amaroad is an AI-first slide authoring and refinement tool. It lets you create, revise, and share slide decks from the terminal using AI agents like Claude Code.",
  },
  {
    q: "Do I need PowerPoint or Keynote?",
    a: "No. Amaroad runs entirely in the terminal and browser. Slides are MDX files that render in real-time. No desktop presentation app required.",
  },
  {
    q: "Which AI agents are supported?",
    a: "Amaroad works with any AI coding agent that can edit files — Claude Code, Codex CLI, Gemini CLI, Cursor, and more.",
  },
  {
    q: "Is Amaroad free?",
    a: "Yes. Amaroad is open source under the MIT license. Clone the repo, install dependencies, and start creating.",
  },
  {
    q: "Can I share my slides with others?",
    a: "Yes. Use Cloudflare Tunnel to expose a live URL, export to PDF/PPTX, or simply share the project repo.",
  },
  {
    q: "What technologies does Amaroad use?",
    a: "Amaroad is built with Next.js, MDX, React, and Tailwind CSS. Slides are React components rendered with hot module replacement.",
  },
];

export default function LandingPage(): ReactNode {
  return (
    <div className="min-h-screen bg-[var(--background)] font-[family-name:var(--font-figtree)] text-[var(--ink)]">
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-[var(--line)] bg-[var(--background)]/80 px-4 backdrop-blur-lg lg:px-8">
        <span className="text-lg font-bold tracking-tight">Amaroad</span>
        <nav className="flex items-center gap-6">
          <Link href="/docs" className="text-sm text-[var(--ink-soft)] transition hover:text-[var(--ink)]">Docs</Link>
          <a href="https://github.com/co-r-e/amaroad" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--ink-soft)] transition hover:text-[var(--ink)]">GitHub</a>
        </nav>
      </header>

      <section className="mx-auto max-w-4xl px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
        <p className={`${SECTION_LABEL} mb-4`}>AI-First Slide Authoring</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Create & Refine Slides{" "}
          <span className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent">
            From Your Terminal
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--ink-soft)]">
          Amaroad lets you generate slide decks with AI agents, refine each slide in parallel, and share a live URL — all without leaving your coding workflow.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/docs/getting-started/introduction" className={BTN_PRIMARY}>
            Get Started
          </Link>
          <a href="https://github.com/co-r-e/amaroad" target="_blank" rel="noopener noreferrer" className={BTN_OUTLINE}>
            View on GitHub
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className={`${SECTION_LABEL} mb-3 text-center`}>Workflow</p>
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Four Steps, Zero Context Switching
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "1", title: "Prompt", desc: "Tell your AI agent to create a slide deck. It generates MDX files automatically." },
            { step: "2", title: "Preview", desc: "Slides appear in the browser instantly with hot reload. See changes in real time." },
            { step: "3", title: "Refine", desc: "Edit slides in parallel — one agent per slide. Fix copy, charts, and spacing simultaneously." },
            { step: "4", title: "Share", desc: "Present, export to PDF, or share a live URL via Cloudflare Tunnel with your team." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-soft)]">
                <span className="text-sm font-bold text-[var(--accent)]">{step}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="text-sm text-[var(--ink-soft)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className={`${SECTION_LABEL} mb-3 text-center`}>Features</p>
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Everything You Need for AI-Driven Decks
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6">
              <h3 className="mb-2 text-base font-semibold">{f.title}</h3>
              <p className="text-sm text-[var(--ink-soft)]">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className={`${SECTION_LABEL} mb-3 text-center`}>Installation</p>
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Get Started in Seconds
        </h2>
        <OsTabs items="npm,From Source">
          <div className={TERMINAL_BLOCK}>
            <ShellLine>git clone git@github.com:co-r-e/amaroad.git amaroad</ShellLine>
            <ShellLine>cd amaroad && npm install</ShellLine>
            <ShellLine>npm run dev</ShellLine>
          </div>
          <div className={TERMINAL_BLOCK}>
            <ShellLine>git clone git@github.com:co-r-e/amaroad.git amaroad</ShellLine>
            <ShellLine>cd amaroad</ShellLine>
            <ShellLine>npm install</ShellLine>
            <ShellLine>npm run build</ShellLine>
          </div>
        </OsTabs>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className={`${SECTION_LABEL} mb-3 text-center`}>Quick Start</p>
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Your First Deck in Minutes
        </h2>
        <div className={TERMINAL_BLOCK}>
          <ShellComment first>Clone and install</ShellComment>
          <ShellLine>git clone git@github.com:co-r-e/amaroad.git amaroad</ShellLine>
          <ShellLine>cd amaroad && npm install && npm run dev</ShellLine>

          <ShellComment>Open Claude Code and create a deck</ShellComment>
          <ShellLine>claude</ShellLine>
          <ShellLine prompt=">">&quot;Create a 10-slide pitch deck for my startup&quot;</ShellLine>

          <ShellComment>Refine slides in parallel</ShellComment>
          <ShellLine prompt=">">&quot;Update slides 3, 5, 8: tighten copy, improve charts&quot;</ShellLine>

          <ShellComment>Share with your team</ShellComment>
          <ShellLine prompt=">">&quot;Expose this deck via Cloudflare Tunnel&quot;</ShellLine>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className={`${SECTION_LABEL} mb-3 text-center`}>FAQ</p>
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-1">
          {faqItems.map((item) => (
            <details key={item.q} className="group border-b border-[var(--line)]">
              <summary className="flex cursor-pointer select-none items-center justify-between py-4 text-[var(--ink)] hover:text-[var(--accent)]">
                <span className="font-medium">{item.q}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transition-transform duration-200 group-open:rotate-180">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-[var(--ink-soft)]">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-[var(--line)] px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-sm text-[var(--ink-soft)] sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} CORe Inc. MIT License.</p>
          <div className="flex gap-6">
            <Link href="/docs" className="transition hover:text-[var(--ink)]">Documentation</Link>
            <a href="https://github.com/co-r-e/amaroad" target="_blank" rel="noopener noreferrer" className="transition hover:text-[var(--ink)]">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
