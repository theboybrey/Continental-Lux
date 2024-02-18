"use client";

import Navbar from "./components/Navbar";
import SwitchThemeButton from "./components/SwitchThemeButton";
import React, { useState } from "react";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  return (
    <main className={isDarkTheme ? "dark" : "light"}>
      <div className='px-6 py-3 md:px-16 md:py-5'>
        <Navbar />
      </div>
    </main>
  );
}
