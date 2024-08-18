import type { Metadata } from 'next';
import type { ArticlePageProps } from '@components/types/ArticleProps';
import { notFound } from 'next/navigation';
import { getAllPost, getPostBySlug } from '@lib/utils';
import Layout from '@components/Layout';
import { Mdx } from '@components/mdx/MdxComponents';


export async function generateMetadata({params}: any): Promise<Metadata> {
  const post = getPostBySlug(params?.slug);

  if (!post) {
    return {
      title: 'Post Title ',
      description: 'Post Description',
    };
  }

  const { title, description, image } = post;


  let metaDate = {
    title,
    description,
    openGraph: {
      title,
      description,
      url: process.env.NEXT_PUBLIC_SITE_URL,
      images: [
        {
          url: image || '',
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
  };
  console.log('metaDate:', metaDate);
  return metaDate;
}


export async function generateStaticParams(): Promise<any>{
  let posts = getAllPost();
  return posts.map((post) => ({
    slug: post.slug
  }))
}

export default function ArticlePage({ params }: any) {
  console.log('params:', params);
  const slug = params?.slug;

  console.log('slug:', slug);

  if (!slug) {
    return notFound();
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  console.log('post:', post?.body?.code);

  const code: string = post?.body?.code || '';
  const { title, date, authors, image } = post;

  console.log('code, title, date, authors, image:', {
    code,
    title,
    date,
    authors,
    image,
  });

  if (!code) {
    return notFound();
  }

  return (
    <Layout>
      <Mdx
        code={code}
        title={title}
        imageSrc={image}
        date={date}
        authors={authors}
      />
    </Layout>
  );
}
