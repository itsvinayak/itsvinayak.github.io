import React, { lazy } from 'react';
import { cn } from '@lib/utils';
import { LayoutProps } from '@components/types/LayoutProps';

const Navbar = lazy(() => import('@components/Navbar'));
const Footer = lazy(() => import('@components/Footer'));

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className='min-h-screen w-full bg-white text-black dark:bg-[#111010] dark:text-white'>
      <a
        href='#main-content'
        className='sr-only z-[60] rounded-md bg-white px-4 py-3 font-semibold text-zinc-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 dark:bg-zinc-900 dark:text-white'
      >
        Skip to main content
      </a>
      <Navbar />
      <main
        id='main-content'
        className='min-h-screen w-full px-4 pb-12 pt-24 md:pt-28'
        tabIndex={-1}
      >
        <div className={cn('mx-auto w-full max-w-5xl', className)}>
          {children}
        </div>
      </main>
      <hr className='mx-auto h-px w-3/4 border-0 bg-zinc-200 dark:bg-zinc-800' />
      <Footer />
    </div>
  );
};

export default Layout;
