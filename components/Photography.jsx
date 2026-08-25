import { photography } from "@/data/portfolio";
import Gallery from "./Gallery";

export default function Photography() {
  return (
    <section id="photography" className="section">
      <div className="sectionHead">
        <span className="eyebrow">Photography</span>
        <h2 className="sectionTitle">Visual storytelling, on location.</h2>
        <p className="sectionLede">
          A selection of personal and client photography — composition and
          light, captured for digital platforms, brands and campaigns.
        </p>
      </div>

      <Gallery items={photography} variant="portrait" />
    </section>
  );
}
