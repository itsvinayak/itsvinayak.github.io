import { lazy } from "react";
import Link from "next/link";
const Divider = lazy(() => import("@components/Divider"));
const BasicDiv = lazy(() => import("@components/BasicDiv"));
const Footer = () => {
  return (
    <BasicDiv>
      <Divider />
      <footer className="mt-4 flex flex-row justify-evenly">
        <Link
          href="/"
          className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="h-7 ml-2">follow me</p>
        </Link>
        <p>Created by @itsvinayk</p>
      </footer>
    </BasicDiv>
  );
};

export default Footer;
