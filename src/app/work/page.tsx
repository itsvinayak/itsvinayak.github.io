import Layout from '@components/Layout';
import BasicDiv from '@ui/BasicDiv';
import TimeLine from '@ui/TimeLine';
import { WorkData } from '@components/data/work';

for (let i = 0; i < WorkData.length; i++) {
  let data = WorkData[i]?.description?.split(' - ');
  if (data.length > 1) {
    WorkData[i].description = data.map((item: any, key: any) => {
      return <li className='list-disc' key={key}>{item}<br /></li>
    });
  }
}

export default function Page() {
  return (
    <Layout>
      <BasicDiv>
        <TimeLine items={WorkData} />
      </BasicDiv>
    </Layout>
  );
}
