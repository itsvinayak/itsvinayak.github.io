import React, { lazy } from 'react';
import { cn } from '@lib/utils';
import { LayoutProps } from '@components/types/LayoutProps';

const Navbar = lazy(() => import('@components/Navbar'));
const Footer = lazy(() => import('@components/Footer'));

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <main className='min-h-screen w-full overflow-y-hidden bg-white text-black dark:bg-[#111010] dark:text-white'>
      <div className={cn('flex flex-col items-center rounded-lg', className)}>
        <Navbar />
        <div className='min-h-screen w-full px-4 py-20 md:w-3/5'>
          {children}
        </div>
        <hr className='w-1/2' />
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
