import HomeContent from '@components/HomeContent';
import About from '@components/About';
import Layout from '@components/Layout';
import BasicDiv from '@ui/BasicDiv';
import Work from '@components/Work';

export default async function Page() {
  return (
    <Layout>
      <BasicDiv>
        <HomeContent />
        <About />
        <Work />
      </BasicDiv>
    </Layout>
  );
}
