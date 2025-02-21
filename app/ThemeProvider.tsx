"use client"; // This makes it a Client Component

import { useEffect } from "react";

export default function ThemeProvider() {
  useEffect(() => {
    const userPrefersDark = localStorage.getItem("theme") === "dark";

    if (userPrefersDark || !localStorage.getItem("theme")) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return null; // No UI is rendered, just logic for managing dark mode
}
