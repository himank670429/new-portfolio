import { ThemeContextType, ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export function useTheme() {
  return useContext<ThemeContextType>(ThemeContext);
}
