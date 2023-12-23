import Link from "next/link";

interface FooterLinkProps {
  href: string;
  text: string;
};

const FooterLink = ({ href, text }: FooterLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all hover:scale-110"
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
      <p className="h-7 ml-2">{text}</p>
    </Link>
  );
};
// 
const Footer = () => {
  return (
    <footer className="flex flex-row w-screen text-md justify-evenly items-center">
      <div className="flex flex-row justify-between w-1/4 pt-4">
        <FooterLink href="/connect" text="Connect" />
        <FooterLink href="https://itsvinayak.substack.com/" text="Get Email Updates" />
      </div>
      <p><b>Created by</b> @itsvinayak</p>
    </footer>
  );
};

export default Footer;
