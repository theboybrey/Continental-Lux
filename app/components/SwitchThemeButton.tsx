"use client";
import React, { useState, useEffect } from "react";

type Props = {};

const SwitchThemeButton = (props: Props) => {

  const savedTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const [theme, setTheme] = useState(savedTheme || systemTheme);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
    setThemeLoaded(true);
  }, [theme]);

  useEffect(() => {
    if (themeLoaded) {
      localStorage.setItem("theme", theme);
      document.body.className = theme;
    }
  }, [theme, themeLoaded]);

  return (
    <div className="">
      <button onClick={toggleTheme}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 md:my-2 text-gray-500"
        >
          {theme === "dark" ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />

          )}
        </svg>
      </button>
    </div>
  );
};

export default SwitchThemeButton;

