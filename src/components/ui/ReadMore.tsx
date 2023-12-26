import React from 'react';

interface ReadMoreProps {
  link: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ link }) => {
  return (
    <p className='hidden dark:text-zinc-200 dark:hover:text-zinc-50 text-black hover:text-gray-900 lg:block'>
      Read more <span aria-hidden='true'>→</span>
    </p>
  );
};

export default ReadMore;
