type ProjectCardProps = Readonly<{
  icon: string;
  title: string;
  description: string;
  readMoreLink: string;
}>;

export function ProjectCard(props: ProjectCardProps) {
  const { icon, title, description, readMoreLink } = props;

  return (
    <div className={styles.container}>
      {/* header */}
      <div className={styles.header}>
        <img src={icon} alt={`${title} icon`} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
      </div>

      {/* body */}
      <p className={styles.description}>{description}</p>

      {/* footer */}
      <a href={readMoreLink} className={styles.link}>
        Read More
      </a>
    </div>
  );
}

const styles = {
  container:
    "flex flex-col bg-background-light rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform",
  header: "flex items-center mb-4",
  image: "size-10 mr-4 rounded-sm",
  title: "text-xl font-bold text-text-primary flex-no-wrap",
  description: "text-text-secondary mb-4 grow",
  link: "text-text-highlight hover:underline",
};
