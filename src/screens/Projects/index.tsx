import { v4 as uuidv4 } from 'uuid';
import { projects } from '@/constants/projects';
import ProjectCard from '@/components/projects/ProjectCard';

type Project = {
  icon: string;
  title: string;
  description: string;
  readMoreLink: string;
};

export function Projects() {
  return (
    <section id="projects" className="py-12 bg-background text-text-primary">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-text-highlight">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}

export default Projects;