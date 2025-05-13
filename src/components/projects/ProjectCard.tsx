type ProjectCardProps = Readonly<{
  icon: string;
  title: string;
  description: string;
  readMoreLink: string;
}>;

function ProjectCard(props: ProjectCardProps) {
  const { icon, title, description, readMoreLink } = props;

  return (
    <div className="bg-background-light rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <div className="flex items-center mb-4">
        {/* Replace with actual icon rendering, e.g., <img> or <svg> */}
        <img src={icon} alt={`${title} icon`} className="w-10 h-10 mr-4" />
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
      </div>
      <p className="text-text-secondary mb-4">{description}</p>
      <a href={readMoreLink} className="text-text-highlight hover:underline">
        Read More
      </a>
    </div>
  );
}

export default ProjectCard;