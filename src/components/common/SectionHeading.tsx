type SectionHeadingProp = Readonly<{
  title: string;
}>;
export function SectionHeading(props: SectionHeadingProp) {
  const { title } = props;
  return (
    <h1 className={styles.heading}>{title}</h1>
  );
}

const styles = {
    heading: "text-3xl font-bold mb-8 text-text-highlight"
}