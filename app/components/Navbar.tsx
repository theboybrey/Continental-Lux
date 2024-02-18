import React, { useState, useEffect } from "react";
import SwitchThemeButton from "./SwitchThemeButton";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${
        isMenuOpen
          ? "flex md:flex-row  items-center md:px-8 h-[80px] navbar rounded-full"
          : "flex md:flex-row items-center md:justify-between md:px-8 h-[80px] bg-[#fafafa] rounded-full md:mb-2"
      }`}
    >
      {/* Logo */}
      <span className="whitespace-nowrap font-CabinetGrotesk md:text-2xl mb-4 md:mb-0 ">
        Luxville Apartments
      </span>

      {/* Menu Icon or Quit Icon based on menu state */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? (
          // Quit Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-500 absolute right-6 top-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Menu Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </div>

      {/* Menu Items */}
      <ul
        className={`${
          isMenuOpen
            ? "flex flex-col z-10 h-screen w-full items-center gap-4 md:flex-row md:justify-center md:absolute md:inset-0 md:bg-white md:text-black"
            : "hidden md:flex md:justify-between md:items-center bg-white md:h-[50px] md:px-8  md:rounded-full w-[571px] md:gap-6 md:ml-12"
        }`}
      >
        <li>
          <Link href={"/#about"} onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link href={"/#projects"} onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link href={"/#agents"} onClick={closeMenu}>
            Agents
          </Link>
        </li>
        <li>
          <Link href={"/#services"} onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link href={"/#listings"} onClick={closeMenu}>
            Listings
          </Link>
        </li>

        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </li>
      </ul>

      <span className={`${isMenuOpen ? "hidden" : "md:ml-32 md:mr-28"}`}>
        <Link href={"/#others"}>Other Services</Link>
      </span>
      
      <span className={`${isMenuOpen ? "hidden" : "md:bg-white md:py-3 md:px-6 md:h-[60px] items-center cursor-pointer justify-center flex md:-mr-4 rounded-full border "}`}>
        <Link href={"/#contact"}>Contact Us</Link>
      </span>
    </div>
  );
};

export default Navbar;
