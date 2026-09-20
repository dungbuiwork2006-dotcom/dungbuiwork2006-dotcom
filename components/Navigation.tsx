"use client";
import { useEffect, useState } from "react";
import { sections } from "../data/profile";
export default function Navigation() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => {
      let current: string = "home";
      for (const id of sections) {
        if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= 180) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <nav className="navigation" aria-label="Main navigation">
    <a href="#home" className="brand" onClick={() => setOpen(false)}>DUNG BUI<span>_</span></a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="section-menu" onClick={() => setOpen(!open)}>{open ? "CLOSE −" : "MENU +"}</button>
    <div className={`nav-links ${open ? "is-open" : ""}`} id="section-menu" onKeyDown={e => { if (e.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus(); } }}>
      {sections.map((id, i) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)}><span>0{i + 1}/</span>{id.toUpperCase()}</a>)}
    </div>
    <a className="button small nav-contact" href="#contact">LET&apos;S TALK <span>↗</span></a>
  </nav>;
}

