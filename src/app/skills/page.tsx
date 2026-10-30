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
  return (
    <Layout>
      <BasicDiv className='w-full'>
        <header className='w-full pb-8'>
          <p className='page-reveal mb-3 text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400'>
            Tools &amp; expertise
          </p>
          <h1
            className='page-reveal text-left font-serif text-3xl font-medium tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-100'
            style={{ animationDelay: '80ms' }}
          >
            Skills
          </h1>
          <p
            className='page-reveal mt-4 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400'
            style={{ animationDelay: '160ms' }}
          >
            The technologies and practices I use day to day.
          </p>
        </header>
        <div className='space-y-8'>
          {SkillsData.map(({ category, items }, index) => (
            <section
              key={category}
              className='page-reveal'
              style={{ animationDelay: `${Math.min(index * 70, 420)}ms` }}
            >
              <h2 className='text-base font-semibold text-zinc-950 dark:text-zinc-100'>
                {category}
              </h2>
              <ul className='mt-3 flex flex-wrap gap-2'>
                {items.map((item) => (
                  <li
                    key={item}
                    className='rounded-sm bg-emerald-50 px-2.5 py-1 text-sm font-medium text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <details className='group page-reveal rounded-md border border-zinc-200 dark:border-zinc-800'>
            <summary className='flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-base font-semibold text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 dark:text-zinc-100 [&::-webkit-details-marker]:hidden'>
              <span>
                Certificates
                <span className='ml-2 text-xs font-medium tabular-nums text-zinc-500 dark:text-zinc-400'>
                  {String(CertificatesData.length).padStart(2, '0')}
                </span>
              </span>
              <svg
                aria-hidden='true'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-4 w-4 shrink-0 text-zinc-500 transition-transform motion-reduce:transition-none group-open:rotate-180'
              >
                <path d='M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z' />
              </svg>
            </summary>
            <div className='border-t border-zinc-200 px-4 py-4 dark:border-zinc-800'>
              {CertificatesData.length > 0 && (
                <ul className='space-y-4'>
                  {CertificatesData.map(({ name, issuer, date, expires, link }) => (
                    <li key={name} className='min-w-0'>
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
                          className='mt-2 inline-flex min-h-9 items-center text-sm font-semibold text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-400'
                        >
                          Show credential &rarr;
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              <a
                href={linkedInCertificationsUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex min-h-9 items-center text-sm font-semibold text-emerald-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 dark:text-emerald-400'
              >
                View all certificates on LinkedIn &rarr;
              </a>
            </div>
          </details>
        </div>
      </BasicDiv>
    </Layout>
  );
}
