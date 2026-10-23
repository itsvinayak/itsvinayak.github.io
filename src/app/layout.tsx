import Loader from '@ui/Loader';
import Provider from '@components/Provider';
import { Roboto } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Suspense } from 'react';
//@ts-ignore
import '@/globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { siteStructuredData, siteUrl } from '@lib/seo';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const title = 'Vinayak Sharma | Software Engineer & Technical Creator';
const description =
  'Vinayak Sharma builds reliable payment systems and developer tools, and writes practical guides for software engineers.';

export const metadata: Metadata = {
  title: {
    default: title,
    template: '%s | Vinayak Sharma',
  },
  description: description,
  applicationName: 'Vinayak Sharma',
  authors: [{ name: 'Vinayak Sharma', url: siteUrl }],
  creator: 'Vinayak Sharma',
  publisher: 'Vinayak Sharma',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Vinayak Sharma',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/profile.jpeg', alt: 'Vinayak Sharma' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/profile.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className={roboto.className}>
        <Provider>
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </Provider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
