import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/content";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl">
          Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              url={project.url}
              image={project.image}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
