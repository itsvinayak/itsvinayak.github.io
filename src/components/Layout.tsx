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
    <main className="flex justify-center flex-col items-center bg-[#111010] overflow-y-hidden">
      <div className={cn("md:max-w-4xl rounded-lg p-3.5 lg:p-6 ", className)}>
        <Navbar />
        <div className="min-h-screen max-w-prose">
        {children}
        </div>
        <Newletter />
        <Footer/>
      </div>
    </main>
  );
};

export default Layout;
