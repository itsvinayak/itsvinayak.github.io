import { lazy } from 'react';
const DoubleImageCard = lazy(() => import('@ui/DoubleImageCard'));
import { FaRss } from 'react-icons/fa';

const getBlogData: BlogStatsProps = {
  link: process.env.blogLink || `https://dev.to/itsvinayak`,
  title: process.env.blogTitle || '@dev/itsvinayak',
  description: process.env.blogDescription || '> 2390 Subscribers',
  largeImage: {
    src: '/profile.jpeg',
    alt: 'Vinayak',
  },
  smallImage: {
    src: <FaRss color="black" />,
    alt: 'Rss',
  },
};

interface BlogStatsProps {
  link: string;
  title: string;
  description: string;
  largeImage: {
    src: string;
    alt: string;
  };
  smallImage: {
    src?: any;
    alt: string;
  };
}

const BlogStats = () => {
  return <>{getBlogData && <DoubleImageCard {...getBlogData} />}</>;
};

export default BlogStats;
