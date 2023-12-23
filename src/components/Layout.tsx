import React, { lazy } from "react";
import { cn } from "@lib/utils";
import { LayoutProps } from "@components/types/LayoutProps";

const Navbar = lazy(() => import("@components/Navbar"));
const Footer = lazy(() => import("@components/Footer"));

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <main className="w-full min-h-screen bg-white text-black dark:bg-[#111010] dark:text-white overflow-y-hidden">
      <div className={cn("flex flex-col items-center rounded-lg", className)}>
        <Navbar />
        <div className="w-full md:max-w-prose px-4 py-20 min-h-screen">
          {children}
        </div>
        <hr className="w-1/2" />
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
