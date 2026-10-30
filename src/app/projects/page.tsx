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
        <header className='w-full pb-8'>
          <p className='page-reveal mb-3 text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400'>
            Selected work
          </p>
          <h1
            className='page-reveal text-left font-serif text-3xl font-medium tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-100'
            style={{ animationDelay: '80ms' }}
          >
            Projects
          </h1>
          <div
            className='page-reveal mt-4 flex flex-wrap items-center justify-between gap-3'
            style={{ animationDelay: '160ms' }}
          >
            <p className='max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
              Systems and products I’ve built across payments, data and web.
            </p>
            <span className='text-xs font-medium tabular-nums text-zinc-500 dark:text-zinc-500'>
              {String(ProjectsData.length).padStart(2, '0')} projects
            </span>
          </div>
        </header>
        <ul className='grid gap-4 sm:grid-cols-2'>
          {ProjectsData.map(({ title, description, link }, index) => (
            <li
              key={title}
              className='page-reveal rounded-md border border-zinc-200 p-4 dark:border-zinc-800'
              style={{ animationDelay: `${Math.min(index * 70, 420)}ms` }}
            >
              <h2 className='text-base font-semibold leading-6 text-zinc-950 dark:text-zinc-100'>
                {title}
              </h2>
              <p className='mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
                {description}
              </p>
              {link && (
                <a
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-3 inline-flex min-h-9 items-center text-sm font-semibold text-emerald-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 dark:text-emerald-400'
                >
                  View project &rarr;
                </a>
              )}
            </li>
          ))}
        </ul>
      </BasicDiv>
    </Layout>
  );
}
