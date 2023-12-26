import { notFound } from 'next/navigation';
import { getPostBySlug } from '@lib/utils';
import Layout from '@components/Layout';
import { Mdx } from '@components/mdx/MdxComponents';
import { ArticlePageProps } from '@components/types/ArticleProps';
import type { Metadata } from 'next';


export async function generateMetadata(
  slug: string
): Promise<Metadata | undefined> {
  const post = getPostBySlug(slug);
  if (!post) {
    return undefined;
  }
  const { title, description, image } = post;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: process.env.NEXT_PUBLIC_SITE_URL,
      images: [
        {
          url: image || "",
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  console.log('params: ', params);
  const slug = params?.slug;
  console.log('slug : ', slug);
  if (!slug) {
    return notFound();
  }
  const post = getPostBySlug(slug);
  if (!post) {
    return notFound();
  }
  console.log('post : ', post?.body?.code);
  const code: string = post?.body?.code ?? '';
  const { title, date, authors, image } = post;
  console.log('code, title, date, authors, image: ', {
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
