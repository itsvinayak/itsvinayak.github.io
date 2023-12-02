import { lazy } from "react";
const Navbar = lazy(() => import("@components/Navbar"));
import React, { ReactNode } from "react";
const Footer = lazy(() => import("@components/Footer"));
const Newletter = lazy(() => import("@components/Newletter"));

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex justify-center flex-col items-center bg-[#111010] overflow-y-hidden">
      <div className="md:max-w-4xl rounded-lg p-3.5 lg:p-6 ">
        <Navbar />
        {children}
        <Newletter />
        <Footer/>
      </div>
    </main>
  );
};

export default Layout;
