import { CSSProperties } from "react";

export function AnimatedLoadingLogo() {
  return (
    <div className="[&>div]:relative rotate-[21deg] gap-[2px] h-7 self-center flex justify-center">
      <div style={styles.delay_0} className="logo-block top-0" />
      <div className="gap-[2px] -translate-y-[8px] flex flex-col">
        <div style={styles.delay_1} className="logo-block" />
        <div style={styles.delay_1} className="logo-block" />
      </div>
      <div className="gap-[2px] -translate-y-[3px] flex flex-col">
        <div style={styles.delay_2} className="logo-block" />
        <div style={styles.delay_2} className="logo-block" />
      </div>
      <div
        style={styles.delay_7}
        className="logo-block translate-y-[58%]"
      />
    </div>
  );
}

type AnimatedLogoStyleType = {
  delay_0: CSSProperties;
  delay_1: CSSProperties;
  delay_2: CSSProperties;
  delay_7: CSSProperties;
};
const styles: AnimatedLogoStyleType = {
  delay_0: {
    animationDelay: "0s",
  },
  delay_1: {
    animationDelay: "0.25s",
  },
  delay_2: {
    animationDelay: "0.5s",
  },
  delay_7: {
    animationDelay: "1.75s",
  },
};
