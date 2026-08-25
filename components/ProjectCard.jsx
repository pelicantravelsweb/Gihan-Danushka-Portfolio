import Image from "next/image";
import Gallery from "./Gallery";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, reverse = false }) {
  const isLive = project.status.toLowerCase() === "live";

  return (
    <article className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.body}>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.summary}>{project.summary}</p>
        <p className={styles.details}>{project.details}</p>

        <div className={styles.tags}>
          {project.tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>

        {project.url && (
          <a href={project.url} target="_blank" rel="noreferrer" className={styles.visitLink}>
            Visit website ↗
          </a>
        )}
      </div>

      <div className={styles.visuals}>
        <div className={styles.heroWrap}>
          <Image
            src={project.hero}
            alt={`${project.name} — homepage preview`}
            fill
            sizes="(max-width: 860px) 100vw, 900px"
            className={styles.heroImg}
          />
          <span className={`${styles.status} ${isLive ? styles.live : styles.dev}`}>
            <span className={styles.statusDot} />
            {project.status}
          </span>
        </div>

        {project.shots && project.shots.length > 0 && (
          <div className={styles.shots}>
            <Gallery items={project.shots} variant="wide" />
          </div>
        )}
      </div>
    </article>
  );
}
