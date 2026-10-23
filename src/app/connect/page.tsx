import Layout from '@components/Layout';
import ConnectGrid from '@components/ConnectGrid';
import type { Metadata } from 'next';
import { createPageMetadata } from '@lib/seo';

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Connect',
    description:
      'Contact Vinayak Sharma about software engineering, payment systems, developer tools, writing, and speaking.',
    path: '/connect',
  }),
};

const Page = () => {
  return (
    <Layout>
      <ConnectGrid />
    </Layout>
  );
};

export default Page;
