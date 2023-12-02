import BasicDiv from '@ui/BasicDiv';
import Layout from '@components/Layout';
import Divider from '@ui/Divider';
import { getAllPost } from '@lib/utils';
import ArticleCard from '@ui/ArticleCard';


interface PostProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  slugAsParams: string;
  authors: string[];
  authorsImage: string[];
  tags: string[];
}

export default async function Page() {
  let posts = await getAllPost();
  console.log(posts);
  const featuredPost = posts.pop();
  console.log("featuredPost : ", featuredPost);
  return (
    <Layout>
      <BasicDiv>
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">My Blog</h2>
          <p className="my-4 text-zinc-400">Some of the My written work.</p>
        </div>
        <Divider />
        <article>
          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 pt-8">
            {featuredPost &&
              <ArticleCard post={{
                title: featuredPost.title,
                description: featuredPost.description ?? "",
                date: featuredPost.date,
                slug: featuredPost.slug,
                slugAsParams: featuredPost.slugAsParams,
                authors: featuredPost.authors,
                authorsImage: featuredPost.authorsImage,
                tags: featuredPost.tags,
              }} />
            }
          </div>
          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 pt-8">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={{
                title: post.title,
                description: post.description ?? "",
                date: post.date,
                slug: post.slug,
                slugAsParams: post.slugAsParams,
                authors: post.authors,
                authorsImage: post.authorsImage,
                tags: post.tags,
              }} />
            ))}
          </div>
        </article>
      </BasicDiv>
    </Layout>
  )
}




