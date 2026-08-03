"use client";
import Reveal from "./Reveal";
import { pipeline } from "@/data/resume";

/* Animated CI/CD pipeline — stages light up in sequence while a packet
 * of light travels the connecting rail forever. */
export default function Pipeline() {
  return (
    <section className="section" id="pipeline">
      <div className="section-tag mono">Delivery Flow</div>
      <h2 className="section-title">The pipeline never sleeps</h2>

      <div style={{ position: "relative", padding: "40px 0" }}>
        {/* rail */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: 1,
            background: "var(--border)",
          }}
        />
        {/* traveling packet */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            width: 60,
            height: 2,
            marginTop: -1,
            background: "var(--accent)",
            boxShadow: "0 0 12px var(--accent)",
            borderRadius: 2,
            animation: "packetRun 6s linear infinite",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: `repeat(${pipeline.length}, 1fr)`,
            gap: 12,
          }}
        >
          {pipeline.map((stage, i) => (
            <Reveal
              key={stage.id}
              delay={i * 0.12}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                className="mono"
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 16,
                  border: "1px solid rgba(0,220,130,0.2)",
                  background: "var(--bg-soft)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  color: "var(--accent)",
                  animation: `stageGlow 6s linear ${i}s infinite`,
                }}
              >
                {stage.icon}
              </div>
              <span className="mono" style={{ fontSize: 12, letterSpacing: 2, color: "var(--muted)" }}>
                {stage.label.toUpperCase()}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
