import { SocialLinks } from '@components/data/social';
import { FaArrowRight, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

const emailAddress = 'itsvinayak@gmail.com';

const ConnectGrid = () => {
  const socialLinks = SocialLinks.filter((social) => social.link.trim());

  return (
    <main className='mx-auto w-full max-w-4xl px-1 pb-12 pt-8 md:pt-12'>
      <header className='max-w-2xl'>
        <p className='mb-4 flex items-center gap-2 text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400'>
          <span className='h-2 w-2 rounded-full bg-emerald-500' />
          Get in touch
        </p>
        <h1 className='text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl dark:text-zinc-50'>
          Let’s make something meaningful.
        </h1>
        <p className='mt-4 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400'>
          Have a project, an idea, or just want to talk engineering? Email is
          the best way to reach me.
        </p>
      </header>

      <section
        aria-label='Email contact'
        className='mt-8 flex flex-col gap-5 border-y border-zinc-200 py-5 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800'
      >
        <div className='min-w-0'>
          <p className='text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400'>
            Write to me
          </p>
          <a
            href={`mailto:${emailAddress}`}
            className='mt-1 inline-block break-all text-lg font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-emerald-700 dark:text-zinc-50 dark:decoration-zinc-700 dark:hover:text-emerald-400'
          >
            {emailAddress}
          </a>
        </div>
        <a
          href={`mailto:${emailAddress}`}
          className='inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400'
        >
          <FaEnvelope aria-hidden='true' />
          Email me
          <FaArrowRight className='text-xs' aria-hidden='true' />
        </a>
      </section>

      <section aria-labelledby='social-links-heading' className='mt-9'>
        <div className='mb-3 flex items-baseline justify-between gap-4'>
          <h2
            id='social-links-heading'
            className='text-lg font-semibold text-zinc-950 dark:text-zinc-50'
          >
            Around the web
          </h2>
          <span className='text-xs text-zinc-500 dark:text-zinc-400'>
            Find me on
          </span>
        </div>

        <ul className='grid gap-x-8 sm:grid-cols-2'>
          {socialLinks.map((social) => (
            <li
              key={social.title}
              className='border-t border-zinc-200 dark:border-zinc-800'
            >
              <a
                href={social.link}
                target='_blank'
                rel='noreferrer'
                className='group flex min-h-[76px] items-center gap-4 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600'
              >
                <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-lg text-zinc-700 transition-colors group-hover:border-emerald-300 group-hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:group-hover:border-emerald-700 dark:group-hover:text-emerald-400'>
                  {social.icon}
                </span>
                <span className='min-w-0 flex-1'>
                  <span className='block font-semibold text-zinc-900 transition-colors group-hover:text-emerald-700 dark:text-zinc-100 dark:group-hover:text-emerald-400'>
                    {social.title}
                  </span>
                  <span className='mt-0.5 block truncate text-sm text-zinc-500 dark:text-zinc-400'>
                    {social.description}
                  </span>
                </span>
                <FaExternalLinkAlt
                  className='shrink-0 text-xs text-zinc-400 transition-colors group-hover:text-emerald-700 dark:group-hover:text-emerald-400'
                  aria-hidden='true'
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ConnectGrid;
