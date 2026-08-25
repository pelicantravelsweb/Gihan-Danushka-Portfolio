"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

export default function Gallery({ items, variant = "wide" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const close = () => setOpenIndex(null);
  const prev = (e) => {
    e?.stopPropagation();
    setOpenIndex((i) => (i - 1 + items.length) % items.length);
  };
  const next = (e) => {
    e?.stopPropagation();
    setOpenIndex((i) => (i + 1) % items.length);
  };

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex]);

  return (
    <>
      <div className={`${styles.grid} ${styles[variant]}`}>
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            className={styles.thumb}
            onClick={() => setOpenIndex(i)}
            aria-label={`Open image: ${item.caption || "photo"}`}
          >
            <Image
              src={item.src}
              alt={item.caption || ""}
              fill
              sizes="(max-width: 700px) 50vw, 320px"
              className={styles.thumbImg}
            />
            {item.caption && <span className={styles.caption}>{item.caption}</span>}
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div className={styles.overlay} onClick={close} role="dialog" aria-modal="true">
          <button className={styles.close} onClick={close} aria-label="Close">
            ✕
          </button>
          {items.length > 1 && (
            <button className={styles.navBtn + " " + styles.navPrev} onClick={prev} aria-label="Previous image">
              ‹
            </button>
          )}
          <div className={styles.stage} onClick={(e) => e.stopPropagation()}>
            <div className={styles.stageImgWrap}>
              <Image
                src={items[openIndex].src}
                alt={items[openIndex].caption || ""}
                fill
                className={styles.stageImg}
                sizes="90vw"
              />
            </div>
            {items[openIndex].caption && (
              <p className={styles.stageCaption}>{items[openIndex].caption}</p>
            )}
          </div>
          {items.length > 1 && (
            <button className={styles.navBtn + " " + styles.navNext} onClick={next} aria-label="Next image">
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
