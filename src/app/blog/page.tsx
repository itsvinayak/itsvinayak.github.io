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

const Page = async () => {
  const posts: SinglePostProps[] = await getAllPost();
  const featuredPost: SinglePostProps | undefined = posts.pop() as
    | SinglePostProps
    | undefined;
  return (
    <Layout>
      <BasicDiv>
        <div className='mx-auto max-w-5xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight dark:text-zinc-100 text-black sm:text-4xl'>
            My Blog
          </h2>
          <p className='my-4 dark:text-zinc-400 text-black'>Some of My written work.</p>
        </div>
        <hr className='h-px dark:bg-gray-200 border-0 bg-gray-700'/>
        <article>
          <div className='mx-auto grid grid-cols-1 gap-8 pt-8 lg:grid-cols-1'>
            {featuredPost && (
              <ArticleCard
                post={{
                  title: featuredPost.title,
                  description: featuredPost.description ?? '',
                  date: featuredPost.date,
                  slug: featuredPost.slug,
                  slugAsParams: featuredPost.slugAsParams,
                  authors: featuredPost.authors,
                  authorsImage: featuredPost.authorsImage,
                  tags: featuredPost.tags,
                }}
              />
            )}
          </div>
          <div className='mx-auto grid grid-cols-1 gap-8 pt-8 lg:grid-cols-2'>
            {posts.map((post: SinglePostProps) => (
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
              />
            ))}
          </div>
        </article>
      </BasicDiv>
    </Layout>
  );
};

export default Page;
