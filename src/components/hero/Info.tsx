import { MY_DESCRIPTION, MY_NAME } from "@/constants/defaultValues";
import { Tag } from "./tag";
import { SKILLS, SkillType } from "@/constants/skills";
import { v4 as uuid } from "uuid";

export function Info() {
  function renderSkillTag(item: SkillType): JSX.Element {
    return <Tag key={uuid()} icon={item.icon} tag={item.label} />;
  }

  return (
    <div className={styles.container}>
      <span className={styles.hightedText}>hi my name is</span>
      <h2 className={styles.nameText}>{MY_NAME},</h2>
      <p className={styles.descriptionText}>{MY_DESCRIPTION}</p>

      {/* map out skills */}
      <div className={styles.skilsWrapper}>{SKILLS.map(renderSkillTag)}</div>
    </div>
  );
}

const styles = {
  container: "font-mono ",
  hightedText: "text-text-highlight text-xl font-semibold",
  nameText: "text-[45px] text-text-primary",
  descriptionText: "text-text-secondary max-w-[560px]",
  skilsWrapper: "mt-4 flex max-w-[560px] flex-wrap gap-2",
};
