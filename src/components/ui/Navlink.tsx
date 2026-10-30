import Link from 'next/link';
import { cn } from '@lib/utils';

const itemClass =
  'relative inline-flex w-full items-center justify-start rounded-lg px-4 py-2 text-sm font-semibold tracking-wide text-zinc-800 transition-colors hover:bg-zinc-800 hover:text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-zinc-500 dark:text-zinc-100 dark:hover:bg-zinc-700 dark:hover:text-zinc-100 md:w-fit md:text-base';
const mobileItemClass = 'min-h-12 py-3 text-lg md:text-lg';
const mobileChildClass = 'min-h-11 py-2.5 text-base font-medium md:text-base';

const Navlink = ({ links, classNameProps, onLinkClick, variant }: any) => {
  return (
    <ul className={cn('rounded font-medium', classNameProps)}>
      {links.map((link: any) => {
        const children = link.children as
          | { name: string; href: string }[]
          | undefined;
        const isDropdown = !!children && variant !== 'mobile';

        return (
          <li
            key={link.name}
            className={cn('list-none', isDropdown && 'group relative')}
          >
            <Link
              href={link.href}
              onClick={onLinkClick}
              className={cn(
                itemClass,
                variant === 'mobile' && mobileItemClass,
                link.itemClass
              )}
            >
              {link.name}
              {isDropdown && (
                <svg
                  aria-hidden='true'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='ml-1 h-4 w-4 transition-transform motion-reduce:transition-none group-focus-within:rotate-180 group-hover:rotate-180'
                >
                  <path d='M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z' />
                </svg>
              )}
            </Link>
            {children && (
              <ul
                className={cn(
                  isDropdown
                    ? 'invisible absolute left-0 top-full z-50 min-w-44 rounded-lg border border-zinc-200 bg-white p-1 opacity-0 shadow-lg transition motion-reduce:transition-none group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 dark:border-zinc-700 dark:bg-[#111010]'
                    : 'ml-4 border-l border-zinc-200 pl-2 dark:border-zinc-800'
                )}
              >
                {children.map((child) => (
                  <li key={child.href} className='list-none'>
                    <Link
                      href={child.href}
                      onClick={onLinkClick}
                      className={cn(
                        itemClass,
                        'md:w-full',
                        variant === 'mobile' && mobileChildClass
                      )}
                    >
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Navlink;
