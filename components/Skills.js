"use client";
import Reveal from "./Reveal";
import { skillGroups, maxYears } from "@/data/resume";

/* Skill "capacity gauges" — segmented utilization bars styled like a
 * monitoring dashboard. */
export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-tag mono">Capabilities</div>
      <h2 className="section-title">Cluster utilization</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 20,
        }}
      >
        {skillGroups.map((g, i) => (
          <Reveal key={g.name} delay={i * 0.08}>
            <div
              className="hover-card"
              style={{
                border: "1px solid var(--border)",
                borderRadius: 14,
                padding: "26px 28px",
                background: "var(--bg-soft)",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 14,
                }}
              >
                <span style={{ fontWeight: 700, fontSize: 18 }}>{g.name}</span>
                <span className="mono" style={{ color: "var(--accent)", fontSize: 13 }}>
                  {g.years}+ yrs
                </span>
              </div>

              {/* segmented gauge — one segment per year, scaled to maxYears */}
              <div style={{ display: "flex", gap: 5, marginBottom: 18 }}>
                {Array.from({ length: maxYears }).map((_, s) => {
                  const lit = s + 1 <= g.years;
                  return (
                    <span
                      key={s}
                      style={{
                        flex: 1,
                        height: 18,
                        borderRadius: 3,
                        background: lit ? "var(--accent)" : "var(--accent-dim)",
                        opacity: lit ? 0.5 + ((s + 1) / maxYears) * 0.5 : 1,
                      }}
                    />
                  );
                })}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="mono"
                    style={{
                      fontSize: 11,
                      letterSpacing: 0.5,
                      color: "var(--muted)",
                      border: "1px solid var(--border)",
                      borderRadius: 6,
                      padding: "5px 10px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
