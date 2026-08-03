"use client";
import Reveal from "./Reveal";
import { certs, profile } from "@/data/resume";

export default function Certs() {
  return (
    <section className="section" id="contact" style={{ textAlign: "center" }}>
      <div className="section-tag mono" style={{ justifyContent: "center" }}>
        Verified
      </div>
      <h2 className="section-title" style={{ marginBottom: 40 }}>
        Certifications
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 16,
          marginBottom: 100,
        }}
      >
        {certs.map((c, i) => (
          <Reveal key={c} delay={i * 0.12}>
            <div
              className="mono hover-card"
              style={{
                border: "1px solid var(--accent-line)",
                borderRadius: 10,
                padding: "16px 26px",
                fontSize: 13,
                letterSpacing: 1,
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "var(--bg-soft)",
              }}
            >
              <span style={{ color: "var(--accent)" }}>✦</span> {c}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginBottom: 24 }}>
          Let&apos;s ship something{" "}
          <span style={{ color: "transparent", WebkitTextStroke: "1px var(--accent)" }}>
            reliable
          </span>
          .
        </h3>

        <a
          href={`mailto:${profile.email}`}
          className="mono"
          style={{ color: "var(--accent)", fontSize: 16, letterSpacing: 1 }}
        >
          {profile.email} ↗
        </a>
      </Reveal>

      <footer
        className="mono"
        style={{
          marginTop: 100,
          paddingTop: 32,
          borderTop: "1px solid var(--border)",
          fontSize: 12,
          color: "var(--muted)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span>© 2026 Nikhitha Somineni</span>
        <span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{ marginRight: 24 }}>
            LINKEDIN
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GITHUB
          </a>
        </span>
      </footer>
    </section>
  );
}
