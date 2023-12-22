import React, { lazy } from "react";
import { cn } from "@lib/utils";
import { LayoutProps } from "@components/types/LayoutProps";

const Navbar = lazy(() => import("@components/Navbar"));
const Footer = lazy(() => import("@components/Footer"));
const Newletter = lazy(() => import("@components/Newletter"));

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <main className="w-full min-h-screen bg-white text-black dark:bg-[#111010] dark:text-white overflow-y-hidden">
      <div className={cn("flex flex-col items-center rounded-lg", className)}>
        <Navbar />
        <div className="w-full md:max-w-prose px-4 pt-20">
          {children}
        </div>
        <div className="w-full md:max-w-prose px-4">
          <Newletter />
        </div>
        <hr className="border-1 w-full" />
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
