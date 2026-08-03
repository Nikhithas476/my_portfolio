"use client";
import { useEffect, useRef } from "react";

/*
 * Full-bleed animated infrastructure topology:
 * drifting nodes, proximity links, data packets traveling
 * along links, and mouse-reactive attraction. Single accent color.
 */
export default function NetworkCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h, dpr;
    const mouse = { x: -9999, y: -9999 };
    const ACCENT = "0, 220, 130";
    const LINK_DIST = 160;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const COUNT = Math.min(90, Math.floor((w * h) / 16000));
    const nodes = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8,
      pulse: Math.random() * Math.PI * 2,
    }));

    // packets that travel along active links
    const packets = [];
    const spawnPacket = () => {
      const a = nodes[(Math.random() * nodes.length) | 0];
      let best = null;
      let bd = LINK_DIST;
      for (const b of nodes) {
        if (b === a) continue;
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < bd) {
          bd = d;
          best = b;
        }
      }
      if (best) packets.push({ a, b: best, t: 0, speed: 0.008 + Math.random() * 0.012 });
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    let frame = 0;
    const tick = () => {
      frame++;
      ctx.clearRect(0, 0, w, h);

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.35;
            ctx.strokeStyle = `rgba(${ACCENT}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        n.pulse += 0.03;
        const glow = 0.45 + Math.sin(n.pulse) * 0.25;

        // mouse attraction
        const dm = Math.hypot(mouse.x - n.x, mouse.y - n.y);
        if (dm < 220) {
          n.vx += ((mouse.x - n.x) / dm) * 0.012;
          n.vy += ((mouse.y - n.y) / dm) * 0.012;
        }

        n.x += n.vx;
        n.y += n.vy;
        n.vx *= 0.995;
        n.vy *= 0.995;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        ctx.fillStyle = `rgba(${ACCENT}, ${glow})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // packets
      if (frame % 30 === 0 && packets.length < 14) spawnPacket();
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.t += p.speed;
        if (p.t >= 1) {
          packets.splice(i, 1);
          continue;
        }
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.fillStyle = `rgba(${ACCENT}, 0.95)`;
        ctx.shadowColor = `rgba(${ACCENT}, 0.9)`;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.8,
      }}
    />
  );
}
