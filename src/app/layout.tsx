import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/globals.css';
import Loader from '@ui/Loader';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] })

let title = 'vinayak'
let description = 'vinayak'

// setting envoriment 
if (process.env.NODE_ENV === 'development') {
  console.log('running app in development');
  title += ' | development mode enabled'
} else {
  console.log('running app in production');
  console.log = () => { };
}



export const metadata: Metadata = {
  title: title,
  description: description,
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loader />}>
        {children}
        </Suspense>
      </body>
    </html>
  )
}
