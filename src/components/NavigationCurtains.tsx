'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, useReducedMotion } from 'motion/react';

type NavigationCurtainsContextValue = (href: string) => void;
type TransitionPhase = 'idle' | 'cover' | 'reveal';

const NavigationCurtainsContext =
  createContext<NavigationCurtainsContextValue | null>(null);
const panelCount = 6;
const panelDuration = 0.42;
const panelStagger = 0.045;
const transitionDuration = Math.ceil(
  (panelDuration + panelStagger * (panelCount - 1)) * 1000,
);

export function useNavigationCurtains() {
  const navigate = useContext(NavigationCurtainsContext);

  if (!navigate) {
    throw new Error(
      'useNavigationCurtains must be used within NavigationCurtainsProvider',
    );
  }

  return navigate;
}

export function NavigationCurtainsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();
  const pendingPath = useRef<string | null>(null);
  const navigationTimer = useRef<number | null>(null);
  const [phase, setPhase] = useState<TransitionPhase>('idle');

  const navigate = useCallback(
    (href: string) => {
      if (href === pathname || pendingPath.current) {
        return;
      }

      if (prefersReducedMotion) {
        router.push(href);
        return;
      }

      pendingPath.current = href;
      setPhase('cover');
      navigationTimer.current = window.setTimeout(
        () => router.push(href),
        transitionDuration,
      );
    },
    [pathname, prefersReducedMotion, router],
  );

  useEffect(() => {
    if (phase === 'cover' && pendingPath.current === pathname) {
      navigationTimer.current = null;
      setPhase('reveal');
    }
  }, [pathname, phase]);

  useEffect(() => {
    if (phase !== 'reveal') {
      return;
    }

    const revealTimer = window.setTimeout(() => {
      pendingPath.current = null;
      setPhase('idle');
    }, transitionDuration);

    return () => window.clearTimeout(revealTimer);
  }, [phase]);

  useEffect(
    () => () => {
      if (navigationTimer.current !== null) {
        window.clearTimeout(navigationTimer.current);
      }
    },
    [],
  );

  return (
    <NavigationCurtainsContext.Provider value={navigate}>
      {children}
      {phase !== 'idle' && (
        <div
          aria-hidden='true'
          className='pointer-events-none fixed inset-0 z-[100] grid grid-cols-6'
        >
          {Array.from({ length: panelCount }, (_, index) => (
            <motion.div
              key={index}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: phase === 'cover' ? 1 : 0 }}
              transition={{
                duration: panelDuration,
                delay: index * panelStagger,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{
                transformOrigin: phase === 'cover' ? 'top center' : 'bottom center',
              }}
              className='h-full border-r border-white/10 bg-zinc-950 last:border-r-0 dark:border-black/10 dark:bg-zinc-100'
            />
          ))}
        </div>
      )}
    </NavigationCurtainsContext.Provider>
  );
}