import { v4 as uuidv4 } from "uuid";
import { projects } from "@/constants/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PROJECT } from "@/constants/keys";
type Project = {
  icon: string;
  title: string;
  description: string;
  readMoreLink: string;
};

export function Projects() {
  return (
    <section id={PROJECT}>
      <SectionHeading title="Projects" />
      <div className={styles.projects}>
        {projects.map((project: Project) => (
          <ProjectCard
            key={uuidv4()}
            icon={project.icon}
            title={project.title}
            description={project.description}
            readMoreLink={project.readMoreLink}
          />
        ))}
      </div>
    </section>
  );
}

const styles = {
  projects: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
};
