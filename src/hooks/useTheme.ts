import { ThemeContextType, ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export function useTheme() {
  const { theme, toggleTheme } = useContext<ThemeContextType>(ThemeContext);
  return [theme, toggleTheme];
}
