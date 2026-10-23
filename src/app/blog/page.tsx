import React from 'react';
import BasicDiv from '@ui/BasicDiv';
import Layout from '@components/Layout';
import { getAllPost } from '@lib/utils';
import ArticleCard from '@ui/ArticleCard';
import { SinglePostProps } from '@components/types/ArticleProps';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog Page of Vinayaks Personal Website',
};

const Page = () => {
  const posts: SinglePostProps[] = getAllPost();
  return (
    <Layout>
      <BasicDiv className='w-full'>
        <header className='w-full max-w-5xl pb-7'>
          <p className='mb-3 text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400'>
            Notes, guides &amp; field reports
          </p>
          <h1 className='text-left text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-100'>
            My Blog
          </h1>
          <div className='mt-4 flex flex-wrap items-center justify-between gap-3'>
            <p className='max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
              Practical notes on backend engineering, developer tools, and the
              systems behind modern software.
            </p>
            <span className='text-xs font-medium tabular-nums text-zinc-500 dark:text-zinc-500'>
              {String(posts.length).padStart(2, '0')} articles
            </span>
          </div>
        </header>
        <section
          aria-label='Articles'
          className='w-full border-t border-zinc-200 dark:border-zinc-800'
        >
          {posts.map((post: SinglePostProps, index) => (
            <ArticleCard
              key={post.slug}
              post={{
                title: post.title,
                description: post.description ?? '',
                date: post.date,
                slug: post.slug,
                slugAsParams: post.slugAsParams,
                authors: post.authors,
                authorsImage: post.authorsImage,
                tags: post.tags,
              }}
              index={index}
            />
          ))}
        </section>
      </BasicDiv>
    </Layout>
  );
};

export default Page;
