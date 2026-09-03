import SectionTitle from "../SectionTitle";
import ProjectCard from "../ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-8 py-24"
    >
      <SectionTitle title="Projects" />

      <div className="grid gap-8 md:grid-cols-2">
        
        {projects.map((project) => (
          <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          githubUrl={project.githubUrl}
          image={project.image}/>
        ))}
      </div>
    </section>
  );
}