type TagPropType = Readonly<{
  tag: string;
  icon: NodeRequire | null;
}>;
export function Tag(props: TagPropType) {
  const { icon, tag } = props;
  return (
    <div className="bg-background-light flex gap-2 w-fit px-3 py-1 rounded-full">
      {icon && <img src={icon as any} alt={`${tag}-icon`} />}
      <p className="text-text-primary">{tag}</p>
    </div>
  );
}
