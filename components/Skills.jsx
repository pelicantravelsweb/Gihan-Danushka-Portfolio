import { skillGroups, keySkills } from "@/data/portfolio";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="sectionHead">
        <span className="eyebrow">Toolkit</span>
        <h2 className="sectionTitle">TECHNICAL SKILLS</h2>
        <p className="sectionLede">
          Web development, marketing, visual production and financial rigor —
          the toolset behind every project below.
        </p>
      </div>

      <div className={styles.layout}>
        <div className={styles.groups}>
          {skillGroups.map((g) => (
            <div key={g.title} className={styles.group}>
              <h3 className={styles.groupTitle}>{g.title}</h3>
              <ul className={styles.groupList}>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.keySkills}>
          <h3 className={styles.groupTitle}>Core capabilities</h3>
          <div className={styles.chips}>
            {keySkills.map((s) => (
              <span key={s} className={styles.chip}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
