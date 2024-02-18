"use client";

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import RegisteringMethods from "./components/RegisteringMethods";
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
        <HeroSection/>
        <RegisteringMethods/>
      </div>
    </main>
  );
}
