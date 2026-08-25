import Image from "next/image";
import SplitFlap from "./SplitFlap";
import { profile } from "@/data/portfolio";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>

          <h1 className={styles.name}>
            <SplitFlap text="GIHAN" />
            <br />
            <SplitFlap text="DANUSHKA" delay={260} />
          </h1>

          <p className={styles.role}>{profile.role}</p>
          <p className={styles.tagline}>{profile.tagline}</p>

          <div className={styles.actions}>
            <a href="#work" className={styles.primaryBtn}>
              View the work
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Get in touch
            </a>
          </div>


        </div>

        <div className={styles.portrait}>
          <div className={styles.portraitFrame}>
            <div className={styles.portraitImgWrap}>
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="340px"
                className={styles.portraitImg}
              />
            </div>
            <div className={styles.coords}>{profile.coords}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
