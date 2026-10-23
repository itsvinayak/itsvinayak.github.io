import type { Metadata } from 'next';
import type { ArticlePageProps } from '@components/types/ArticleProps';
import { notFound } from 'next/navigation';
import { getAllPost, getPostBySlug } from '@lib/utils';
import Layout from '@components/Layout';
import { Mdx } from '@components/mdx/MdxComponents';
import { createPageMetadata, siteUrl } from '@lib/seo';
import { format, isValid, parse } from 'date-fns';
import { enUS } from 'date-fns/locale';

const slugAliases: Record<string, string> = {
  Getting_Started_Clojure: 'Getting_Started_with_Clojure',
};

const getPostForRoute = (slug: string | undefined) => {
  const normalizedSlug = slug?.endsWith('.html') ? slug.slice(0, -5) : slug;
  return getPostBySlug(
    slugAliases[normalizedSlug ?? ''] ?? normalizedSlug ?? ''
  );
};

const getPublishedAt = (date: string) => {
  const parsedDate = parse(date, 'dd, MMM yyyy', new Date(), { locale: enUS });
  return isValid(parsedDate) ? format(parsedDate, 'yyyy-MM-dd') : undefined;
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = getPostForRoute(params?.slug);

  if (!post) {
    return {
      title: 'Article not found',
      robots: { index: false, follow: false },
    };
  }

  const { title, description, image, date, authors, slugAsParams } = post;
  const canonicalPath = `/blog/articles/${slugAsParams}`;
  const publishedAt = getPublishedAt(date);
  const articleDescription =
    description ||
    `Read ${title} by Vinayak Sharma, with practical insights for software engineers.`;
  const metadata = createPageMetadata({
    title,
    description: articleDescription,
    path: canonicalPath,
    image: image
      ? image.startsWith('http')
        ? image
        : `${siteUrl}${image.startsWith('/') ? '' : '/'}${image}`
      : `${siteUrl}/profile.jpeg`,
  });

  return {
    ...metadata,
    openGraph: {
      title,
      description: articleDescription,
      url: canonicalPath,
      siteName: 'Vinayak Sharma',
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      authors: authors?.length ? authors : ['Vinayak Sharma'],
      images: [{ url: image || '/profile.jpeg', alt: title }],
    },
  };
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

  if (!slug) {
    return notFound();
  }

  const post = getPostForRoute(slug);

  if (!post) {
    return notFound();
  }

  const code: string = post?.body?.code || '';
  const { title, date, authors, image } = post;

  if (!code) {
    return notFound();
  }

  const publishedAt = getPublishedAt(date);

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description:
      post.description ||
      `Read ${title} by Vinayak Sharma, with practical insights for software engineers.`,
    image: image || '/profile.jpeg',
    datePublished: publishedAt,
    author: (authors?.length ? authors : ['Vinayak Sharma']).map((name) => ({
      '@type': 'Person',
      name,
    })),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/articles/${post.slugAsParams}`,
    },
    publisher: {
      '@type': 'Person',
      name: 'Vinayak Sharma',
      url: siteUrl,
    },
  };

  return (
    <Layout>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData).replace(
            /</g,
            '\\u003c'
          ),
        }}
      />
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
