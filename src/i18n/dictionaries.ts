import type { Locale } from "./config";

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    locale: string;
  };
  header: {
    features: string;
    howItWorks: string;
    langLabel: string;
    langSwitchAriaLabel: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    titleHighlight: string;
    titleRest: string;
    subtitle: string;
    cta: string;
    ossNote: string;
  };
  usage: {
    label: string;
    title: string;
    subtitle: string;
    steps: {
      title: string;
      description: string;
      code?: string;
      badge?: string;
      badgeLive?: string;
    }[];
    shareOptions: string[];
  };
  showcase: {
    label: string;
    title: string;
    subtitle: string;
  };
  concept: {
    title: string;
    subtitle: string;
    cards: { title: string; description: string }[];
  };
  features: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: { title: string; description: string; code: string }[];
  };
  cta: {
    label: string;
    title: string;
    subtitle: string;
    button: string;
    docsButton: string;
  };
  footer: {
    copyright: string;
    github: string;
    docs: string;
    company: string;
  };
}

const en: Dictionary = {
  meta: {
    title: "DexCode - The AI-First Slide Authoring & Refinement Tool",
    description: "Create slide drafts fast, refine each slide in parallel with AI agents, then share a live URL via Cloudflare Tunnel for real-time review.",
    ogTitle: "DexCode - The AI-First Slide Authoring & Refinement Tool",
    ogDescription: "Your AI agent builds the deck. You never leave the terminal. Create, revise, and share slides from the same CLI where you write code.",
    locale: "en_US",
  },
  header: {
    features: "Features",
    howItWorks: "How it Works",
    langLabel: "EN",
    langSwitchAriaLabel: "日本語に切り替え",
    cta: "Get Started Free",
  },
  hero: {
    eyebrow: "AI Slide Creation Environment for Developers",
    titleHighlight: "Your AI Agent Builds the Deck.",
    titleRest: " You Never Leave the Terminal.",
    subtitle: "You already use Claude Code, Codex, Gemini CLI, or Cursor for coding. Now ask the same agent to build your slide deck — without leaving your terminal. No app switching. No PowerPoint. Just flow.",
    cta: "Get Started — It's Free",
    ossNote: "Free and open source under the MIT License",
  },
  usage: {
    label: "Usage",
    title: "Build Slides Without\nBreaking Your Flow",
    subtitle: "Create, revise, and share slides from the same terminal where you write code.",
    steps: [
      {
        title: "Prompt Between Commits",
        description: 'Just tell Claude Code "Create 5 slides for tomorrow\'s sprint review." Point it at your project path and it reads sprint context automatically. No need to stop coding.',
        code: '$ claude "Create 5 slides for tomorrow\'s sprint review.\n  Summarize the sprint from ./my-project"',
      },
      {
        title: "AI Generates Your Deck",
        description: "The AI agent creates MDX files and your slides appear in the browser in real time. Hot reload updates the preview instantly every time a file is saved.",
        badge: "Auto-generated slide-01.mdx → slide-05.mdx",
        badgeLive: "Live Preview",
      },
      {
        title: "Revise from the Terminal",
        description: '"Add an architecture diagram to slide 3." "Make the summary slide more concise." Refine your deck with the same workflow you use for code.',
        code: "> Add an architecture diagram to slide 3\n> Make the summary slide more concise",
      },
      {
        title: "Present & Share Instantly",
        description: "Jump straight into presenter mode for your meeting, export to PDF/PPTX, or share a live URL with your team via Cloudflare Tunnel.",
      },
    ],
    shareOptions: ["Presenter Mode", "PDF / PPTX", "Tunnel Sharing"],
  },
  showcase: {
    label: "Showcase",
    title: "100+ Built-in Slide Templates",
    subtitle: "Charts, code blocks, layouts, dashboards — all production-ready out of the box.",
  },
  concept: {
    title: "Why DexCode?",
    subtitle: "Built for developers who don't want to break their flow.",
    cards: [
      {
        title: "Zero Context Switching",
        description: "The AI agent you already use for coding — Claude Code, Codex, Gemini CLI, Cursor — builds your slides too. Same terminal, same flow.",
      },
      {
        title: "Per-Slide Parallel Editing",
        description: "After the draft, run one agent per slide and push multiple revisions at once instead of serial rework.",
      },
      {
        title: "AI Micro-Tuning",
        description: "Delegate spacing, wording, chart labels, and visual polish to AI for high-quality finishing touches.",
      },
    ],
  },
  features: {
    title: "Everything You Need for AI-Driven Deck Production",
    subtitle: "From first draft generation to parallel polish and live URL sharing.",
    items: [
      { title: "Parallel Slide Revisions", description: "Assign edits to multiple slides simultaneously and shorten review cycles dramatically." },
      { title: "AI Detail Adjustment", description: "Ask AI to improve tone, hierarchy, spacing, and chart readability with precision prompts." },
      { title: "Live Reload", description: "See your changes instantly. Hot Module Replacement (HMR) keeps your preview fresh." },
      { title: "Built-in Components", description: "Charts, icons, code blocks, tables, multi-column layouts, math equations, and shapes ready to use." },
      { title: "Cloudflare Tunnel Sharing", description: "Expose your deck with a shareable URL and collect feedback in real-time with teammates anywhere." },
      { title: "Presenter Mode", description: "Open a separate fullscreen window for projector output, synced in real-time via BroadcastChannel." },
      { title: "PDF Export", description: "Export decks to high-quality PDF via Playwright for sharing or printing." },
      { title: "Two Built-in Image Generation Skills", description: "Generate photorealistic images via Gemini API and professional SVG diagrams (flowcharts, architecture maps, comparisons, and more) directly from the CLI — both auto-styled to your deck's theme." },
    ],
  },
  howItWorks: {
    title: "How It Works",
    subtitle: "From draft generation to parallel refinement in minutes.",
    steps: [
      {
        title: "Install & Initialize",
        description: "Clone the repo and install dependencies.",
        code: "git clone git@github.com:co-r-e/dexcode.git DexCode\ncd DexCode\nnpm install",
      },
      {
        title: "Create the First Draft",
        description: "Start Claude Code and generate a complete deck draft from a single instruction.",
        code: '$ claude\n> Create a deck for "Q3 Roadmap" with 12 slides',
      },
      {
        title: "Revise Slides in Parallel",
        description: "Batch-request edits for selected slides so agents can work on each slide concurrently.",
        code: "> Update slides 04, 05, 08 in parallel:\n> tighten copy, improve chart labels, fix spacing",
      },
      {
        title: "Share, Review, and Present",
        description: "Use AI for final micro-adjustments, share a live URL via Cloudflare Tunnel, then present when ready.",
        code: "> Make slide 05 headline sharper and align chart axis labels\n> Expose this deck with Cloudflare Tunnel and share the URL\nnpm run dev",
      },
    ],
  },
  cta: {
    label: "Get Started",
    title: "Ready to iterate slides in parallel\nand present with confidence?",
    subtitle: "Open source, MIT licensed, and free to use.",
    button: "Get Started Free on GitHub",
    docsButton: "Read the Docs",
  },
  footer: {
    copyright: "© 2026 CORe Inc. All rights reserved.",
    github: "GitHub",
    docs: "Docs",
    company: "Company",
  },
};

