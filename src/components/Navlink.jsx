import Link from "next/link";

const Navlink = ({ links }) => {
  return (
    <ul className="font-medium flex flex-row rounded p-1 mt-4 border bg-[#111010] border-[#2422229a] md:mx-20 md:px-20">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="block py-2 px-6 rounded relative text-base font-semibold tracking-wide w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#f2f2f2] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navlink;
