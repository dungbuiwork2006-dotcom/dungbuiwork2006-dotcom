"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";
import styles from "./Hero.module.css";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const coordinates = useRef<HTMLSpanElement>(null);
  const [portraitMissing, setPortraitMissing] = useState(false);
  const [planetMissing, setPlanetMissing] = useState(false);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const desktop = matchMedia("(min-width: 851px) and (hover: hover) and (pointer: fine)");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      element.style.removeProperty("--pointer-x");
      element.style.removeProperty("--pointer-y");
      element.style.removeProperty("--light-x");
      element.style.removeProperty("--light-y");
      if (coordinates.current) coordinates.current.textContent = "X: 001 / Y: 026";
    };
    const move = (event: PointerEvent) => {
      if (!desktop.matches || reduced.matches) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = element.getBoundingClientRect();
        const x = Math.max(0, Math.min(box.width, event.clientX - box.left));
        const y = Math.max(0, Math.min(box.height, event.clientY - box.top));
        element.style.setProperty("--pointer-x", ((x / box.width - 0.5) * 8) + "px");
        element.style.setProperty("--pointer-y", ((y / box.height - 0.5) * 6) + "px");
        element.style.setProperty("--light-x", x + "px");
        element.style.setProperty("--light-y", y + "px");
        if (coordinates.current) coordinates.current.textContent = "X: " + Math.round(x).toString().padStart(3, "0") + " / Y: " + Math.round(y).toString().padStart(3, "0");
      });
    };
    element.addEventListener("pointermove", move, { passive: true });
    element.addEventListener("pointerleave", reset);
    desktop.addEventListener("change", reset);
    reduced.addEventListener("change", reset);
    return () => {
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
      desktop.removeEventListener("change", reset);
      reduced.removeEventListener("change", reset);
      reset();
    };
  }, []);

  return <section id="home" ref={root} className={`hero section ${styles.hero}`}>
    <div className="hero-grid" aria-hidden="true" />
    <div className={styles.atmosphere} aria-hidden="true" />
    <svg className={styles.stars} viewBox="0 0 1000 650" preserveAspectRatio="none" aria-hidden="true">
      <g fill="currentColor"><circle cx="480" cy="125" r="1" /><circle cx="600" cy="60" r="1" /><circle cx="950" cy="370" r="1.2" /><circle cx="780" cy="170" r="1" /><circle cx="920" cy="90" r="1" /><circle cx="520" cy="410" r="1" /><circle cx="715" cy="520" r="1" /></g>
    </svg>
    {!planetMissing && <div className={styles.planet} aria-hidden="true"><Image src="/images/hình ảnh/Home/hero-planet.png.png" alt="" fill sizes="(max-width: 700px) 110vw, 65vw" onError={() => setPlanetMissing(true)} /></div>}
    <div className={styles.orbit} aria-hidden="true">
      <svg viewBox="0 0 400 400"><g className={styles.orbitLines} fill="none" stroke="currentColor" strokeWidth=".65"><ellipse cx="200" cy="200" rx="185" ry="112" transform="rotate(-30 200 200)" /><ellipse cx="200" cy="200" rx="150" ry="180" transform="rotate(40 200 200)" /><circle cx="200" cy="200" r="100" strokeDasharray="2 9" /><circle cx="353" cy="142" r="3" fill="currentColor" /><circle cx="80" cy="300" r="2" fill="currentColor" /></g></svg>
      <span className={styles.orbitPlus}>+</span><span className={styles.labelTop}>PEOPLE / DATA</span><span className={styles.labelBottom}>EXPERIENCES</span><span className={styles.labelSide}>ORBIT / 001<br />DUNG / 2026</span>
    </div>
    {!portraitMissing && <div className={styles.portrait}><Image src={profile.portrait} alt="Bùi Trí Dũng" fill priority sizes="(max-width: 700px) 85vw, 45vw" onError={() => setPortraitMissing(true)} /></div>}
    <div className={`hero-top micro ${styles.foreground}`}><span><i className="status-dot" /> CURRENTLY / LEARNING &amp; EXPLORING</span><span>PORTFOLIO / 2026</span></div>
    <div className={`hero-body ${styles.body}`}>
      <div className={styles.headline}><p className="eyebrow">// PEOPLE · DATA · CURIOSITY</p><h1>I&apos;M DŨNG.<br />STILL<br /><em>EXPLORING.</em></h1></div>
      <div className={`hero-note ${styles.note}`}><span className="micro">DESIGN × TECHNOLOGY</span><p lang="vi">Tôi thích khám phá những điều mới,<br />kết nối với con người và biến mỗi trải nghiệm thành một phần của hành trình trưởng thành.</p><a className={`text-link ${styles.talk}`} href="#contact">LET&apos;S TALK <span>↗</span></a></div>
    </div>
    <div className={`hero-bottom ${styles.foreground}`}><a href="#experiences" className="button">EXPLORE EXPERIENCES <span>↓</span></a><span className="micro">BASED IN VIETNAM<br />ALWAYS IN PROGRESS.</span><span className="micro hero-coordinate" aria-hidden="true"><span ref={coordinates}>X: 001 / Y: 026</span><br />SCROLL TO EXPLORE ↓</span></div>
  </section>;
}
