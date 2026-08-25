import { videoProjects } from "@/data/portfolio";
import VideoCard from "./VideoCard";
import styles from "./VideoProjects.module.css";

export default function VideoProjects() {
  return (
    <section id="video" className="section">
      <div className="sectionHead">
        <span className="eyebrow">Video Work</span>
        <h2 className="sectionTitle">Campaigns, events and stories in motion.</h2>
        <p className="sectionLede">
          From editing-driven brand campaigns to on-location shooting and direction,
          these projects reflect the range of visual storytelling work I deliver.
        </p>
      </div>

      <div className={styles.grid}>
        {videoProjects.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </section>
  );
}
