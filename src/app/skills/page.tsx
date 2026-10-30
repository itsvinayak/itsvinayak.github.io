import Layout from '@components/Layout';
import BasicDiv from '@ui/BasicDiv';
import {
  CertificatesData,
  SkillsData,
  linkedInCertificationsUrl,
} from '@components/data/profile';
import type { Metadata } from 'next';
import { createPageMetadata } from '@lib/seo';

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Skills',
    description:
      'Backend engineering, distributed systems, payments and tooling skills of Vinayak Sharma.',
    path: '/skills',
  }),
};

export default function Page() {
  const totalSkills = SkillsData.reduce(
    (total, { items }) => total + items.length,
    0
  );

  return (
    <Layout>
      <BasicDiv className='w-full tracking-normal'>
        <header className='page-reveal grid gap-7 border-b border-zinc-300 pb-8 dark:border-zinc-700 sm:pb-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end'>
          <div>
            <p className='mb-3 text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400'>
              Tools &amp; expertise
            </p>
            <h1 className='text-pretty font-serif text-5xl font-medium leading-none text-zinc-950 sm:text-6xl dark:text-zinc-100'>
              Skills
            </h1>
            <p className='mt-4 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400'>
              The technologies and practices I use to build reliable software.
            </p>
          </div>
          <p className='flex flex-wrap gap-x-4 gap-y-1 border-t border-zinc-300 pt-3 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 md:justify-end md:border-l md:border-t-0 md:pl-5 md:pt-0'>
            <span>
              <span className='font-semibold tabular-nums text-zinc-950 dark:text-zinc-100'>
                {String(SkillsData.length).padStart(2, '0')}
              </span>{' '}
              domains
            </span>
            <span>
              <span className='font-semibold tabular-nums text-zinc-950 dark:text-zinc-100'>
                {String(totalSkills).padStart(2, '0')}
              </span>{' '}
              capabilities
            </span>
          </p>
        </header>

        <div className='mt-8 grid gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10'>
          {SkillsData.map(({ category, items }, index) => {
            const isFeatured = index === 0;

            return (
              <section
                key={category}
                aria-labelledby={`skill-category-${index}`}
                className={`page-reveal ${isFeatured ? 'sm:col-span-2' : 'border-t border-zinc-300 pt-5 dark:border-zinc-700'}`}
                style={{ animationDelay: `${Math.min(index * 90, 270)}ms` }}
              >
                <div
                  className={
                    isFeatured
                      ? 'bg-emerald-50 px-5 py-6 text-zinc-950 sm:px-7 sm:py-7 dark:bg-emerald-950 dark:text-white'
                      : ''
                  }
                >
                  <div className='flex items-baseline justify-between gap-4'>
                    <h2
                      id={`skill-category-${index}`}
                      className={`text-lg font-semibold ${isFeatured ? 'text-emerald-950 dark:text-white' : 'text-zinc-950 dark:text-zinc-100'}`}
                    >
                      {category}
                    </h2>
                    <span
                      className={`shrink-0 text-xs font-medium tabular-nums ${isFeatured ? 'text-emerald-800 dark:text-emerald-200' : 'text-zinc-500 dark:text-zinc-400'}`}
                    >
                      {String(items.length).padStart(2, '0')}
                    </span>
                  </div>
                  <ul
                    className={`mt-4 grid ${isFeatured ? 'sm:grid-cols-2 sm:gap-x-8' : ''}`}
                  >
                    {items.map((item) => (
                      <li
                        key={item}
                        className={`flex items-center gap-3 border-t py-3 text-sm font-medium ${isFeatured ? 'border-emerald-900/15 text-emerald-950 dark:border-white/15 dark:text-emerald-50' : 'border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300'}`}
                      >
                        <span
                          aria-hidden='true'
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${isFeatured ? 'bg-emerald-700 dark:bg-emerald-300' : 'bg-emerald-600 dark:bg-emerald-400'}`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>

        <details
          id='certificates'
          className='page-reveal group mt-10 border-y border-zinc-300 dark:border-zinc-700'
        >
          <summary className='flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 [&::-webkit-details-marker]:hidden'>
            <span>
              <span className='block text-lg font-semibold text-zinc-950 dark:text-zinc-100'>
                Certificates
              </span>
              <span className='mt-1 block text-sm text-zinc-600 dark:text-zinc-400'>
                {CertificatesData.length} credentials and courses
              </span>
            </span>
            <svg
              aria-hidden='true'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5 shrink-0 text-emerald-700 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none dark:text-emerald-400'
            >
              <path d='M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z' />
            </svg>
          </summary>
          <div className='border-t border-zinc-200 py-5 dark:border-zinc-800'>
            {CertificatesData.length > 0 && (
              <ul className='grid gap-x-8 md:grid-cols-2'>
                {CertificatesData.map(
                  ({ name, issuer, date, expires, link }, index) => (
                    <li
                      key={`${name}-${issuer}-${date ?? 'undated'}-${index}`}
                      className='min-w-0 border-b border-zinc-200 py-4 dark:border-zinc-800'
                    >
                      <h3 className='break-words text-sm font-semibold text-zinc-950 dark:text-zinc-100'>
                        {name}
                      </h3>
                      <p className='mt-1 text-sm text-zinc-600 dark:text-zinc-400'>
                        {issuer}
                        {date ? ` · ${date}` : ''}
                        {expires ? ` · Expires ${expires}` : ''}
                      </p>
                      {link && (
                        <a
                          href={link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='mt-2 inline-flex min-h-9 items-center text-sm font-semibold text-emerald-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 dark:text-emerald-400'
                        >
                          Show credential &rarr;
                        </a>
                      )}
                    </li>
                  )
                )}
              </ul>
            )}
            <a
              href={linkedInCertificationsUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-4 inline-flex min-h-10 items-center text-sm font-semibold text-emerald-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 dark:text-emerald-400'
            >
              View all certificates on LinkedIn &rarr;
            </a>
          </div>
        </details>
      </BasicDiv>
    </Layout>
  );
}
