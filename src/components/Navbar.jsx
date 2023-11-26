"use client";

import Navlink from "./Navlink";

const links = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "Blog" },
  { name: "Connect", href: "Connect" }
];



const Navbar = () => {
  return (
    <nav className="flex justify-center items-center overflow-auto">
            <Navlink links={links} />
    </nav>
  );
};

export default Navbar;
