import Link from 'next/link';
import Image from 'next/image';
import Heading from '@ui/Heading';
import { getAllPost } from '@lib/utils';
import { SinglePostProps } from '@components/types/ArticleProps';
import { FaLongArrowAltRight } from 'react-icons/fa';

const maxPost: number = 5;

const RecentBlog = async () => {
  const posts: SinglePostProps[] = await getAllPost();
  const recentPosts: SinglePostProps[] = posts
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, maxPost);
  return (
    <div>
      <Heading heading='Recent Blog' />
      <ul className='overflow-hidden rounded pt-7 shadow-md'>
        {recentPosts.map((post: SinglePostProps) => (
          <li
            key={post.slug}
            className='border-b px-4 py-2 transition-all duration-300 ease-in-out last:border-none hover:font-bold'
          >
            <div className='flex flex-row align-middle'>
              <FaLongArrowAltRight className='mx-2 mt-1' />
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentBlog;
