import type { Metadata } from 'next';

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://itsvinayak.github.io';

export const siteUrl = configuredSiteUrl.replace(/\/+$/, '');

const siteName = 'Vinayak Sharma';
const defaultImage = '/profile.jpeg';

export const createPageMetadata = ({
  title,
  description,
  path,
  image = defaultImage,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: path,
    siteName,
    locale: 'en_US',
    type: 'website',
    images: [{ url: image, alt: siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
  },
});

export const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: 'en-US',
      publisher: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: siteName,
      url: siteUrl,
      jobTitle: 'Software Engineer and Technical Creator',
      image: `${siteUrl}${defaultImage}`,
      sameAs: [
        'https://github.com/itsvinayak',
        'https://www.youtube.com/channel/UC3Vrabb-Q563wejSp3KG8fA',
        'https://itsvinayak.hashnode.dev/',
        'https://dev.to/itsvinayak',
        'https://itsvinayak.substack.com/',
      ],
    },
  ],
};
