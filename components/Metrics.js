"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { metrics } from "@/data/resume";

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const [n, setN] = useState(value); // final value by default — count-up is decoration

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const dur = 1400;
        const start = performance.now();
        const step = (t) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        setN(0);
        requestAnimationFrame(step);
        // safety: if rAF is throttled, land on the final value anyway
        setTimeout(() => setN(value), dur + 200);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {n}
      <span style={{ color: "var(--accent)" }}>{suffix}</span>
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 1,
          border: "1px solid var(--border)",
          borderRadius: 16,
          overflow: "hidden",
          background: "var(--border)",
        }}
      >
        {metrics.map((m, i) => (
          <Reveal
            key={m.label}
            delay={i * 0.1}
            style={{
              background: "var(--bg-soft)",
              padding: "40px 32px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>
              <CountUp value={m.value} suffix={m.suffix} />
            </div>
            <div
              className="mono"
              style={{ fontSize: 12, letterSpacing: 2, color: "var(--muted)", marginTop: 8 }}
            >
              {m.label.toUpperCase()}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
