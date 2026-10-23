'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaSearch, FaTimes } from 'react-icons/fa';
import PagefindSearch from '@components/PagefindSearch';

interface SearchPopupProps {
  containerId: string;
  className?: string;
}

const SearchPopup = ({ containerId, className = '' }: SearchPopupProps) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onEscape);

    return () => {
      window.removeEventListener('keydown', onEscape);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className={className}>
      <button
        className='group inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300/80 bg-white/80 text-zinc-800 shadow-sm backdrop-blur-sm transition hover:scale-[1.03] hover:bg-white active:scale-95 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:bg-zinc-900'
        onClick={() => setOpen(true)}
        aria-label='Open search'
        type='button'
      >
        <FaSearch className='text-sm transition group-hover:rotate-6' />
      </button>

      {mounted &&
        open &&
        createPortal(
          <div className='fixed inset-0 z-[80]'>
            <button
              type='button'
              className='absolute inset-0 bg-black/25 backdrop-blur-xl dark:bg-black/40'
              aria-label='Close search popup'
              onClick={() => setOpen(false)}
            />

            <div className='relative z-[81] flex min-h-full items-start justify-center px-4 pb-6 pt-20'>
              <div className='w-full max-w-3xl rounded-2xl border border-white/40 bg-white/95 p-5 shadow-2xl backdrop-blur-xl transition duration-200 dark:border-zinc-700/60 dark:bg-zinc-900/95'>
                <div className='mb-3 flex items-center justify-between'>
                  <p className='text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-100'>
                    Search articles
                  </p>
                  <button
                    type='button'
                    onClick={() => setOpen(false)}
                    className='rounded-full p-2 text-zinc-700 transition hover:bg-white/70 dark:text-zinc-200 dark:hover:bg-zinc-800/70'
                    aria-label='Close search'
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className='search-glass'>
                  <PagefindSearch containerId={containerId} />
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default SearchPopup;
