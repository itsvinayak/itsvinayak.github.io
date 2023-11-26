import BasicDiv from '@components/BasicDiv';
import Layout from '@components/Layout';
import Divider from '@components/Divider';
import { getAllPost } from '@lib/utils';
import ArticleCard from '@components/ArticleCard';

export default async function Blog() {
  let posts = await getAllPost();
  console.log(posts);
  return (
    <Layout>
      <BasicDiv>
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">My Blog</h2>
          <p className="mt-4 text-zinc-400">Some of the My written work.</p>
        </div>
        <Divider />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 pt-8">
          {posts.map((post) => (
            post.link = `/Blog/${encodeURIComponent(post.slug)}`,
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </BasicDiv>
    </Layout>
  )
}




