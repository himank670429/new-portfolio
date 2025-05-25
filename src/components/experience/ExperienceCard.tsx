import { Experience, ExperienceRole } from "@/constants/experience"; // Assuming you have the type defined here

type ExperienceCardProps = Readonly<Experience>;

export function ExperienceCard(props: ExperienceCardProps) {
  const { companyName, duration, roles, logo } = props;
  const totalRoles = roles.length;
  const renderRole = (
    role: ExperienceRole,
    index: number,
    totalRoles: number
  ) => (
    <div key={index} className={styles.roleContainer}>
      {totalRoles > 1 ? (
        <div className={styles.timeline}>
          <div className={styles.circle}></div>
          {index < totalRoles - 1 && <div className={styles.line}></div>}
        </div>
      ) : (
        <div className={styles.emptyCircle} />
      )}
      <div className={styles.roleDetails}>
        <h4 className={styles.roleTitle}>{role.title}</h4>
        <p className={styles.roleDuration}>{role.duration}</p>
        <p className={styles.roleDescription}>{role.description}</p>
      </div>
    </div>
  );
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <img
          src={logo}
          alt={`${companyName} logo`}
          className={styles.companyLogo}
        />
        <h3 className={styles.companyName}>{companyName}</h3>
      </div>
      <p className={styles.duration}>{duration}</p>
      {roles.map((role, index) => renderRole(role, index, totalRoles))}
    </article>
  );
}

const styles = {
  container: "mb-8 p-6 rounded-lg bg-background-light",
  header: "flex items-center mb-4 gap-2",
  companyName: "text-xl font-bold",
  duration: "text-text-secondary text-sm mb-4",
  companyLogo: "size-10 object-contain rounded-sm",
  roleContainer: "flex items-stretch gap-4",
  timeline: "flex flex-col items-center",
  circle: "mt-2 size-2 rounded-full bg-text-secondary",
  emptyCircle: "size-2 background-transparent",
  line: "flex-grow w-0.5 bg-text-secondary my-2 translate-y-1",
  roleDetails: "flex-1 pb-6",
  roleTitle: "text-lg font-semibold text-text-primary",
  roleDuration: "text-text-secondary text-sm mb-1",
  roleDescription: "text-text-primary",
};
