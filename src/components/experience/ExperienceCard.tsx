import { Experience, ExperienceRole } from '@/constants/experience'; // Assuming you have the type defined here

type ExperienceCardProps = Readonly<Experience>;

const renderRole = (role: ExperienceRole, index: number, totalRoles: number) => (
  <div key={index} className={styles.roleContainer}>
    <div className={styles.timeline}>
      <div className={styles.circle}></div>
      {index < totalRoles - 1 && <div className={styles.line}></div>}
    </div>
    <div className={styles.roleDetails}>
      <h4 className={styles.roleTitle}>{role.title}</h4>
      <p className={styles.roleDuration}>{role.duration}</p>
      <p className={styles.roleDescription}>{role.description}</p>
    </div>
  </div>
);

export function ExperienceCard(props: ExperienceCardProps) {
  const {companyName, duration, roles} = props;
  const totalRoles = roles.length;

  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.companyName}>{companyName}</h3>
      <p className={styles.duration}>{duration}</p>
      {roles.map((role, index) => renderRole(role, index, totalRoles))}
    </div>
  );
};

const styles = {
  cardContainer: 'mb-8',
  companyName: 'text-xl font-bold mb-2',
  duration: 'text-gray-600 text-sm mb-4',
  roleContainer: 'flex items-start mb-6',
  timeline: 'flex flex-col items-center mr-4',
  circle: 'w-3 h-3 rounded-full bg-gray-400',
  line: 'flex-grow w-px bg-gray-400 my-1',
  roleDetails: 'flex-1',
  roleTitle: 'text-lg font-semibold',
  roleDuration: 'text-gray-600 text-sm mb-1',
  roleDescription: 'text-gray-800',
};