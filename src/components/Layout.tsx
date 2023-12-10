import { lazy } from "react";
import { cn } from "@lib/utils";
const Navbar = lazy(() => import("@components/Navbar"));
import React, { ReactNode } from "react";
const Footer = lazy(() => import("@components/Footer"));
const Newletter = lazy(() => import("@components/Newletter"));

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <main className="w-screen bg-white text-black  dark:bg-[#111010] dark:text-white">
      <div className={cn("flex justify-center flex-col items-center rounded-lg overflow-y-hidden", className)}>
        <Navbar />
        <div className="min-h-screen md:max-w-prose w-screen pt-20">
          {children}
        </div>
        <div className="md:max-w-prose w-screen">
          <Newletter />
        </div>
        <hr className="border-1" />
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
