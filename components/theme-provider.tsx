"use client";

import { ThemeProvider as ThemeProviderComponent  } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <ThemeProviderComponent {...props}>{children}</ThemeProviderComponent>
  );
}