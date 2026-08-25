import { profile } from "@/data/portfolio";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className={styles.panel}>
        <div className={styles.left}>
          <span className="eyebrow">Get In Touch</span>
          <h2 className={styles.title}>Next stop: your project.</h2>
          <p className={styles.lede}>
            Open to web development, digital marketing and content-production
            work in the travel and hospitality space — or anything adjacent.
          </p>
          <a href={`mailto:${profile.email}`} className={styles.primaryBtn}>
            {profile.email}
          </a>
        </div>

        <div className={styles.board}>
          <div className={styles.boardRow}>
            <span className={styles.boardKey}>Phone</span>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className={styles.boardValue}>
              {profile.phone}
            </a>
          </div>
          <div className={styles.boardRow}>
            <span className={styles.boardKey}>LinkedIn</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.boardValue}
            >
              {profile.linkedinLabel}
            </a>
          </div>
          <div className={styles.boardRow}>
            <span className={styles.boardKey}>Location</span>
            <span className={styles.boardValue}>{profile.address}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
