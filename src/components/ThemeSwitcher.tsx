"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { cn } from "@lib/utils";
import Head from 'next/head';


interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button className={cn("text-yellow-500", className)} onClick={() =>
          setTheme('light')}>
          <FaSun
            fontSize={25}
          />
          {/* set the theme color for mobile browsers */}
          <Head>
            <meta name="theme-color" content="#0000" />
          </Head>
        </button>
      )
    }

    else {
      return (
        <button className={cn("text-gray-900", className)} onClick={() =>
          setTheme('dark')}>
          <FaMoon
            fontSize={25}
          />
           {/* set the theme color for mobile browsers */}
          <Head>
            <meta name="theme-color" content="#ffff" />
          </Head>
        </button>
      )
    }
  };

  return (
    <>
      {renderThemeChanger()}
    </>
  );
};

export default ThemeSwitcher;