"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#systems", label: "Systems" },
  { href: "#creative", label: "Creative" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.mark}>
          <span className={styles.markBox}>GD</span>
          <span className={styles.markText}>Gihan Danushka</span>
        </a>

        <nav className={styles.links}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={styles.cta}>
          Let&apos;s talk
        </a>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className={styles.mobileMenu}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className={styles.mobileCta}>
            Let&apos;s talk
          </a>
        </nav>
      )}
    </header>
  );
}
