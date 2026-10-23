import Loader from '@ui/Loader';
import Provider from '@components/Provider';
import { Roboto } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Suspense } from 'react';
import '@/globals.css';
import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react"


const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

let title = 'vinayak';
let description = 'My Personal Website';

if (process.env.DEPLOYMENT_TYPE === 'development') {
  title += ' | development mode enabled';
}

export const metadata: Metadata = {
  title: title,
  description: description,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://itsvinayak.github.io'
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
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
