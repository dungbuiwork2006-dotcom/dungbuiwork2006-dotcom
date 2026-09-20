"use client";
import { useEffect } from "react";
export default function Motion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.06 });
    elements.forEach(el => { el.classList.add("reveal-ready"); observer.observe(el); });
    const portrait = document.querySelector<HTMLElement>(".portrait-media");
    let scheduled = false;
    const update = () => {
      scheduled = false;
      if (!portrait || window.innerWidth < 850) return;
      const bounds = portrait.getBoundingClientRect();
      if (bounds.top < window.innerHeight && bounds.bottom > 0) portrait.style.setProperty("--parallax", Math.max(-12, Math.min(12, (window.innerHeight / 2 - bounds.top - bounds.height / 2) * 0.035)) + "px");
    };
    const scroll = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } };
    window.addEventListener("scroll", scroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", scroll); elements.forEach(el => el.classList.remove("reveal-ready")); };
  }, []);
  return null;
}

