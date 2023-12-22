"use client";


import Navlink from "@ui/Navlink";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", href: "/" , active: false},
  { name: "Blog", href: "/blog", active: false },
  { name: "Connect", href: "/connect", active: false }
];

const NavbarLogo = () => {
  return (
    <span className="text-2xl py-4 font-bold text-gray-500 dark:text-gray-400">
      <text className="">it&apos;s vinayak </text>
    </span>
  );
};

const NavbarButton = ({ actionFunction, actionType }: any) => {
  return (
    <button
      className="rounded-lg focus:outline-none focus:shadow-outline block text-2xl text-gray-500 dark:text-gray-400 transition duration-150 ease-in-out p-4"
      onClick={actionFunction}
      tabIndex={0}
    >
      {actionType ? (
        <>
          <span className="z-50 ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none ">
            <FaTimes />
            <span className="sr-only md:not-sr-only">Close</span>
          </span>
        </>
      ) : (
        <>
          <FaBars />
          <span className="sr-only md:not-sr-only">Open</span>
        </>
      )}
    </button>
  );
};

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => setShowNav(!showNav);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex z-40 align-middle md:justify-center items-center fixed top-0 px-4 bg-white dark:bg-[#111010] dark:border-[#24222254] w-screen md:w-auto ${isScrolled ? "shadow-md" : ""
        }`}
    >
      <div className="md:hidden w-screen flex flex-row justify-between align-middle">
        <NavbarLogo />
        <NavbarButton actionFunction={toggleNav} actionType={showNav} />
      </div>
      <div className="hidden md:block">
        <Navlink links={links} classNameProps={'flex flex-row'} />
      </div>
      {showNav && (
        <div
          className="md:hidden fixed top-0 left-0 bg-white dark:bg-[#111010] bg-opacity-90 z-10 overflow-hidden w-screen h-screen"
          onClick={toggleNav}
        >
          <Navlink links={links} classNameProps={'flex flex-col m-10 text-lg'} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;