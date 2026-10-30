import Layout from '@components/Layout';
import BasicDiv from '@ui/BasicDiv';
import TimeLine from '@ui/TimeLine';
import { WorkData } from '@components/data/work';
import type { Metadata } from 'next';
import { createPageMetadata } from '@lib/seo';

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Work',
    description:
      'Explore Vinayak Sharma’s software engineering experience building payment systems, developer tools, and distributed services.',
    path: '/work',
  }),
};

export default function Page() {
  return (
    <Layout>
      <BasicDiv className='w-full'>
        <header className='w-full border-b border-zinc-200 pb-8 dark:border-zinc-800'>
          <p className='page-reveal mb-3 text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400'>
            Experience &amp; selected work
          </p>
          <h1
            className='page-reveal text-pretty text-left font-serif text-4xl font-medium leading-tight text-zinc-950 sm:text-5xl dark:text-zinc-100'
            style={{ animationDelay: '80ms' }}
          >
            Work
          </h1>
          <div
            className='page-reveal mt-4 flex flex-wrap items-end justify-between gap-3'
            style={{ animationDelay: '160ms' }}
          >
            <p className='max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400'>
              A timeline of the teams, products, and systems I’ve helped build.
            </p>
            <span className='text-xs font-medium tabular-nums text-zinc-500 dark:text-zinc-500'>
              {String(WorkData.length).padStart(2, '0')} roles
            </span>
          </div>
        </header>
        <TimeLine items={WorkData} />
      </BasicDiv>
    </Layout>
  );
}
