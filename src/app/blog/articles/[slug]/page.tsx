import type { Metadata } from 'next';
import type { ArticlePageProps } from '@components/types/ArticleProps';
import { notFound } from 'next/navigation';
import { getAllPost, getPostBySlug } from '@lib/utils';
import Layout from '@components/Layout';
import { Mdx } from '@components/mdx/MdxComponents';

const slugAliases: Record<string, string> = {
  Getting_Started_Clojure: 'Getting_Started_with_Clojure',
};

const getPostForRoute = (slug: string | undefined) => {
  const normalizedSlug = slug?.endsWith('.html') ? slug.slice(0, -5) : slug;
  return getPostBySlug(
    slugAliases[normalizedSlug ?? ''] ?? normalizedSlug ?? ''
  );
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = getPostForRoute(params?.slug);

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

// generate path for static generation
export async function generateStaticParams(): Promise<any> {
  const posts = getAllPost();
  const postSlugs = posts.map((post) => post.slugAsParams);
  const aliases = Object.entries(slugAliases)
    .filter(([, canonicalSlug]) => postSlugs.includes(canonicalSlug))
    .map(([alias]) => ({ slug: alias }));
  const developmentHtmlSlugs =
    process.env.NODE_ENV === 'development'
      ? [...postSlugs, ...aliases.map(({ slug }) => slug)].map((slug) => ({
          slug: `${slug}.html`,
        }))
      : [];

  return [
    ...posts.map((post) => ({ slug: post.slugAsParams })),
    ...aliases,
    ...developmentHtmlSlugs,
  ];
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const slug = params?.slug;

  console.log('slug:', slug);

  if (!slug) {
    return notFound();
  }

  const post = getPostForRoute(slug);

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
