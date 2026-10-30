'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navlink from '@ui/Navlink';
import ThemeSwitcher from '@components/ThemeSwitcher';
import SearchPopup from '@components/SearchPopup';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/work' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Blog', href: '/blog' },
  { name: 'Connect', href: '/connect' },
];

const NavbarLogo = () => {
  return (
    <Link
      href='/'
      aria-label='Vinayak Sharma home'
      className='inline-flex items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600'
    >
      <Image
        src='/profile.jpeg'
        alt=''
        width={42}
        height={42}
        priority
        className='rounded-full border border-zinc-300 dark:border-zinc-700'
      />
    </Link>
  );
};

interface NavbarButtonProps {
  actionFunction: () => void;
  isOpen: boolean;
}

const NavbarButton = ({ actionFunction, isOpen }: NavbarButtonProps) => {
  return (
    <button
      type='button'
      className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 transition-colors hover:border-emerald-600 hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 active:scale-95 lg:hidden dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-emerald-500 dark:hover:text-emerald-400'
      onClick={actionFunction}
      aria-expanded={isOpen}
      aria-controls='mobile-navigation'
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? (
        <FaTimes aria-hidden='true' className='text-sm' />
      ) : (
        <FaBars aria-hidden='true' className='text-sm' />
      )}
    </button>
  );
};

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => setShowNav((current) => !current);
  const closeNav = () => setShowNav(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    closeNav();
  }, [pathname]);

  useEffect(() => {
    if (!showNav) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeNav();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showNav]);

  return (
    <MotionConfig reducedMotion='user'>
      <nav
        aria-label='Main navigation'
        className={`fixed top-0 z-40 w-full border-b border-zinc-200/80 bg-white/95 backdrop-blur-md transition-shadow dark:border-zinc-800/80 dark:bg-[#111010]/95 ${
          isScrolled ? 'shadow-sm shadow-zinc-300/40 dark:shadow-black/30' : ''
        }`}
      >
        <div className='mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 lg:hidden'>
          <div className='flex items-center'>
            <NavbarLogo />
          </div>
          <div className='flex items-center gap-2'>
            <SearchPopup containerId='search-mobile-popup' />
            <ThemeSwitcher />
            <NavbarButton actionFunction={toggleNav} isOpen={showNav} />
          </div>
        </div>

        <div className='mx-auto hidden h-[4.5rem] w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-5 px-4 lg:grid'>
          <div className='flex items-center justify-start'>
            <NavbarLogo />
          </div>

          <div className='flex min-w-0 items-center justify-center'>
            <Navlink
              links={links}
              classNameProps='flex items-center justify-center gap-1'
            />
          </div>

          <div className='flex items-center justify-end gap-2'>
            <SearchPopup containerId='search-desktop-popup' />
            <ThemeSwitcher />
          </div>
        </div>

        <AnimatePresence>
          {showNav && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              id='mobile-navigation'
              className='fixed inset-0 z-50 flex h-[100dvh] flex-col overflow-y-auto overscroll-contain bg-white lg:hidden dark:bg-[#111010]'
            >
              <motion.div
                initial={{ y: -12 }}
                animate={{ y: 0 }}
                exit={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                className='flex min-h-16 shrink-0 items-center justify-between border-b border-zinc-200 px-4 dark:border-zinc-800'
              >
                <NavbarLogo />
                <div className='flex items-center gap-2'>
                  <SearchPopup containerId='search-mobile-menu-popup' />
                  <ThemeSwitcher />
                  <NavbarButton actionFunction={closeNav} isOpen />
                </div>
              </motion.div>
              <motion.div
                initial='closed'
                animate='open'
                exit='closed'
                variants={{
                  open: {
                    transition: { staggerChildren: 0.045, delayChildren: 0.04 },
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.025,
                      staggerDirection: -1,
                    },
                  },
                }}
                className='mx-auto flex w-full max-w-xl flex-1 flex-col px-5 py-5'
              >
                <Navlink
                  links={links}
                  variant='mobile'
                  onLinkClick={closeNav}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </MotionConfig>
  );
};

export default Navbar;
