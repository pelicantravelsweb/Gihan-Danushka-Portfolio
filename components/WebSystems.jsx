import { webSystems } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function WebSystems() {
  return (
    <section id="systems" className="section">
      <div className="sectionHead">
        <span className="eyebrow">Web Systems</span>
        <h2 className="sectionTitle">Beyond the brochure site.</h2>
        <p className="sectionLede">
          Booking engines, admin dashboards and database-backed platforms —
          the operational layer behind the marketing site.
        </p>
      </div>

      {webSystems.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </section>
  );
}
