import HomeContent from '@components/HomeContent';
import About from '@components/About';
import Layout from '@components/Layout';


export default async function Page() {
  return (
    <Layout>
      <HomeContent />
      <About />
    </Layout>
  )
}


