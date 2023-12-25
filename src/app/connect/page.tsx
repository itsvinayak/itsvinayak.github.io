import Layout from '@components/Layout';
import CardGrid from '@ui/CardGrid';
import { LinkCardProps } from '@components/types/LinkCardProps';

const Links: LinkCardProps[] = [
  {
    title: 'Github',
    link: 'https://github.com/itsvinayak',
    description: 'My Github Profile',
    image: '',
    icon: <FaGithub />,
    classNameBox: 'lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2',
  },
  {
    title: 'Youtube',
    link: 'https://www.youtube.com/channel/UC3Vrabb-Q563wejSp3KG8fA',
    description: 'My Youtube Channel',
    image: '/Social/youtube.svg',
    icon: <FaYoutube />,
    classNameBox: 'lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1',
  },
  {
    title: 'Hashnode',
    link: 'https://itsvinayak.hashnode.dev/',
    description: 'My Hashnode Blog',
    image: '',
    icon: <FaHashnode />,
    classNameBox: 'lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-1',
  },
  {
    title: 'Dev.to',
    link: 'https://dev.to/itsvinayak',
    description: 'My dev.to Blog',
    image: '',
    icon: <FaDev />,
    classNameBox: 'lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-2',
  },
  {
    title: 'Stackoverflow',
    link: '',
    description: 'My Stackoverflow Profile',
    image: '',
    icon: <FaStackOverflow />,
    classNameBox: 'lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-2',
  },
  {
    title: 'substack',
    link: 'https://itsvinayak.substack.com/',
    description: 'My substack Blog',
    image: '',
    icon: <BsSubstack />,
    classNameBox: 'lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-4',
  },
];

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
