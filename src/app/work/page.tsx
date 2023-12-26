import Layout from '@components/Layout';
import BasicDiv from '@ui/BasicDiv';
import TimeLine from '@ui/TimeLine';
import { WorkData } from '@components/data/work';
import Heading from '@components/ui/Heading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Work Page of Vinayaks Personal Website',
};

for (let i = 0; i < WorkData.length; i++) {
  let data = WorkData[i]?.description?.split(' - ');
  if (data.length > 1) {
    WorkData[i].description = data.map((item: any, key: any) => {
      return (
        <li className='ml-3 list-disc' key={key}>
          {item}
        </li>
      );
    });
  }
}

export default function Page() {
  return (
    <Layout>
      <BasicDiv>
        <div className='mb-10'>
          <Heading heading='Work' className='text-5xl md:text-5xl' />
        </div>
        <TimeLine items={WorkData} />
      </BasicDiv>
    </Layout>
  );
}
