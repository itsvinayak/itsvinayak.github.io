import Link from 'next/link';
import { cn } from '@lib/utils';

const Navlink = ({ links, classNameProps }: any) => {
  console.log(links);
  return (
    <ul
      className={cn(
        'mt-7 rounded font-medium md:mx-20 md:px-20 ',
        classNameProps
      )}
    >
      {links.map((link: any) => (
        <li key={link.name} className='mb-2'>
          <Link
            href={link.href}
            className={cn(
              'relative block w-fit rounded px-6 py-2 text-base font-semibold tracking-wide transition-all dark:hover:bg-[#0d0b0bd9] hover:bg-[#f0f0f0d9] dark:hover:text-white hover:text-black',
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
