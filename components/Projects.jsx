import { webProjects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="sectionHead">
        <span className="eyebrow">Web Development</span>
        <h2 className="sectionTitle">Sites built for travel brands, end to end.</h2>
        <p className="sectionLede">
          Front-end design, SEO structure, and the backend plumbing —
          inquiry forms, package systems — that turns visits into leads.
        </p>
      </div>

      {webProjects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </section>
  );
}
