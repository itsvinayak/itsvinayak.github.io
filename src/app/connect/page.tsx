import Layout from '@components/Layout';
import CardGrid from '@ui/CardGrid';
import { LinkCardProps } from '@components/types/LinkCardProps';
import { SocialLinks } from '@components/data/social';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connect',
  description: 'Connect Page of Vinayaks Personal Website',
};

const classProps = [
  'lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2',
  'lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1',
  'lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-1',
  'lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-2',
  'lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-2',
  'lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-4',
];

const Links: LinkCardProps[] = [];

SocialLinks.map((link: LinkCardProps, index: number) => {
  link.classNameBox = classProps[index];
  Links.push(link);
});

const Page = () => {
  return (
    <Layout>
      <div className='grid gap-4 px-9 pt-5 lg:grid-cols-4 lg:px-0'>
        {Links.map((link: LinkCardProps) => (
          <CardGrid
            key={link.title}
            title={link.title}
            description={link.description}
            image={link.image}
            icon={link.icon}
            link={link.link}
            classNameBox={link.classNameBox}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Page;
