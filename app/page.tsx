"use client";

import EstateBrokerage from "./components/EstateBrokerage";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import RegisteringMethods from "./components/RegisteringMethods";
import SwitchThemeButton from "./components/SwitchThemeButton";
import NewsletterSection from "./components/NewsletterSection";
import React, { useState } from "react";
import PropertyListing from "./components/PropertyListing";
import Advertisement from "./components/Advertisement";
import Footer from "./components/Footer";
import PostFooterDevMode from "./components/PostFooterDevMode";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  return (
    <main className={isDarkTheme ? "dark" : "light"}>
      <div className="px-6 py-3 md:px-16 md:py-5">
        <Navbar />
        <HeroSection />
        <RegisteringMethods />
        <Projects />
        <EstateBrokerage />
        <NewsletterSection />
        <PropertyListing />
        <Advertisement />
        <Footer />

        {/* Developers Details */}
        <PostFooterDevMode />
      </div>
    </main>
  );
}
