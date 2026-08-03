"use client";
import { useEffect, useRef } from "react";

/*
 * Scroll-reveal wrapper. Content is visible by default (no-JS safe);
 * on mount, elements below the viewport get the `pre` class, which is
 * removed when they intersect — CSS transitions do the rest.
 */
export default function Reveal({ children, delay = 0, style, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) return; // already on screen — skip
    el.classList.add("pre");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.remove("pre");
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal" style={{ "--d": `${delay}s`, ...style }} {...rest}>
      {children}
    </div>
  );
}
