import Link from "next/link";
import { cn } from "@lib/utils";


const Navlink = ({ links, classNameProps }: any) => {
  console.log(links);
  return (
    <ul className={cn("font-medium rounded mt-7 md:mx-20 md:px-20 ", classNameProps)}>
      {links.map((link: any) => (
        <li key={link.name} className="mb-2">
          <Link
            href={link.href}
            className={cn(
              "block py-2 px-6 rounded relative text-base font-semibold tracking-wide w-fit dark:hover:bg-[#0d0b0bd9] transition-all",
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