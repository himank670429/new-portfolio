import {
  Navs,
  Nav,
  headerIcons,
  HeaderIconType,
} from "@/constants/defaultValues";
import { useTheme } from "@/hooks";

export function Header() {
  const { toggleTheme } = useTheme();

  function renderNavLink(item: Nav) {
    return (
      <a href={item.link} key={item.label}>
        <span className={styles.navText}>{item.label}</span>
      </a>
    );
  }

  function renderHeaderIconButton(item: HeaderIconType) {
    return (
      <a
        target="_blank"
        className={styles.iconButton}
        href={item.url}
        key={item.label}
      >
        <img
          className={styles.icon}
          alt={`${item.label}-logo`}
          src={item.src}
        />
      </a>
    );
  }

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <header className={styles.header}>
      {/* logo */}
      <a href="/" >
        <img alt="logo" className={styles.logo} src="/icons/logo/logo.svg" />
      </a>

      {/* nav link */}
      <nav className={styles.navs}>{Navs.map(renderNavLink)}</nav>

      {/* header icons button */}
      <div className={styles.iconsWrapper}>
        {/* linkedin and github icon button */}
        {headerIcons.map(renderHeaderIconButton)}

        {/* theme toggle button */}
        <button className={styles.iconButton} onClick={handleThemeToggle}>
          <img
            className={styles.icon}
            alt={"#theme-toggle-btn"}
            src={require("@/assets/icons/sun.svg")}
          />
        </button>
      </div>
    </header>
  );
}

const styles = {
  header:
    "flex gap-4 px-16 py-8 items-center border-b-[1px] border-background-light",

  logo: "w-[44px] h-[50px]",
  navs: "flex gap-4 mx-auto gap-16",
  navText: "font-mono text-text-primary",

  iconButton:
    "size-10 bg-background-light flex items-center justify-center cursor-pointer rounded-full",
  icon: "size-4",
  iconsWrapper: "flex gap-2 gap-4",
};
