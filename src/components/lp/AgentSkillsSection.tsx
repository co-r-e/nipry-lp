import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { FadeIn } from "./FadeIn";

interface AgentSkillsSectionProps {
  dict: Dictionary;
}

const SKILL_ICONS: Record<string, string> = {
  design: "🎨",
  scaffold: "🏗️",
  image: "🖼️",
  imageEdit: "✏️",
  diagram: "📐",
  graphicRecording: "🎙️",
  video: "🎬",
  localize: "🌐",
  overflow: "📏",
  preflight: "✅",
  notes: "🗒️",
  facts: "🔍",
  theme: "🎯",
  remotion: "📚",
};

export function AgentSkillsSection({ dict }: AgentSkillsSectionProps): ReactNode {
  return (
    <section id="agent-skills" className="agent-skills-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">{dict.agentSkills.title}</h2>
          <p className="section-subtitle">{dict.agentSkills.subtitle}</p>
        </div>
        <div className="skills-table-wrapper">
          <FadeIn>
            <table className="skills-table">
              <thead>
                <tr>
                  <th>{dict.agentSkills.colSkill}</th>
                  <th>{dict.agentSkills.colDescription}</th>
                  <th className="skills-trigger-col">{dict.agentSkills.colTrigger}</th>
                </tr>
              </thead>
              <tbody>
                {dict.agentSkills.skills.map((skill, i) => (
                  <tr key={i}>
                    <td className="skill-name-cell">
                      <span className="skill-icon">{SKILL_ICONS[skill.iconKey] ?? "⚡"}</span>
                      <span className="skill-name">{skill.name}</span>
                    </td>
                    <td className="skill-desc-cell">{skill.description}</td>
                    <td className="skill-trigger-cell">
                      <code>{skill.trigger}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
