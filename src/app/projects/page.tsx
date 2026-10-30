import Layout from '@components/Layout';
import BasicDiv from '@ui/BasicDiv';
import { ProjectsData } from '@components/data/profile';
import type { Metadata } from 'next';
import { createPageMetadata } from '@lib/seo';

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Projects',
    description:
      'Payment systems, data pipelines and web applications built by Vinayak Sharma.',
    path: '/projects',
  }),
};

export default function Page() {
  return (
    <Layout>
      <BasicDiv className='w-full'>
        <header className='w-full border-b border-zinc-200 pb-8 dark:border-zinc-800'>
          <p className='page-reveal mb-3 text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400'>
            Selected work
          </p>
          <h1
            className='page-reveal text-pretty text-left font-serif text-4xl font-medium leading-tight text-zinc-950 sm:text-5xl dark:text-zinc-100'
            style={{ animationDelay: '80ms' }}
          >
            Projects
          </h1>
          <div
            className='page-reveal mt-4 flex flex-wrap items-end justify-between gap-3'
            style={{ animationDelay: '160ms' }}
          >
            <p className='max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400'>
              Systems and products I’ve built across payments, data and web.
            </p>
            <span className='text-xs font-medium tabular-nums text-zinc-500 dark:text-zinc-500'>
              {String(ProjectsData.length).padStart(2, '0')} projects
            </span>
          </div>
        </header>
        <ol className='divide-y divide-zinc-200 border-b border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800'>
          {ProjectsData.map(({ title, description, link }, index) => (
            <li
              key={title}
              className='project-row page-reveal group -mx-2 grid gap-3 px-2 py-6 transition-colors duration-200 hover:bg-zinc-50/80 motion-reduce:transition-none sm:grid-cols-[2.5rem_minmax(0,1fr)_auto] sm:gap-5 dark:hover:bg-zinc-900/50'
              style={{ animationDelay: `${Math.min(index * 70, 420)}ms` }}
            >
              <span className='pt-1 text-xs font-semibold tabular-nums text-emerald-700 dark:text-emerald-400'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className='min-w-0'>
                <h2 className='text-lg font-semibold leading-6 text-zinc-950 transition-colors group-hover:text-emerald-800 dark:text-zinc-100 dark:group-hover:text-emerald-300'>
                  {title}
                </h2>
                <p className='mt-2 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
                  {description}
                </p>
              </div>
              {link && (
                <a
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex min-h-10 items-center text-sm font-semibold text-emerald-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:justify-self-end dark:text-emerald-400'
                >
                  View project{' '}
                  <span
                    aria-hidden='true'
                    className='ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none'
                  >
                    &rarr;
                  </span>
                </a>
              )}
            </li>
          ))}
        </ol>
      </BasicDiv>
    </Layout>
  );
}
