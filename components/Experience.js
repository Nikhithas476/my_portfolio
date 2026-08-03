"use client";
import Reveal from "./Reveal";
import { experience } from "@/data/resume";

/*
 * Each role renders as an ops-dashboard card instead of bullet points:
 * focus-distribution bars, impact stat tiles, and a stack chip row.
 * All of it is driven by data/resume.js — retarget per JD there.
 */
export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-tag mono">Deploy History</div>
      <h2 className="section-title">Release timeline</h2>

      <div style={{ position: "relative", paddingLeft: 40 }}>
        {/* vertical rail */}
        <div
          style={{
            position: "absolute",
            left: 11,
            top: 8,
            bottom: 8,
            width: 1,
            background: "var(--border)",
          }}
        />

        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.15} style={{ position: "relative", marginBottom: 56 }}>
            {/* timeline node */}
            <span
              style={{
                position: "absolute",
                left: -35,
                top: 6,
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: i === 0 ? "var(--accent)" : "var(--bg)",
                border: "2px solid var(--accent)",
                animation: "ringPing 2s ease-out infinite",
              }}
            />

            <div
              className="hover-card"
              style={{
                border: "1px solid var(--border)",
                borderRadius: 14,
                padding: "28px 32px",
                background: "var(--bg-soft)",
              }}
            >
              {/* header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 4,
                }}
              >
                <h3 style={{ fontSize: 22, fontWeight: 700 }}>
                  {job.company}{" "}
                  <span style={{ color: "var(--accent)", fontWeight: 400, fontSize: 16 }}>
                    / {job.role}
                  </span>
                </h3>
                <span className="mono" style={{ fontSize: 12, color: "var(--muted)", letterSpacing: 1 }}>
                  {job.period}
                </span>
              </div>
              <div className="mono" style={{ fontSize: 12, color: "var(--muted)", marginBottom: 24 }}>
                {job.place}
              </div>

              {/* focus bars + impact tiles */}
              <div className="xp-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32 }}>
                <div>
                  <div
                    className="mono"
                    style={{ fontSize: 11, letterSpacing: 2, color: "var(--muted)", marginBottom: 14 }}
                  >
                    FOCUS DISTRIBUTION
                  </div>
                  <div style={{ display: "grid", gap: 12 }}>
                    {job.focus.map((f, fi) => (
                      <div key={f.area}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: 13,
                            marginBottom: 5,
                          }}
                        >
                          <span style={{ opacity: 0.85 }}>{f.area}</span>
                          <span className="mono" style={{ color: "var(--accent)", fontSize: 12 }}>
                            {f.pct}%
                          </span>
                        </div>
                        <div
                          style={{
                            height: 6,
                            borderRadius: 4,
                            background: "var(--accent-dim)",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            className="growx"
                            style={{
                              "--bd": `${0.15 + fi * 0.1}s`,
                              width: `${f.pct}%`,
                              height: "100%",
                              borderRadius: 4,
                              background: "var(--accent)",
                              opacity: 0.85,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div
                    className="mono"
                    style={{ fontSize: 11, letterSpacing: 2, color: "var(--muted)", marginBottom: 14 }}
                  >
                    IMPACT
                  </div>
                  <div style={{ display: "grid", gap: 10 }}>
                    {job.stats.map((s) => (
                      <div
                        key={s.label}
                        style={{
                          border: "1px solid var(--border)",
                          borderRadius: 10,
                          padding: "12px 16px",
                          display: "flex",
                          alignItems: "baseline",
                          justifyContent: "space-between",
                          gap: 12,
                        }}
                      >
                        <span
                          className="mono"
                          style={{ fontSize: 22, fontWeight: 700, color: "var(--accent)" }}
                        >
                          {s.value}
                        </span>
                        <span
                          className="mono"
                          style={{ fontSize: 11, letterSpacing: 1.5, color: "var(--muted)" }}
                        >
                          {s.label.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* stack chips */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginTop: 24,
                  paddingTop: 20,
                  borderTop: "1px solid var(--border)",
                }}
              >
                {job.stack.map((t) => (
                  <span
                    key={t}
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
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <style jsx global>{`
        @media (max-width: 760px) {
          .xp-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
