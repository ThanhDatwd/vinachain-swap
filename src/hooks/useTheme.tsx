"use client";

import { ThemeCtx } from "@/providers/ThemeProvider";
import { useContext } from "react";

export const useTheme = () => {
  const { theme, toggleTheme, changeTheme } = useContext(ThemeCtx);

  return {
    theme,
    toggleTheme,
    changeTheme
  };
};
