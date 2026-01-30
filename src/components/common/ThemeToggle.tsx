"use client";

import React, { useEffect, useState } from "react";

type ThemeToggleProps = {
  className?: string;
};

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const [activeMode, setActiveMode] = useState<string>("light");

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode) {
      setActiveMode(storedMode);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (activeMode === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      localStorage.setItem("mode", activeMode);
    }
  }, [activeMode]);

  const toggleMode = () => {
    setActiveMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      className={className}
      onClick={toggleMode}
      aria-label="Toggle color mode"
    >
      {activeMode === "dark" ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21 15.5a9 9 0 1 1-12.5-12 8 8 0 1 0 12.5 12z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" fill="currentColor" />
          <path
            d="M12 2.75v2.5M12 18.75v2.5M21.25 12h-2.5M5.25 12h-2.5M18.6 5.4l-1.77 1.77M7.17 16.83 5.4 18.6M18.6 18.6l-1.77-1.77M7.17 7.17 5.4 5.4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
