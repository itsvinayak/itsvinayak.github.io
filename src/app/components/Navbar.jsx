"use client";

import React, { useState } from "react";
import Navlink from "./Navlink";

const links = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "#Blog" },
  { name: "Connect", href: "#Connect" }
];

const BuggerSvg = () => {
  return (
    <svg
      className="fill-current h-6 w-6 text-gray-700"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );
};

const NavLogo = () => {
  return (
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-semibold text-xl tracking-tight">it's vinayak</span>
    </div>
  );
};

const Navbar = () => {
  const [navbarToggle, setNavbarToggle] = useState(false);

  return (
    <div className="py-4 px-2  shadow-lg shadow-[#2d2d2d49]">
      <div>
        <nav className="flex items-center justify-between flex-wrap align-middle">
          <div className="flex-grow">
            <NavLogo />
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
              onClick={() => setNavbarToggle(!navbarToggle)}
            >
              <BuggerSvg />
            </button>
          </div>

          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
              navbarToggle ? "block" : "hidden"
            }`}
          >
            <Navlink links={links} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
