"use client";

/*
 * Orbital "cluster" visualization — a core control-plane hexagon with
 * three rotating orbit rings carrying tool nodes, radar sweep, and
 * pulsing sonar rings. Pure SVG + CSS animations, single accent color.
 */
const S = 560; // viewBox size
const C = S / 2;

const orbits = [
  { r: 105, duration: 26, reverse: false, nodes: ["K8s", "Helm", "Docker"] },
  { r: 170, duration: 40, reverse: true, nodes: ["AWS", "Azure", "Terraform", "Jenkins"] },
  { r: 235, duration: 58, reverse: false, nodes: ["Grafana", "Prometheus", "GitHub", "Datadog", "ELK"] },
];

function hexPath(cx, cy, r) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
  }
  return `M${pts.join("L")}Z`;
}

const spinStyle = (duration, reverse) => ({
  transformOrigin: `${C}px ${C}px`,
  animation: `${reverse ? "spinRev" : "spin"} ${duration}s linear infinite`,
});

export default function OrbitalCluster() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 560, aspectRatio: "1" }}>
      <svg viewBox={`0 0 ${S} ${S}`} style={{ width: "100%", height: "100%", overflow: "visible" }}>
        {/* radar sweep */}
        <g style={spinStyle(8, false)}>
          <path
            d={`M ${C} ${C} L ${C + 250} ${C} A 250 250 0 0 0 ${(C + 250 * Math.cos(-0.7)).toFixed(2)} ${(
              C + 250 * Math.sin(-0.7)
            ).toFixed(2)} Z`}
            fill="rgba(0,220,130,0.05)"
          />
          <line x1={C} y1={C} x2={C + 250} y2={C} stroke="rgba(0,220,130,0.35)" strokeWidth="1" />
        </g>

        {/* pulsing sonar rings */}
        {[0, 1, 2].map((i) => (
          <circle
            key={`pulse-${i}`}
            cx={C}
            cy={C}
            r={40}
            fill="none"
            stroke="rgba(0,220,130,0.5)"
            strokeWidth="1"
            style={{ animation: `sonar 5s ease-out ${i * 1.66}s infinite` }}
          />
        ))}

        {/* static orbit guides */}
        {orbits.map((o) => (
          <circle
            key={`guide-${o.r}`}
            cx={C}
            cy={C}
            r={o.r}
            fill="none"
            stroke="rgba(0,220,130,0.16)"
            strokeWidth="1"
            strokeDasharray="3 7"
          />
        ))}

        {/* rotating orbits with nodes */}
        {orbits.map((o, oi) => (
          <g key={`orbit-${oi}`} style={spinStyle(o.duration, o.reverse)}>
            {o.nodes.map((label, ni) => {
              const a = (Math.PI * 2 * ni) / o.nodes.length;
              const x = +(C + o.r * Math.cos(a)).toFixed(2);
              const y = +(C + o.r * Math.sin(a)).toFixed(2);
              return (
                <g key={label}>
                  <line x1={C} y1={C} x2={x} y2={y} stroke="rgba(0,220,130,0.07)" strokeWidth="1" />
                  <circle cx={x} cy={y} r="16" fill="#060807" stroke="rgba(0,220,130,0.5)" />
                  <circle cx={x} cy={y} r="3" fill="#00dc82" />
                  {/* counter-rotate labels so they stay upright */}
                  <g
                    style={{
                      transformOrigin: `${x}px ${y}px`,
                      animation: `${o.reverse ? "spin" : "spinRev"} ${o.duration}s linear infinite`,
                    }}
                  >
                    <text
                      x={x}
                      y={y + 30}
                      textAnchor="middle"
                      fill="rgba(232,245,238,0.75)"
                      fontSize="11"
                      fontFamily="var(--font-mono), monospace"
                    >
                      {label}
                    </text>
                  </g>
                </g>
              );
            })}
          </g>
        ))}

        {/* core hexagon */}
        <path
          d={hexPath(C, C, 52)}
          fill="rgba(0,220,130,0.08)"
          stroke="#00dc82"
          strokeWidth="1.5"
          style={{
            transformOrigin: `${C}px ${C}px`,
            animation: "corePulse 3s ease-in-out infinite",
          }}
        />
        <path
          d={hexPath(C, C, 66)}
          fill="none"
          stroke="rgba(0,220,130,0.3)"
          strokeWidth="1"
          style={spinStyle(20, false)}
        />
        <text
          x={C}
          y={C - 4}
          textAnchor="middle"
          fill="#00dc82"
          fontSize="15"
          fontWeight="700"
          fontFamily="var(--font-mono), monospace"
        >
          ctrl-plane
        </text>
        <text
          x={C}
          y={C + 16}
          textAnchor="middle"
          fill="rgba(232,245,238,0.6)"
          fontSize="10"
          fontFamily="var(--font-mono), monospace"
        >
          ● healthy
        </text>
      </svg>
    </div>
  );
}
