import HomeContent from '@components/HomeContent';
import About from '@components/About';
import Layout from '@components/Layout';
import BasicDiv from '@ui/BasicDiv';
import Work from '@components/Work';
import ImageContent from '@components/ImageContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home Page of Vinayaks Personal Website',
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
