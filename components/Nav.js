"use client";

const links = [
  ["PIPELINE", "#pipeline"],
  ["SKILLS", "#skills"],
  ["EXPERIENCE", "#experience"],
  ["CONTACT", "#contact"],
];

export default function Nav() {
  return (
    <nav
      className="fade-up"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 32px",
        background: "rgba(6, 8, 7, 0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <a href="#" className="mono" style={{ fontSize: 15, fontWeight: 700, letterSpacing: 2 }}>
        <span style={{ color: "var(--accent)" }}>~/</span>NS
      </a>
      <div className="mono" style={{ display: "flex", gap: 28 }}>
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            style={{
              fontSize: 12,
              letterSpacing: 2,
              color: "var(--muted)",
              transition: "color 0.25s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
