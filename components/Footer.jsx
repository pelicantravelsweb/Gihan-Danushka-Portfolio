import { profile } from "@/data/portfolio";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.mark}>GD</span>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <div className={styles.links}>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
