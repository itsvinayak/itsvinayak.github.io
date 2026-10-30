'use client';

import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';
import { cn } from '@lib/utils';
import { AnimatePresence, motion } from 'motion/react';

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => { finished: Promise<void> };
};

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isDark = currentTheme === 'dark';
    const changeTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
      const nextTheme = isDark ? 'light' : 'dark';
      const transitionDocument = document as ViewTransitionDocument;

      if (
        !transitionDocument.startViewTransition ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        setTheme(nextTheme);
        return;
      }

      const bounds = event.currentTarget.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const radius = Math.max(
        Math.hypot(centerX, centerY),
        Math.hypot(window.innerWidth - centerX, centerY),
        Math.hypot(centerX, window.innerHeight - centerY),
        Math.hypot(window.innerWidth - centerX, window.innerHeight - centerY)
      );
      const rootStyle = document.documentElement.style;
      const clearRevealOrigin = () => {
        rootStyle.removeProperty('--theme-reveal-x');
        rootStyle.removeProperty('--theme-reveal-y');
        rootStyle.removeProperty('--theme-reveal-radius');
      };

      rootStyle.setProperty('--theme-reveal-x', `${centerX}px`);
      rootStyle.setProperty('--theme-reveal-y', `${centerY}px`);
      rootStyle.setProperty('--theme-reveal-radius', `${radius}px`);

      try {
        const transition = transitionDocument.startViewTransition(() => {
          flushSync(() => setTheme(nextTheme));
        });
        void transition.finished.then(clearRevealOrigin, clearRevealOrigin);
      } catch {
        clearRevealOrigin();
        setTheme(nextTheme);
      }
    };

    return (
      <button
        type='button'
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300/80 bg-white/80 shadow-sm backdrop-blur-sm transition hover:scale-[1.03] hover:bg-white active:scale-95 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-900',
          isDark
            ? 'text-amber-500 dark:text-amber-300'
            : 'text-zinc-800 dark:text-zinc-100',
          className
        )}
        onClick={changeTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <AnimatePresence mode='wait' initial={false}>
          <motion.span
            key={isDark ? 'sun' : 'moon'}
            aria-hidden='true'
            initial={{ opacity: 0, rotate: -90, scale: 0.65 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.65 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className='inline-flex items-center justify-center text-sm'
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </motion.span>
        </AnimatePresence>
      </button>
    );
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
