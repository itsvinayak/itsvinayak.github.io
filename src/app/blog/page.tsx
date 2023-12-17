import React from 'react';
import BasicDiv from '@ui/BasicDiv';
import Layout from '@components/Layout';
import { getAllPost } from '@lib/utils';
import ArticleCard from '@ui/ArticleCard';
import { SinglePostProps } from '@components/types/ArticleProps';

const Page = async () => {
  const posts: SinglePostProps[] = await getAllPost();
  const featuredPost: SinglePostProps | undefined = posts.pop() as SinglePostProps | undefined;
  return (
    <Layout>
      <BasicDiv>
        <div className="mx-auto lg:mx-0 max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">My Blog</h2>
          <p className="my-4 text-zinc-400">Some of My written work.</p>
        </div>
        <hr className="border-1" />
        <article>
          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 pt-8">
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
          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 pt-8">
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