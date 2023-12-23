import HomeContent from '@components/HomeContent';
import About from '@components/About';
import Layout from '@components/Layout';
import BasicDiv from '@ui/BasicDiv';


export default async function Page() {
  return (
    <Layout>
      <BasicDiv>
        <HomeContent />
        <About />
      </BasicDiv>
    </Layout>
  )
}


