import { socialPosts, videoArtworks } from "@/data/portfolio";
import Gallery from "./Gallery";
import styles from "./Creative.module.css";

export default function Creative() {
  return (
    <section id="creative" className="section">
      <div className="sectionHead">
        <span className="eyebrow">Creative Work</span>
        <h2 className="sectionTitle">Social posts &amp; artworks.</h2>
        <p className="sectionLede">
          Designed to keep brand voice consistent while carrying a clear
          message across every platform.
        </p>
      </div>

      <div className={styles.block}>
        <h3 className={styles.blockTitle}>Social Media Post &amp; Artwork Creation</h3>
        <Gallery items={socialPosts} variant="square" />
      </div>

      <div className={styles.block}>
        <h3 className={styles.blockTitle}>Artworks for Videos</h3>
        <Gallery items={videoArtworks} variant="wide" />
      </div>
    </section>
  );
}
