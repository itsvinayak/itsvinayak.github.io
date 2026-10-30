'use client';

import Image from 'next/image';
import { useEffect, useState, type KeyboardEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';

interface ImageCarouselProps {
  images: string[];
}

const getSlideOffset = (index: number, activeIndex: number, total: number) => {
  const offset = (index - activeIndex + total) % total;
  return offset > total / 2 ? offset - total : offset;
};

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isPaused =
    isAutoplayPaused ||
    isHovered ||
    isFocused ||
    isDragging ||
    Boolean(prefersReducedMotion);

  useEffect(() => {
    if (images.length < 2 || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeIndex, images.length, isPaused]);

  if (images.length === 0) return null;

  const goTo = (index: number) => {
    setActiveIndex((index + images.length) % images.length);
  };

  const moveBy = (direction: number) => goTo(activeIndex + direction);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      moveBy(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      moveBy(1);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsFocused(false);
    }
  };

  return (
    <div
      role='region'
      aria-label='Glimpses from My Life'
      aria-roledescription='carousel'
      className='mx-auto w-full'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <div
        className='relative mx-auto h-[min(90vw,34rem)] max-h-[34rem] min-h-[18rem] w-full max-w-5xl touch-pan-y overflow-hidden'
        style={{ perspective: 1200 }}
      >
        <div
          className='absolute inset-0 grid grid-cols-1 place-items-center'
          style={{ transformStyle: 'preserve-3d' }}
        >
          {images.map((src, index) => {
            const offset = getSlideOffset(index, activeIndex, images.length);
            const distance = Math.abs(offset);
            const isVisible = distance <= 2;
            const isActive = offset === 0;

            return (
              <motion.button
                key={src}
                type='button'
                aria-label={`${isActive ? 'Current photo' : 'Show photo'} ${
                  index + 1
                } of ${images.length}`}
                aria-current={isActive ? 'true' : undefined}
                aria-roledescription='slide'
                aria-hidden={!isVisible}
                tabIndex={isVisible ? 0 : -1}
                drag={isActive ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                dragMomentum={false}
                onClick={() => goTo(index)}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(_, info) => {
                  setIsDragging(false);
                  if (info.offset.x < -56) moveBy(1);
                  if (info.offset.x > 56) moveBy(-1);
                }}
                initial={false}
                animate={{
                  x: `${offset * 31}%`,
                  y: distance * 12,
                  z: -distance * 90,
                  scale: 1 - distance * 0.1,
                  rotateY: offset * -17,
                  rotateZ: offset * -3,
                  opacity: isVisible ? 1 - distance * 0.22 : 0,
                }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 190, damping: 25 }
                }
                style={{
                  zIndex: 20 - distance * 5,
                  pointerEvents: isVisible ? 'auto' : 'none',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                }}
                className='relative col-start-1 row-start-1 h-[min(78vw,28rem)] w-[min(78vw,28rem)] touch-pan-y overflow-hidden rounded-xl border border-white/70 bg-zinc-100 text-left shadow-2xl shadow-zinc-950/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-black/50'
              >
                <Image
                  src={src}
                  alt={`Personal photo ${index + 1}`}
                  fill
                  sizes='(min-width: 640px) 28rem, 78vw'
                  priority={isActive}
                  className='pointer-events-none object-cover'
                />
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className='mt-4 flex items-center justify-center gap-3'>
        <button
          type='button'
          onClick={() => moveBy(-1)}
          aria-label='Previous photo'
          className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 transition-colors hover:border-emerald-600 hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-emerald-500 dark:hover:text-emerald-400'
        >
          <FaChevronLeft aria-hidden='true' className='text-xs' />
        </button>

        <p
          aria-label={`Photo ${activeIndex + 1} of ${images.length}`}
          className='min-w-16 text-center font-mono text-sm tabular-nums text-zinc-600 dark:text-zinc-400'
        >
          {String(activeIndex + 1).padStart(2, '0')}
          <span className='px-1.5 text-zinc-400 dark:text-zinc-600'>/</span>
          {String(images.length).padStart(2, '0')}
        </p>

        <button
          type='button'
          onClick={() => moveBy(1)}
          aria-label='Next photo'
          className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 transition-colors hover:border-emerald-600 hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-emerald-500 dark:hover:text-emerald-400'
        >
          <FaChevronRight aria-hidden='true' className='text-xs' />
        </button>

        <button
          type='button'
          onClick={() => {
            setIsAutoplayPaused((paused) => !paused);
            setIsFocused(false);
          }}
          aria-label={
            prefersReducedMotion
              ? 'Autoplay disabled by reduced motion preference'
              : isAutoplayPaused
                ? 'Resume autoplay'
                : 'Pause autoplay'
          }
          aria-pressed={isAutoplayPaused}
          title={
            prefersReducedMotion
              ? 'Autoplay disabled by reduced motion preference'
              : isAutoplayPaused
                ? 'Resume autoplay'
                : 'Pause autoplay'
          }
          disabled={images.length < 2 || Boolean(prefersReducedMotion)}
          className='ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 transition-colors hover:border-emerald-600 hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-emerald-500 dark:hover:text-emerald-400'
        >
          {isAutoplayPaused ? (
            <FaPlay aria-hidden='true' className='text-xs' />
          ) : (
            <FaPause aria-hidden='true' className='text-xs' />
          )}
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
