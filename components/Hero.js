"use client";
import NetworkCanvas from "./NetworkCanvas";
import OrbitalCluster from "./OrbitalCluster";
import TypeTerminal from "./TypeTerminal";
import { profile } from "@/data/resume";

const marqueeItems = [
  "AWS", "AZURE", "KUBERNETES", "TERRAFORM", "DOCKER", "HELM",
  "JENKINS", "GITHUB ACTIONS", "PROMETHEUS", "GRAFANA", "DATADOG", "ANSIBLE",
];

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* faint grid backdrop */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,220,130,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,220,130,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <NetworkCanvas />

      <div
        className="hero-grid"
        style={{
          position: "relative",
          flex: 1,
          maxWidth: 1240,
          margin: "0 auto",
          width: "100%",
          padding: "120px 32px 40px",
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* left — identity */}
        <div>
          <div
            className="mono fade-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              border: "1px solid var(--border)",
              borderRadius: 999,
              fontSize: 12,
              letterSpacing: 2,
              color: "var(--accent)",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent)",
                animation: "breathe 1.6s ease-in-out infinite",
              }}
            />
            SYSTEMS OPERATIONAL — OPEN TO WORK
          </div>

          <h1
            className="fade-up"
            style={{
              "--d": "0.1s",
              fontSize: "clamp(44px, 7vw, 84px)",
              lineHeight: 1.02,
              letterSpacing: "-2px",
              fontWeight: 700,
            }}
          >
            Nikhitha
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--accent)" }}>
              Somineni
            </span>
          </h1>

          <p
            className="mono fade-up"
            style={{
              "--d": "0.25s",
              margin: "24px 0 32px",
              fontSize: 15,
              color: "var(--muted)",
              letterSpacing: 1,
            }}
          >
            DEVOPS ENGINEER · {profile.years}+ YRS · AWS / AZURE / K8S · {profile.location}
          </p>

          <div className="fade-up" style={{ "--d": "0.4s" }}>
            <TypeTerminal />
          </div>

          <div className="fade-up" style={{ "--d": "0.55s", display: "flex", gap: 16, marginTop: 32 }}>
            <a
              href={`mailto:${profile.email}`}
              className="mono"
              style={{
                padding: "13px 28px",
                background: "var(--accent)",
                color: "#04120b",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              GET IN TOUCH
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mono"
              style={{
                padding: "13px 28px",
                border: "1px solid var(--accent-line)",
                borderRadius: 8,
                fontSize: 13,
                letterSpacing: 1,
                color: "var(--text)",
              }}
            >
              GITHUB ↗
            </a>
          </div>
        </div>

        {/* right — orbital cluster */}
        <div
          className="hero-orbital fade-scale"
          style={{ "--d": "0.3s", display: "flex", justifyContent: "center" }}
        >
          <OrbitalCluster />
        </div>
      </div>

      {/* tool marquee */}
      <div
        style={{
          position: "relative",
          borderTop: "1px solid var(--border)",
          padding: "18px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div
          className="mono"
          style={{
            display: "inline-flex",
            gap: 48,
            animation: "marquee 28s linear infinite",
          }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: 13,
                letterSpacing: 3,
                color: i % 2 ? "var(--muted)" : "var(--accent)",
              }}
            >
              {item} <span style={{ opacity: 0.35, marginLeft: 40 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 100px !important;
          }
          .hero-orbital {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
