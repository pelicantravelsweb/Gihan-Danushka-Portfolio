import { experience, education, languages } from "@/data/portfolio";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="sectionHead">
        <span className="eyebrow">Route History</span>
        <h2 className="sectionTitle">Where the journey went.</h2>
        <p className="sectionLede">
          From auditing ledgers to running digital campaigns — each stop
          added a skill the last one didn&apos;t have.
        </p>
      </div>

      <div className={styles.layout}>
        <ol className={styles.timeline}>
          {experience.map((job, i) => (
            <li key={i} className={styles.stop}>
              <div className={styles.node}>
                <span className={styles.nodeDot} />
                {i < experience.length - 1 && <span className={styles.nodeLine} />}
              </div>
              <div className={styles.stopCard}>
                <div className={styles.stopHead}>
                  <div>
                    <h3 className={styles.role}>{job.role}</h3>
                    <p className={styles.company}>
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className={styles.period}>{job.period}</span>
                </div>
                <ul className={styles.points}>
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <aside className={styles.side}>
          <div className={styles.sideBlock}>
            <h3 className={styles.sideTitle}>Education</h3>
            <ul className={styles.eduList}>
              {education.map((e) => (
                <li key={e.degree}>
                  <strong>{e.degree}</strong>
                  <span>{e.school}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sideBlock}>
            <h3 className={styles.sideTitle}>Languages</h3>
            <ul className={styles.langList}>
              {languages.map((l) => (
                <li key={l.name}>
                  <span>{l.name}</span>
                  <span className={styles.langLevel}>{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
