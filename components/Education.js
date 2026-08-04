"use client";
import Reveal from "./Reveal";
import { education } from "@/data/resume";

/*
 * Education rendered as Docker-style "base image" cards — the layers
 * the rest of the stack is built on. Data lives in data/resume.js.
 */
export default function Education() {
  return (
    <section className="section" id="education" style={{ paddingTop: 0 }}>
      <div className="section-tag mono">Base Images</div>
      <h2 className="section-title">Education</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 20,
        }}
      >
        {education.map((ed, i) => (
          <Reveal key={ed.school} delay={i * 0.12}>
            <div
              className="hover-card"
              style={{
                border: "1px solid var(--border)",
                borderRadius: 14,
                background: "var(--bg-soft)",
                overflow: "hidden",
                height: "100%",
              }}
            >
              {/* pull line */}
              <div
                className="mono"
                style={{
                  padding: "12px 24px",
                  borderBottom: "1px solid var(--border)",
                  fontSize: 12,
                  color: "var(--muted)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ color: "var(--accent)" }}>❯</span>
                docker pull {ed.image}
                <span
                  style={{
                    marginLeft: "auto",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    animation: "breathe 1.6s ease-in-out infinite",
                  }}
                />
              </div>

              <div style={{ padding: "24px 24px 26px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 6,
                  }}
                >
                  <h3 style={{ fontSize: 19, fontWeight: 700 }}>{ed.school}</h3>
                  {ed.gpa && (
                    <span
                      className="mono"
                      style={{
                        fontSize: 12,
                        color: "var(--accent)",
                        border: "1px solid var(--accent-line)",
                        borderRadius: 999,
                        padding: "4px 12px",
                        letterSpacing: 1,
                      }}
                    >
                      GPA {ed.gpa}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 15, opacity: 0.85, marginBottom: 14 }}>{ed.degree}</div>
                <div
                  className="mono"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 8,
                    fontSize: 12,
                    color: "var(--muted)",
                    letterSpacing: 1,
                  }}
                >
                  <span>{ed.place.toUpperCase()}</span>
                  <span>{ed.period}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
