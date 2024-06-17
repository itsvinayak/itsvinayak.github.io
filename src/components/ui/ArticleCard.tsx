import ReadMore from '@ui/ReadMore';
import Link from 'next/link';
import AuthorsCard from '@ui/AuthorsCard';
import TextTag from '@ui/TextTag';
import React from 'react';
import { formatDate } from '@lib/utils';

interface ArticleCardProps {
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

const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  console.log('serving post -> ', post);
  let {
    title,
    description,
    date,
    slug,
    slugAsParams,
    authors,
    authorsImage,
    tags,
  } = post;
  if (!authorsImage) {
    authorsImage = ['/profile.jpeg'];
  }
  if (!tags) {
    tags = ['JS', 'React', 'Next.js'];
  }
  let postLink: string = '';
  if (slugAsParams) {
    postLink = `/blog/${slug}`;
  }
  return (
    <Link href={postLink}>
      <article
        className='group relative overflow-hidden 
    rounded-xl border border-zinc-600 p-2
     duration-700 hover:border-zinc-400/50 hover:bg-zinc-800/10  md:gap-8 md:p-8'
      >
        <h2 className='font-display text-xl font-medium text-black duration-1000 lg:text-3xl dark:text-zinc-200 dark:group-hover:text-white'>
          {title}
        </h2>
        <div className='py-2'>
          <span className='drop-shadow-orange text-xs text-gray-800 duration-1000 dark:text-slate-200 dark:group-hover:border-zinc-200 dark:group-hover:text-white'>
            <time dateTime={date}>{formatDate(date)}</time>
          </span>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <div>
            {authors &&
              authorsImage &&
              authors.map((author, index) => (
                <AuthorsCard
                  key={index}
                  author={{
                    name: author,
                    image: authorsImage?.[index] ?? '',
                  }}
                />
              ))}
          </div>
          <div>
            {tags &&
              tags.map((tag, index) => (
                <TextTag
                  key={index}
                  className='m-1 text-xs text-slate-200'
                  text={tag}
                  logo={''}
                />
              ))}
          </div>
        </div>
        <p className='mt-4 text-sm  text-gray-900 duration-1000 group-hover:text-gray-800 dark:text-zinc-400 dark:group-hover:text-zinc-200'>
          {description}
        </p>
        <div className='mt-4 flex items-center justify-between'>
          <ReadMore link={postLink} />
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
