import React from 'react';
'use client';


const Newletter = () => {
  return (
    <div className='flex flex-col items-center py-8 md:py-16'>
      <h1 className='text-md text-center font-bold text-black md:text-3xl lg:text-xl xl:text-2xl dark:text-white'>
        <span className='from-[#171010] via-[#000000] to-[#000f2f] bg-[length:100%_6px] bg-bottom bg-no-repeat hover:bg-gradient-to-r'>
          Subscribe to My Newsletter for Updates
        </span>
      </h1>
      <div className='relative mx-6 mt-4 flex max-w-md items-center justify-center md:mx-0 md:max-w-lg lg:max-w-xl xl:max-w-2xl'>
        <input
          type='email'
          name='email'
          placeholder='Email address'
          autoComplete='email'
          aria-label='Email address'
          className='dark:hover:ring-wh w-full rounded-2xl border border-transparent bg-transparent py-4 pl-6 pr-12 text-base/6 text-neutral-950 transition hover:border-neutral-950 hover:outline-none hover:ring-neutral-950/5 focus:border-neutral-950 focus:outline-none
          focus:ring-neutral-950/5 dark:border-white dark:bg-transparent dark:text-white dark:placeholder-white dark:ring-white/5 dark:hover:border-white/5 dark:hover:bg-transparent dark:hover:text-white dark:hover:placeholder-white dark:hover:ring-white/5 dark:focus:border-white/5 dark:focus:ring-white/5'
        />
        <div className='absolute inset-y-1 right-1 flex justify-end'>
          <button
            type='submit'
            aria-label='Submit'
            onClick={() => (location.href = 'https://itsvinayak.substack.com/')}
            className='aspect-square flex w-fit items-center justify-center rounded-xl bg-neutral-950 px-4 text-white transition hover:bg-neutral-800'
          >
            <svg viewBox='0 0 16 6' aria-hidden='true' className='w-4'>
              <path
                fill='currentColor'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16 3 10 .5v2H0v1h10v2L16 3Z'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
