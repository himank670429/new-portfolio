// context for Theme
import {
  useState,
  createContext,
  useEffect,
  PropsWithChildren,
} from "react";

export type ThemeContextType = {
  theme: boolean;
  toggleTheme: () => void;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: false,
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState(true);
  // false -> light
  // true -> dark
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => !prev);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}