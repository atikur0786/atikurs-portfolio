import React, { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

type Theme = "light" | "dark" | "system";

const Footer = () => {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800 bg-surface text-center transition-colors">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        {/* Theme Switcher */}
        <div className="flex items-center p-1 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700">
          <button
            onClick={() => toggleTheme("system")}
            className={`p-2 rounded-full transition-all ${
              theme === "system"
                ? "bg-white dark:bg-neutral-600 text-primary shadow-sm"
                : "text-secondary hover:text-primary"
            }`}
            aria-label="System Theme"
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => toggleTheme("light")}
            className={`p-2 rounded-full transition-all ${
              theme === "light"
                ? "bg-white dark:bg-neutral-600 text-primary shadow-sm"
                : "text-secondary hover:text-primary"
            }`}
            aria-label="Light Theme"
          >
            <Sun className="w-4 h-4" />
          </button>
          <button
            onClick={() => toggleTheme("dark")}
            className={`p-2 rounded-full transition-all ${
              theme === "dark"
                ? "bg-white dark:bg-neutral-600 text-primary shadow-sm"
                : "text-secondary hover:text-primary"
            }`}
            aria-label="Dark Theme"
          >
            <Moon className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm text-secondary">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
