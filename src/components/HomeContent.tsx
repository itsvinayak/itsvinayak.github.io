import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const technologyGroups = [
  {
    label: 'Backend',
    technologies: ['Python', 'Django', 'Node.js', 'RabbitMQ'],
  },
  { label: 'Web', technologies: ['JavaScript', 'Next.js', 'React'] },
  { label: 'Quality', technologies: ['Selenium', 'Redis'] },
];

const HomeContent = () => {
  return (
    <section aria-labelledby='home-intro-title' className='pb-8 md:pb-12'>
      <p className='mb-4 flex items-center gap-2 text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400'>
        <span className='h-2 w-2 rounded-full bg-emerald-500' />
        Software Engineer <span aria-hidden='true'>/</span> Fintech{' '}
        <span aria-hidden='true'>/</span> Creator
      </p>

      <h1
        id='home-intro-title'
        className='text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl md:text-6xl dark:text-zinc-50'
      >
        Hey, I’m Vinayak.
      </h1>

      <p className='mt-5 max-w-2xl text-base leading-7 text-zinc-700 md:text-lg md:leading-8 dark:text-zinc-300'>
        I build reliable payment systems and developer tools. I also write and
        create practical content for engineers.
      </p>

      <div className='mt-7 flex flex-wrap items-center gap-x-6 gap-y-3'>
        <Link
          href='/work'
          className='inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 transition-colors hover:text-emerald-700 dark:text-zinc-50 dark:hover:text-emerald-400'
        >
          Explore my work
          <FaArrowRight className='text-xs' aria-hidden='true' />
        </Link>
        <Link
          href='/blog'
          className='text-sm font-semibold text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-zinc-50'
        >
          Read the blog
        </Link>
      </div>

      <div className='mt-9 grid gap-5 border-t border-zinc-200 pt-5 sm:grid-cols-3 sm:gap-4 dark:border-zinc-800'>
        {technologyGroups.map((group) => (
          <div key={group.label}>
            <h2 className='mb-2 text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400'>
              {group.label}
            </h2>
            <ul className='flex flex-wrap gap-x-2 gap-y-1.5'>
              {group.technologies.map((technology) => (
                <li
                  key={technology}
                  className='text-sm text-zinc-800 dark:text-zinc-200'
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeContent;
