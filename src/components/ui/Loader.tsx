import { FaCode } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className='flex min-h-screen w-full items-center justify-center px-4'>
      <div
        className='flex flex-col items-center gap-5 text-zinc-600 dark:text-zinc-400'
        role='status'
        aria-live='polite'
      >
        <div className='relative flex h-16 w-16 items-center justify-center'>
          <span className='absolute inset-0 animate-spin rounded-full border-2 border-zinc-200 border-t-emerald-600 motion-reduce:animate-none dark:border-zinc-700 dark:border-t-emerald-400' />
          <FaCode
            className='animate-pulse text-xl text-emerald-700 motion-reduce:animate-none dark:text-emerald-400'
            aria-hidden='true'
          />
        </div>
        <p className='text-sm font-medium tracking-wide'>Loading</p>
      </div>
    </div>
  );
};

export default Loader;
