import { EXPERIENCE, Experience as ExperienceType} from '@/constants/experience';
import { EXPERIENCE as EXPERIENCE_KEY } from '@/constants/keys';
import {SectionHeading} from '@/components/common/SectionHeading';
import {ExperienceCard} from '@/components/experience/ExperienceCard';
import {v4 as uuid} from 'uuid';

export function Experience () {
  const renderExperienceCards = (item:ExperienceType) => {
    return  <ExperienceCard key={uuid()} {...item} />
  };

  return (
    <section id={EXPERIENCE_KEY} className={styles.section}>
      <SectionHeading title="Experience" />
      <div className={styles.container}>
        {EXPERIENCE.map(renderExperienceCards)}
      </div>
    </section>
  );
};

const styles = {
  section: 'py-12',
  container: 'mx-auto px-4',
};
