import Link from "next/link";
import { cn } from "@lib/utils";

const Navlink = ({ links, classNameProps }: any) => {
  return (
    <ul className={cn("font-medium rounded p-1 mt-4 md:mx-20 md:px-20 ", classNameProps)}>
      {links.map((link: any) => (
        <li key={link.name} className="mb-2">
          <Link
            href={link.href}
            className={cn(
              "block py-2 px-6 rounded relative text-base font-semibold tracking-wide w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#f2f2f2] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center",
              link.itemClass 
            )}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navlink;