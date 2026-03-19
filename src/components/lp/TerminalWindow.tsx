import type { ReactNode } from "react";

export function TerminalWindow(): ReactNode {
  return (
    <div className="code-window hero-terminal">
      <div className="window-header">
        <div className="window-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="window-title">DexCode — zsh</span>
        <div className="window-tabs">
          <span className="window-tab active">terminal</span>
          <span className="window-tab">output</span>
        </div>
      </div>
      <div className="code-content">
        <div className="code-line">
          <span className="line-num">1</span>
          <span className="prompt">$</span> <span className="cmd">git clone</span> git@github.com:co-r-e/dexcode.git DexCode
        </div>
        <div className="code-line dimmed">
          <span className="line-num">2</span>
          <span className="output-text">{"Cloning into 'DexCode'... done."}</span>
        </div>
        <div className="code-line">
          <span className="line-num">3</span>
          <span className="prompt">$</span> <span className="cmd">cd</span> DexCode && <span className="cmd">npm install</span> && <span className="cmd">npm run</span> dev
        </div>
        <div className="code-line dimmed">
          <span className="line-num">4</span>
          <span className="output-text">added 127 packages in 4.2s</span>
        </div>
        <div className="code-line">
          <span className="line-num">5</span>
          <span className="success">✓ Ready on http://localhost:3000</span>
        </div>
        <div className="code-line-separator" />
        <div className="code-line">
          <span className="line-num">6</span>
          <span className="prompt">$</span> <span className="cmd">claude</span> <span className="string">&quot;Create a pitch deck for my startup&quot;</span>
        </div>
        <div className="code-line typing-line">
          <span className="line-num">7</span>
          <span className="ai-label">Claude</span> <span className="ai-typing">Generating 8 slides...</span><span className="cursor">▊</span>
        </div>
      </div>
      <div className="terminal-statusbar">
        <span className="statusbar-left">zsh</span>
        <span className="statusbar-center">~/projects/DexCode</span>
        <span className="statusbar-right">node v20.11</span>
      </div>
    </div>
  );
}
