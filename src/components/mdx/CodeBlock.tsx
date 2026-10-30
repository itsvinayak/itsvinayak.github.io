'use client';

import * as React from 'react';
import { cn } from '@lib/utils';

type CodeBlockProps = React.HTMLAttributes<HTMLPreElement> & {
  'data-language'?: string;
};

export function CodeBlock({ className, children, ...props }: CodeBlockProps) {
  const preRef = React.useRef<HTMLPreElement>(null);
  const [copied, setCopied] = React.useState(false);
  const language = props['data-language'];

  const handleCopy = async () => {
    const text = preRef.current?.innerText ?? '';
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className='group my-6 overflow-hidden rounded-xl border border-zinc-700/60 bg-[#0d1117] shadow-sm'>
      <div className='flex items-center justify-between border-b border-zinc-700/60 bg-zinc-900/80 px-4 py-2'>
        <div className='flex items-center gap-2'>
          <span className='h-2.5 w-2.5 rounded-full bg-red-500/80' />
          <span className='h-2.5 w-2.5 rounded-full bg-yellow-500/80' />
          <span className='h-2.5 w-2.5 rounded-full bg-green-500/80' />
          {language && (
            <span className='ml-2 font-mono text-xs uppercase tracking-wider text-zinc-400'>
              {language}
            </span>
          )}
        </div>
        <button
          type='button'
          onClick={handleCopy}
          aria-label={copied ? 'Copied' : 'Copy code'}
          className='flex items-center gap-1.5 rounded-md border border-zinc-700 px-2 py-1 text-xs text-zinc-300 transition hover:bg-zinc-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500'
        >
          {copied ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-3.5 w-3.5 text-green-400'
            >
              <polyline points='20 6 9 17 4 12' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-3.5 w-3.5'
            >
              <rect x='9' y='9' width='13' height='13' rx='2' ry='2' />
              <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
            </svg>
          )}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre
        ref={preRef}
        className={cn(
          'overflow-x-auto !bg-transparent px-4 py-4 font-mono text-sm leading-6',
          className
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
