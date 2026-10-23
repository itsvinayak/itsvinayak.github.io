import Layout from '@components/Layout';
import BasicDiv from '@ui/BasicDiv';
import TimeLine from '@ui/TimeLine';
import { WorkData } from '@components/data/work';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Work Page of Vinayaks Personal Website',
};

export default function Page() {
  return (
    <Layout>
      <BasicDiv className='w-full'>
        <header className='w-full pb-8'>
          <p className='mb-3 text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400'>
            Experience &amp; selected work
          </p>
          <h1 className='text-left text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-100'>
            Work
          </h1>
          <div className='mt-4 flex flex-wrap items-center justify-between gap-3'>
            <p className='max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
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
