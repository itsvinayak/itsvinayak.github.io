import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@lib/utils';
import { motion } from 'motion/react';

const itemClass =
  'relative inline-flex min-h-10 w-full items-center justify-start rounded-full px-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white lg:w-fit';
const mobileItemClass =
  'min-h-14 rounded-none border-b border-zinc-200 px-2 text-xl dark:border-zinc-800';

const Navlink = ({ links, classNameProps, onLinkClick, variant }: any) => {
  const pathname = usePathname();

  return (
    <ul className={cn('font-medium', classNameProps)}>
      {links.map((link: any) => {
        const isActive =
          pathname === link.href ||
          (link.href !== '/' && pathname.startsWith(`${link.href}/`));

        return (
          <motion.li
            key={link.href}
            className='list-none'
            variants={{
              open: { opacity: 1, y: 0 },
              closed: { opacity: 0, y: 8 },
            }}
          >
            <Link
              href={link.href}
              onClick={onLinkClick}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                itemClass,
                variant === 'mobile' && mobileItemClass,
                isActive &&
                  'bg-emerald-50 text-emerald-900 hover:bg-emerald-100 lg:bg-transparent lg:hover:bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-300 dark:hover:bg-emerald-950 dark:lg:bg-transparent dark:lg:hover:bg-emerald-950/40',
                link.itemClass
              )}
            >
              <span className='relative z-10'>{link.name}</span>
              {isActive && variant !== 'mobile' && (
                <motion.span
                  aria-hidden='true'
                  layoutId='active-navigation-indicator'
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  className='absolute inset-x-3 -bottom-px z-0 h-0.5 rounded-full bg-emerald-500'
                />
              )}
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default Navlink;
