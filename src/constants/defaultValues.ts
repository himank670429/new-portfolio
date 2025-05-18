// default values for portfolio
import { HOME, PROJECT, EXPERIENCE } from "./keys";

export const splashScreenDuration = 3;

export type Nav = {
  label: string;
  link: string;
};
export const Navs: Nav[] = [
  { label: "Home", link: `#${HOME}` },
  { label: "Exprience", link: `#${EXPERIENCE}` },
  { label: "Projects", link: `#${PROJECT}` },
  { label: "Contact", link: "#" },
];

export type HeaderIconType = {
  src: string;
  label: string;
  url: string;
};
export const headerIcons: HeaderIconType[] = [
  {
    label: "LinkedIn",
    src: require("@/assets/icons/linkedin.svg"),
    url: "https://www.linkedin.com/in/himank-singh-01a69430a/",
  },
  {
    label: "Github",
    src: require("@/assets/icons/github.svg"),
    url: "https://github.com/himank670429/himank670429",
  },
];

export const MY_NAME = "Himank Singh";

export const MY_DESCRIPTION =
  "I'm a Full-Stack Developer with experience in building scalable web applications, internal software solutions, and AI-driven platforms.";
