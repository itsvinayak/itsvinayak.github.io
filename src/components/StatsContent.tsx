import { lazy } from 'react';
const YouTubeStats = lazy(() => import('@components/YouTubeStats'));
const BlogStats = lazy(() => import('@components/BlogStats'));

const StatsContent = () => {
  return (
    <div className='mt-2 flex flex-wrap justify-between'>
      <YouTubeStats />
      <BlogStats />
    </div>
  );
};

export default StatsContent;
