import Link from "next/link";

const Navlink = ({ links }) => {
  return (
    <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-black dark:border-gray-700">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navlink;
