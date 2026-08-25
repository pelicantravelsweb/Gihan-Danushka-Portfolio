"use client";

import { useState } from "react";
import styles from "./VideoCard.module.css";

export default function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <article className={styles.card}>
      <div className={styles.frame}>
        {playing ? (
          <iframe
            className={styles.iframe}
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className={styles.playBtn}
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${video.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={thumb} alt="" className={styles.thumbImg} loading="lazy" />
            <span className={styles.scrim} />
            <span className={styles.playIcon}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.headRow}>
          <h3 className={styles.title}>{video.title}</h3>
          <span className={styles.role}>{video.role}</span>
        </div>
        <p className={styles.desc}>{video.description}</p>
      </div>
    </article>
  );
}
