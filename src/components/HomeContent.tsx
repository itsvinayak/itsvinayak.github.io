import Link from 'next/link';
import {
  FaArrowRight,
  FaCheckCircle,
  FaCloud,
  FaCode,
  FaServer,
} from 'react-icons/fa';

const technologyGroups = [
  {
    label: 'Backend',
    icon: FaServer,
    technologies: ['Python', 'Django', 'Node.js', 'RabbitMQ'],
  },
  {
    label: 'Web',
    icon: FaCode,
    technologies: ['JavaScript', 'Next.js', 'React'],
  },
  {
    label: 'DevOps',
    icon: FaCloud,
    technologies: ['Docker', 'Git', 'Kubernetes', 'Ansible'],
  },
  {
    label: 'Quality',
    icon: FaCheckCircle,
    technologies: ['Selenium', 'Redis'],
  },
];

const HomeContent = () => {
  return (
    <section aria-labelledby='home-intro-title' className='pb-8 md:pb-12'>
      <p className='intro-reveal mb-4 flex items-center gap-2 text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400'>
        <span className='h-2 w-2 rounded-full bg-emerald-500' />
        Software Engineer <span aria-hidden='true'>/</span> Fintech{' '}
        <span aria-hidden='true'>/</span> Creator
      </p>

      <h1
        id='home-intro-title'
        className='intro-reveal font-serif text-4xl font-medium leading-tight text-zinc-950 sm:text-5xl md:text-6xl dark:text-zinc-50'
        style={{ animationDelay: '80ms' }}
      >
        Hey, I’m Vinayak.
      </h1>

      <p
        className='intro-reveal mt-5 max-w-2xl text-base leading-7 text-zinc-700 md:text-lg md:leading-8 dark:text-zinc-300'
        style={{ animationDelay: '160ms' }}
      >
        I build reliable payment systems and developer tools. I also write and
        create practical content for engineers.
      </p>

      <div
        className='intro-reveal mt-7 flex flex-wrap items-center gap-x-6 gap-y-3'
        style={{ animationDelay: '240ms' }}
      >
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

      <div className='mt-9 grid gap-5 border-t border-zinc-200 pt-5 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 dark:border-zinc-800'>
        {technologyGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <div
              key={group.label}
              className='intro-reveal'
              style={{ animationDelay: `${320 + index * 90}ms` }}
            >
              <h2 className='mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400'>
                <Icon
                  className='text-[11px] text-emerald-700 dark:text-emerald-400'
                  aria-hidden='true'
                />
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
          );
        })}
      </div>
    </section>
  );
};

export default HomeContent;
