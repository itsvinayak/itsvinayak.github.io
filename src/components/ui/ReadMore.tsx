import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface ReadMoreProps {
  link: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ link }) => {
  return (
    <p className='hidden dark:text-zinc-200 dark:hover:text-zinc-50 text-black hover:text-gray-900 lg:flex items-center'>
      Read more <FaArrowRight className='animate-[backAndForward_5s_ease-in-out_infinite] mx-5 mt-1' />
    </p>
  );
};

export default ReadMore;
