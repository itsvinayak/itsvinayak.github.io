import Loader from '@ui/Loader';
import Provider from '@components/Provider';
import { Roboto } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Suspense } from 'react';
import '@/globals.css';
import type { Metadata } from 'next';



console.log('process.env loaded  ', process.env);

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

let title = 'vinayak';
let description = 'My Personal Website';

// setting envoriment
console.log('Loading Env in ', process.env.DEPLOYMENT_TYPE);
const projectDir = process.cwd();
console.log('projectDir ', projectDir);
if (process.env.DEPLOYMENT_TYPE === 'development') {
  console.log('running app in development');
  title += ' | development mode enabled';
} else {
  console.log('running app in production');
  console.log = () => {};
}

export const metadata: Metadata = {
  title: title,
  description: description,
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
      </body>
    </html>
  );
}
