"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SplitFlap.module.css";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 /.-";

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

/**
 * Airport departure-board style flip text. Each character cycles through
 * random glyphs before settling on its final value, staggered left to right.
 */
export default function SplitFlap({ text, as: Tag = "span", delay = 0, className = "" }) {
  const chars = text.split("");
  const [display, setDisplay] = useState(chars.map(() => " "));
  const [settled, setSettled] = useState(chars.map(() => false));
  const reduceMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    if (reduceMotion.current) {
      setDisplay(chars);
      setSettled(chars.map(() => true));
      return;
    }

    const timers = [];
    chars.forEach((ch, i) => {
      const startAt = delay + i * 45;
      const spins = 6 + Math.floor(Math.random() * 5);
      let count = 0;

      const spin = () => {
        count += 1;
        setDisplay((prev) => {
          const next = [...prev];
          next[i] = ch === " " ? " " : randomChar();
          return next;
        });
        if (count < spins) {
          timers.push(setTimeout(spin, 45 + count * 4));
        } else {
          setDisplay((prev) => {
            const next = [...prev];
            next[i] = ch;
            return next;
          });
          setSettled((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }
      };

      timers.push(setTimeout(spin, startAt));
    });

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <Tag className={`${styles.flap} ${className}`} aria-label={text}>
      {display.map((ch, i) => (
        <span
          key={i}
          className={`${styles.card} ${ch === " " ? styles.space : ""} ${
            settled[i] ? styles.settled : ""
          }`}
          aria-hidden="true"
        >
          {ch}
        </span>
      ))}
    </Tag>
  );
}
