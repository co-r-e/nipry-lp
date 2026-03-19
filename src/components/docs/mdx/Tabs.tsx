"use client";

import { Children, useState, type ReactNode } from "react";

interface TabsProps {
  items: string;
  defaultIndex?: number;
  children: ReactNode;
}

export function Tabs({ items, defaultIndex = 0, children }: TabsProps): ReactNode {
  const labels = (typeof items === "string" ? items : String(items)).split(",").map((s) => s.trim());
  const [active, setActive] = useState(defaultIndex);
  const panels = Children.toArray(children);

  return (
    <div className="my-6">
      <div className="flex gap-0 border-b border-[var(--line)]">
        {labels.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => setActive(i)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              i === active
                ? "border-b-2 border-[var(--accent)] text-[var(--ink)]"
                : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="pt-4">{panels[active]}</div>
    </div>
  );
}
