export type SkillType = {
  label: string;
  icon: NodeRequire | null;
};

export const SKILLS: SkillType[] = [
  {
    label: "React",
    icon: require("@/assets/icons/react.svg"),
  },
  {
    label: "React Native",
    icon: require("@/assets/icons/react.svg"),
  },
  {
    label: "Tailwindcss",
    icon: require("@/assets/icons/tailwindcss.svg"),
  },
  {
    label: "Redux",
    icon: null,
  },
  {
    label: "Node.js",
    icon: require("@/assets/icons/nodejs.svg"),
  },
  {
    label: "Express",
    icon: require("@/assets/icons/nodejs.svg"),
  },
  {
    label: "python",
    icon: require("@/assets/icons/python.svg"),
  },
  {
    label: "Django",
    icon: require("@/assets/icons/django.svg"),
  },
  {
    label: "Firebase",
    icon: require("@/assets/icons/firebase.svg"),
  },
] as const;
