'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  FaCodeBranch,
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
} from 'react-icons/fa';

type Repository = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  archived: boolean;
  updated_at: string;
};

type PublicEvent = {
  type: string;
  created_at: string;
  payload?: {
    commits?: unknown[];
  };
};

type GitHubData = {
  repositories: Repository[];
  events: PublicEvent[];
};

const username = 'itsvinayak';
const githubProfileUrl = `https://github.com/${username}`;
const contributionChartUrl = `https://ghchart.rshah.org/${username}`;
const numberFormat = new Intl.NumberFormat('en-US');

const GitHubShowcase = () => {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const loadGitHubData = async () => {
      setLoading(true);
      setError(false);

      try {
        const [repositoriesResponse, eventsResponse] = await Promise.all([
          fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&type=owner`,
            { signal: controller.signal }
          ),
          fetch(
            `https://api.github.com/users/${username}/events/public?per_page=100`,
            {
              signal: controller.signal,
            }
          ),
        ]);

        if (!repositoriesResponse.ok || !eventsResponse.ok) {
          throw new Error('GitHub data is temporarily unavailable.');
        }

        const [repositories, events] = (await Promise.all([
          repositoriesResponse.json(),
          eventsResponse.json(),
        ])) as [Repository[], PublicEvent[]];

        setData({ repositories, events });
      } catch (loadError) {
        if (!controller.signal.aborted) {
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    void loadGitHubData();
    return () => controller.abort();
  }, [reloadKey]);

  const repositories = (data?.repositories ?? []).filter(
    (repository) => !repository.fork && !repository.archived
  );
  const topRepositories = [...repositories]
    .sort((first, second) => second.stargazers_count - first.stargazers_count)
    .slice(0, 4);
  const totalStars = repositories.reduce(
    (total, repository) => total + repository.stargazers_count,
    0
  );

  const recentEvents = (data?.events ?? []).filter(
    (event) =>
      Date.now() - new Date(event.created_at).getTime() <=
      30 * 24 * 60 * 60 * 1000
  );
  const commitCount = recentEvents.reduce(
    (total, event) =>
      total +
      (event.type === 'PushEvent'
        ? Math.max(event.payload?.commits?.length ?? 0, 1)
        : 0),
    0
  );
  const activeDays = new Set(
    recentEvents.map((event) => new Date(event.created_at).toDateString())
  ).size;

  const languageCounts = repositories.reduce<Record<string, number>>(
    (counts, repository) => {
      if (repository.language) {
        counts[repository.language] = (counts[repository.language] ?? 0) + 1;
      }
      return counts;
    },
    {}
  );
  const languages = Object.entries(languageCounts)
    .sort((first, second) => second[1] - first[1])
    .slice(0, 5);
  const languageTotal = Object.values(languageCounts).reduce(
    (total, count) => total + count,
    0
  );

  return (
    <section
      aria-labelledby='github-pulse-heading'
      className='my-16 border-y border-zinc-200 py-8 md:py-10 dark:border-zinc-800'
    >
      <header className='flex flex-wrap items-start justify-between gap-4'>
        <div>
          <div className='mb-3 flex items-center gap-2 text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400'>
            <span className='h-2 w-2 rounded-full bg-emerald-500' />
            Open source activity
          </div>
          <h2
            id='github-pulse-heading'
            className='text-2xl font-bold text-zinc-950 sm:text-3xl dark:text-zinc-50'
          >
            GitHub Pulse
          </h2>
          <p className='mt-2 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
            A snapshot of what I’m building, exploring, and sharing in public.
          </p>
        </div>

        <a
          href={githubProfileUrl}
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:border-zinc-500 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800'
        >
          <FaGithub aria-hidden='true' />
          Profile
          <FaExternalLinkAlt className='text-[10px]' aria-hidden='true' />
        </a>
      </header>

      <div className='mt-8 grid grid-cols-2 border-y border-zinc-200 sm:grid-cols-4 dark:border-zinc-800'>
        {[
          {
            label: 'Public projects',
            value: data ? repositories.length : null,
          },
          { label: 'Stars across projects', value: data ? totalStars : null },
          { label: 'Commits · 30 days', value: data ? commitCount : null },
          { label: 'Active days · 30 days', value: data ? activeDays : null },
        ].map((metric) => (
          <div
            key={metric.label}
            className='border-b border-zinc-200 py-4 pr-3 last:border-b-0 sm:border-b-0 sm:border-r sm:px-4 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0 dark:border-zinc-800'
          >
            <p className='text-2xl font-semibold tabular-nums text-zinc-950 dark:text-zinc-50'>
              {loading && metric.value === null
                ? '...'
                : metric.value === null
                  ? '--'
                  : numberFormat.format(metric.value)}
            </p>
            <p className='mt-1 text-xs text-zinc-500 dark:text-zinc-400'>
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      <div className='grid gap-10 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12'>
        <section aria-labelledby='top-repositories-heading'>
          <div className='mb-4 flex items-baseline justify-between gap-4'>
            <h3
              id='top-repositories-heading'
              className='text-lg font-semibold text-zinc-950 dark:text-zinc-50'
            >
              Top Repositories by Stars
            </h3>
            <span className='text-xs text-zinc-500 dark:text-zinc-400'>
              Ranked by stars
            </span>
          </div>

          {loading ? (
            <p className='py-5 text-sm text-zinc-500 dark:text-zinc-400'>
              Loading repositories...
            </p>
          ) : topRepositories.length ? (
            <ol className='divide-y divide-zinc-200 dark:divide-zinc-800'>
              {topRepositories.map((repository, index) => (
                <li key={repository.id}>
                  <a
                    href={repository.html_url}
                    target='_blank'
                    rel='noreferrer'
                    className='group grid grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-3 py-4'
                  >
                    <span className='font-mono text-xs text-zinc-400'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className='min-w-0'>
                      <span className='block truncate font-semibold text-zinc-900 transition group-hover:text-emerald-700 dark:text-zinc-100 dark:group-hover:text-emerald-400'>
                        {repository.name}
                      </span>
                      <span className='mt-1 block truncate text-xs text-zinc-500 dark:text-zinc-400'>
                        {repository.description ||
                          repository.language ||
                          'Open source project'}
                      </span>
                    </span>
                    <span className='inline-flex items-center gap-1 text-sm tabular-nums text-zinc-600 dark:text-zinc-300'>
                      <FaStar className='text-amber-500' aria-hidden='true' />
                      {numberFormat.format(repository.stargazers_count)}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          ) : (
            <p className='py-5 text-sm text-zinc-500 dark:text-zinc-400'>
              {error
                ? 'Repository data is temporarily unavailable.'
                : 'No public repositories found.'}
            </p>
          )}
        </section>

        <section
          aria-labelledby='languages-heading'
          className='border-t border-zinc-200 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 dark:border-zinc-800'
        >
          <div className='mb-4 flex items-center gap-2'>
            <FaCodeBranch
              className='text-emerald-700 dark:text-emerald-400'
              aria-hidden='true'
            />
            <h3
              id='languages-heading'
              className='text-lg font-semibold text-zinc-950 dark:text-zinc-50'
            >
              Languages Used Across Projects
            </h3>
          </div>

          {loading ? (
            <p className='py-5 text-sm text-zinc-500 dark:text-zinc-400'>
              Loading language mix...
            </p>
          ) : languages.length ? (
            <ul className='space-y-4'>
              {languages.map(([language, count]) => {
                const percentage = Math.round((count / languageTotal) * 100);
                return (
                  <li key={language}>
                    <div className='mb-2 flex items-center justify-between gap-3 text-sm'>
                      <span className='font-medium text-zinc-800 dark:text-zinc-200'>
                        {language}
                      </span>
                      <span className='text-xs tabular-nums text-zinc-500 dark:text-zinc-400'>
                        {count} {count === 1 ? 'project' : 'projects'} ·{' '}
                        {percentage}%
                      </span>
                    </div>
                    <div className='h-1.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800'>
                      <div
                        className='h-full rounded-full bg-emerald-600 dark:bg-emerald-400'
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className='py-5 text-sm text-zinc-500 dark:text-zinc-400'>
              {error
                ? 'Language data is temporarily unavailable.'
                : 'No language data available.'}
            </p>
          )}
        </section>
      </div>

      <div className='mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800'>
        <div className='mb-3 flex items-baseline justify-between gap-3'>
          <h3 className='text-sm font-semibold text-zinc-800 dark:text-zinc-200'>
            Contribution activity
          </h3>
          <span className='text-xs text-zinc-500 dark:text-zinc-400'>
            Past year
          </span>
        </div>
        <a
          href={githubProfileUrl}
          target='_blank'
          rel='noreferrer'
          aria-label='View GitHub contribution activity'
          className='block w-full overflow-x-auto'
        >
          <Image
            src={contributionChartUrl}
            alt='GitHub contribution activity for itsvinayak'
            width={663}
            height={104}
            unoptimized
            className='h-auto min-w-[600px] max-w-full'
          />
        </a>
      </div>

      {error && (
        <div className='mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-500 dark:text-zinc-400'>
          <p>GitHub API is rate-limited or temporarily unavailable.</p>
          <button
            type='button'
            onClick={() => setReloadKey((currentKey) => currentKey + 1)}
            className='font-semibold text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-400'
          >
            Retry
          </button>
        </div>
      )}
    </section>
  );
};

export default GitHubShowcase;
