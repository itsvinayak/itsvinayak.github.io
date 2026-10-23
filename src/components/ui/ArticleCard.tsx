import Link from 'next/link';
import React from 'react';
import { formatDate } from '@lib/utils';
import { FaArrowRight } from 'react-icons/fa';

interface ArticleCardProps {
  index: number;
  post: {
    title: string;
    description: string;
    date: string;
    slug: string;
    slugAsParams: string;
    authors?: string[];
    authorsImage?: string[];
    tags?: string[];
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post, index }) => {
  const { title, description, date, slugAsParams, tags } = post;
  const postLink = slugAsParams ? `/blog/articles/${slugAsParams}` : post.slug;

  return (
    <article className='group grid gap-3 border-b border-zinc-200 py-6 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5 sm:py-7 dark:border-zinc-800'>
      <span className='hidden pt-1 font-mono text-xs tabular-nums text-zinc-400 sm:block dark:text-zinc-600'>
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className='min-w-0'>
        <div className='mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400'>
          <time dateTime={date}>{formatDate(date)}</time>
          <span aria-hidden='true' className='text-zinc-300 dark:text-zinc-700'>
            /
          </span>
          <span>{post.authors?.join(', ') || 'Vinayak'}</span>
        </div>
        <Link
          href={postLink}
          className='group/title inline-flex max-w-full items-start gap-2'
        >
          <h2 className='text-lg font-semibold leading-snug text-zinc-950 transition-colors group-hover/title:text-emerald-700 sm:text-xl dark:text-zinc-100 dark:group-hover/title:text-emerald-400'>
            {title}
          </h2>
          <FaArrowRight
            className='mt-1.5 shrink-0 text-xs text-emerald-700 opacity-0 transition-all group-hover/title:translate-x-1 group-hover/title:opacity-100 dark:text-emerald-400'
            aria-hidden='true'
          />
        </Link>
        {description && (
          <p className='mt-2 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
            {description}
          </p>
        )}
        <div className='mt-3 flex flex-wrap items-center gap-2'>
          {tags?.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className='rounded-sm bg-zinc-100 px-2 py-1 text-[11px] font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
