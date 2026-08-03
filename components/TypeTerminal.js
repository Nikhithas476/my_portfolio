"use client";
import { useEffect, useState } from "react";
import { heroCommands } from "@/data/resume";

/* Terminal card that types commands and prints output, cycling forever. */
export default function TypeTerminal() {
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [showOut, setShowOut] = useState(false);

  useEffect(() => {
    const { cmd } = heroCommands[idx];
    let i = 0;
    setTyped("");
    setShowOut(false);
    const t = setInterval(() => {
      i++;
      setTyped(cmd.slice(0, i));
      if (i >= cmd.length) {
        clearInterval(t);
        setTimeout(() => setShowOut(true), 250);
        setTimeout(() => setIdx((v) => (v + 1) % heroCommands.length), 3200);
      }
    }, 45);
    return () => clearInterval(t);
  }, [idx]);

  return (
    <div
      className="mono"
      style={{
        border: "1px solid var(--border)",
        borderRadius: 12,
        background: "rgba(6, 8, 7, 0.85)",
        backdropFilter: "blur(8px)",
        overflow: "hidden",
        maxWidth: 520,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 16px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              border: "1px solid var(--accent-line)",
              background: i === 0 ? "var(--accent)" : "transparent",
            }}
          />
        ))}
        <span style={{ marginLeft: 8, fontSize: 12, color: "var(--muted)" }}>
          nikhitha@prod — zsh
        </span>
      </div>
      <div style={{ padding: "18px 20px", fontSize: 14, minHeight: 92 }}>
        <div>
          <span style={{ color: "var(--accent)" }}>❯ </span>
          <span>{typed}</span>
          <span className="cursor-blink" style={{ color: "var(--accent)" }}>
            ▊
          </span>
        </div>
        {showOut && (
          <div style={{ color: "var(--muted)", marginTop: 10 }}>
            {heroCommands[idx].out}
          </div>
        )}
      </div>
      <style jsx>{`
        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
