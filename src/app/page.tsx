import HomeContent from '@components/HomeContent';
import About from '@components/About';
import Layout from '@components/Layout';
import BasicDiv from '@ui/BasicDiv';
import RecentBlog from '@components/RecentBlog';


export default async function Page() {
  return (
    <Layout>
      <BasicDiv>
        <HomeContent />
        <About />
        <RecentBlog />
      </BasicDiv>
    </Layout>
  )
}


