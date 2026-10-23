import Layout from '@components/Layout';
import Link from 'next/link';
import { FaArrowRight, FaCompass, FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <Layout>
      <section className='flex min-h-[55vh] flex-col items-center justify-center px-4 py-16 text-center'>
        <div className='relative mb-7 flex h-24 w-24 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800'>
          <span className='absolute inset-2 animate-spin rounded-full border border-dashed border-emerald-600/50 motion-reduce:animate-none dark:border-emerald-400/50' />
          <FaCompass
            className='text-4xl text-emerald-700 dark:text-emerald-400'
            aria-hidden='true'
          />
        </div>

        <p className='font-mono text-sm font-semibold tracking-widest text-emerald-700 dark:text-emerald-400'>
          ERROR 404
        </p>
        <h1 className='mt-3 text-3xl font-bold text-zinc-950 sm:text-4xl dark:text-zinc-50'>
          Page not found
        </h1>
        <p className='mt-3 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
          This page may have moved, or the address might be incorrect.
        </p>

        <Link
          href='/'
          className='mt-7 inline-flex items-center gap-2 rounded-md bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500'
        >
          <FaHome aria-hidden='true' />
          Back to home
          <FaArrowRight className='text-xs' aria-hidden='true' />
        </Link>
      </section>
    </Layout>
  );
};

export default NotFound;
