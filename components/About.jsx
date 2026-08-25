import { profile, stats } from "@/data/portfolio";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className={styles.wrap}>
        <div className={styles.text}>
          <span className="eyebrow">About</span>
          <h2 className={styles.title}>
            Seven years in tourism operations, now spent building the tools that run them.
          </h2>
          <p className={styles.summary}>{profile.summary}</p>
        </div>

        <div className={styles.pass}>
          <div className={styles.passTop}>
            <span className={styles.passLabel}>Boarding Pass</span>
            <span className={styles.passCode}>GD · DME</span>
          </div>

          <div className={styles.passRoute}>
            <div>
              <span className={styles.passEyebrow}>Passenger</span>
              <strong>{profile.name}</strong>
            </div>
            <div className={styles.passPlane}>✈</div>
            <div>
              <span className={styles.passEyebrow}>Role</span>
              <strong>{profile.role}</strong>
            </div>
          </div>

          <div className={styles.perf} aria-hidden="true" />

          <div className={styles.statGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.barcode} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
