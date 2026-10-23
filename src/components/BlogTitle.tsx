import { formatDate } from '@lib/utils';
import { BlogTitleProps } from '@components/types/BlogTitleProps';

const BlogTitle: React.FC<BlogTitleProps> = ({
  title,
  date,
  authors,
  tags,
}) => {
  return (
    <header className='mb-8 border-b border-zinc-200 pb-7 sm:mb-10 sm:pb-9 dark:border-zinc-800'>
      <p className='mb-3 text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400'>
        Article <span className='px-1 text-zinc-400'>/</span> {formatDate(date)}
      </p>
      <h1 className='max-w-4xl text-left text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl md:text-5xl dark:text-zinc-50'>
        {title}
      </h1>
      <div className='mt-5 flex flex-wrap items-center gap-x-4 gap-y-3'>
        <p className='text-sm text-zinc-600 dark:text-zinc-400'>
          By{' '}
          <span className='font-medium text-zinc-900 dark:text-zinc-200'>
            {authors?.join(', ') || 'Vinayak'}
          </span>
        </p>
        {tags && tags.length > 0 && (
          <ul className='flex flex-wrap gap-2' aria-label='Article topics'>
            {tags.map((tag) => (
              <li
                key={tag}
                className='rounded-sm bg-zinc-100 px-2 py-1 text-[11px] font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400'
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default BlogTitle;
