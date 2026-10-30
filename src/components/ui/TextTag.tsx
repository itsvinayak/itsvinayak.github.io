import type { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@lib/utils';

interface TextTagProps {
  text: string;
  logo?: ReactNode | string;
  className?: string;
}

const TextTag = ({ text, logo, className }: TextTagProps) => {
  const logoContent =
    typeof logo === 'string' && logo.length > 0 ? (
      <Image
        src={logo}
        alt=''
        width={16}
        height={16}
        aria-hidden='true'
        className='h-4 w-4 object-contain'
      />
    ) : typeof logo === 'string' || logo == null ? null : (
      logo
    );

  return (
    <span
      className={cn(
        'mx-0.5 inline-flex translate-y-[-0.04em] items-center gap-1 rounded-md border border-emerald-200/80 bg-emerald-50 px-1.5 py-0.5 align-baseline text-[0.92em] font-medium leading-[1.35] text-emerald-950 decoration-transparent dark:border-emerald-800/80 dark:bg-emerald-950/50 dark:text-emerald-200',
        className
      )}
    >
      {logoContent && (
        <span className='inline-flex shrink-0 items-center'>{logoContent}</span>
      )}
      <span>{text}</span>
    </span>
  );
};

export default TextTag;
