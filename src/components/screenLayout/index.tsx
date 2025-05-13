import { ReactNode } from "react";

export function ScreenLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div className={styles.container}>{children}</div>;
}

const styles = {
  container: "bg-background h-screen w-screen",
};