const ja: Dictionary = {
  meta: {
    title: "DexCode - AIファーストのスライド作成・改善ツール",
    description: "AIエージェントでスライドを高速に作成し、スライドごとに並列で改善。Cloudflare Tunnelでライブ共有。",
    ogTitle: "DexCode - AIファーストのスライド作成・改善ツール",
    ogDescription: "AIエージェントがデッキを作成。ターミナルから離れない。コードを書くのと同じCLIでスライドを作成・修正・共有。",
    locale: "ja_JP",
  },
  header: {
    features: "機能",
    howItWorks: "使い方",
    langLabel: "EN",
    langSwitchAriaLabel: "Switch to English",
    cta: "無料ではじめる",
  },
  hero: {
    eyebrow: "開発者のためのAIスライド作成環境",
    titleHighlight: "AIコーディングをしながらスライド資料も作れる。",
    titleRest: "CLIからスライドを生成・並列編集。",
    subtitle: "Claude Code、Codex、Gemini CLI、Cursorでコーディングしているなら、同じエージェントでスライドも作れます。アプリの切り替え不要。PowerPoint不要。フローを止めない。",
    cta: "無料ではじめる",
    ossNote: "MITライセンスの無料オープンソース",
  },
  usage: {
    label: "Usage",
    title: "フローを止めずに\nスライドを作成",
    subtitle: "コードを書くターミナルから、スライドの作成・修正・共有がすべて完結します。",
    steps: [
      {
        title: "コミットの合間にプロンプト",
        description: 'Claude Codeに「明日のスプリントレビュー用にスライドを5枚作って」と指示するだけ。プロジェクトパスを指定すれば、スプリントの内容を自動で読み取ります。コーディングを中断する必要はありません。',
        code: '$ claude "Create 5 slides for tomorrow\'s sprint review.\n  Summarize the sprint from ./my-project"',
      },
      {
        title: "AIがデッキを自動生成",
        description: "AIエージェントがMDXファイルを生成し、ブラウザにスライドがリアルタイムで表示されます。ファイル保存のたびにホットリロードで即座に更新。",
        badge: "slide-01.mdx → slide-05.mdx を自動生成",
        badgeLive: "ライブプレビュー",
      },
      {
        title: "ターミナルから修正",
        description: '「スライド3にアーキテクチャ図を追加して」「まとめスライドをもっと簡潔に」。コードと同じワークフローでデッキを改善できます。',
        code: "> Add an architecture diagram to slide 3\n> Make the summary slide more concise",
      },
      {
        title: "すぐにプレゼン・共有",
        description: "プレゼンターモードですぐに発表、PDF/PPTXにエクスポート、またはCloudflare Tunnelでチームにライブ共有。",
      },
    ],
    shareOptions: ["プレゼンターモード", "PDF / PPTX", "トンネル共有"],
  },
  showcase: {
    label: "Showcase",
    title: "100以上の組み込みスライドテンプレート",
    subtitle: "チャート、コードブロック、レイアウト、ダッシュボード — すべてすぐに使えます。",
  },
  concept: {
    title: "なぜ DexCode？",
    subtitle: "フローを止めたくない開発者のために。",
    cards: [
      {
        title: "コンテキストスイッチゼロ",
        description: "コーディングに使っているAIエージェント — Claude Code、Codex、Gemini CLI、Cursor — がスライドも作成。同じターミナル、同じフロー。",
      },
      {
        title: "スライド単位の並列編集",
        description: "ドラフト後、スライドごとにエージェントを割り当てて複数の修正を同時に実行。逐次的な手戻りを大幅に削減。",
      },
      {
        title: "AIマイクロチューニング",
        description: "余白調整、文言改善、チャートのラベル、ビジュアルの仕上げをAIに委任して高品質な最終調整。",
      },
    ],
  },
  features: {
    title: "AI駆動のデッキ制作に必要なすべて",
    subtitle: "初稿生成から並列改善、ライブURL共有まで。",
    items: [
      { title: "スライドの並列修正", description: "複数スライドへの編集を同時に指示し、レビューサイクルを大幅に短縮。" },
      { title: "AIによる細部調整", description: "トーン、階層構造、余白、チャートの可読性をプロンプトで精密に改善。" },
      { title: "ライブリロード", description: "変更が即座に反映。HMR（Hot Module Replacement）でプレビューを常に最新に。" },
      { title: "組み込みコンポーネント", description: "チャート、アイコン、コードブロック、テーブル、マルチカラムレイアウト、数式、図形がすぐに使用可能。" },
      { title: "Cloudflare Tunnelによる共有", description: "共有URLでデッキを公開し、どこにいてもチームメンバーとリアルタイムでフィードバック。" },
      { title: "プレゼンターモード", description: "BroadcastChannelでリアルタイム同期されたフルスクリーンウィンドウをプロジェクター出力用に表示。" },
      { title: "PDFエクスポート", description: "Playwrightによる高品質PDF出力で、共有や印刷に対応。" },
      { title: "2つの組み込み画像生成スキル", description: "Gemini APIによるフォトリアリスティック画像と、プロフェッショナルなSVG図（フローチャート、アーキテクチャマップ、比較図など）をCLIから直接生成。デッキのテーマに自動スタイリング。" },
    ],
  },
  howItWorks: {
    title: "使い方",
    subtitle: "ドラフト生成から並列改善まで数分で完了。",
    steps: [
      {
        title: "インストール・初期設定",
        description: "リポジトリをクローンして依存関係をインストール。",
        code: "git clone git@github.com:co-r-e/dexcode.git DexCode\ncd DexCode\nnpm install",
      },
      {
        title: "最初のドラフトを作成",
        description: "Claude Codeを起動し、1つの指示でデッキのドラフトを丸ごと生成。",
        code: '$ claude\n> Create a deck for "Q3 Roadmap" with 12 slides',
      },
      {
        title: "スライドを並列で修正",
        description: "選択したスライドへの編集を一括指示し、エージェントが各スライドを同時に処理。",
        code: "> Update slides 04, 05, 08 in parallel:\n> tighten copy, improve chart labels, fix spacing",
      },
      {
        title: "共有・レビュー・プレゼン",
        description: "AIで最終調整を行い、Cloudflare Tunnelでライブ共有、準備ができたらプレゼン。",
        code: "> Make slide 05 headline sharper and align chart axis labels\n> Expose this deck with Cloudflare Tunnel and share the URL\nnpm run dev",
      },
    ],
  },
  cta: {
    label: "はじめる",
    title: "スライドを並列で改善し、\n自信を持ってプレゼンする準備はできましたか？",
    subtitle: "オープンソース、MITライセンス、無料で利用可能。",
    button: "無料ではじめる — GitHub",
    docsButton: "ドキュメントを読む",
  },
  footer: {
    copyright: "© 2026 CORe Inc. All rights reserved.",
    github: "GitHub",
    docs: "Docs",
    company: "Company",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, ja };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
