import HomeContent from '@components/HomeContent';
import About from '@components/About';
import Layout from '@components/Layout';
import BasicDiv from '@ui/BasicDiv';
import Work from '@components/Work';
import ImageContent from '@components/ImageContent';
import type { Metadata } from 'next';
import { createPageMetadata } from '@lib/seo';

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Vinayak Sharma | Software Engineer & Technical Creator',
    description:
      'I build reliable payment systems and developer tools, and share practical engineering guides, videos, and resources.',
    path: '/',
  }),
  title: { absolute: 'Vinayak Sharma | Software Engineer & Technical Creator' },
};

export default async function Page() {
  return (
    <Layout>
      <BasicDiv>
        <HomeContent />
        <About />
        <Work />
        <ImageContent />
      </BasicDiv>
    </Layout>
  );
}
