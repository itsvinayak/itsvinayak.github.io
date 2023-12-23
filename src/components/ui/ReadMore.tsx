import React from 'react';

interface ReadMoreProps {
  link: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ link }) => {
  return (
    <p className='hidden text-zinc-200 hover:text-zinc-50 lg:block'>
      Read more <span aria-hidden='true'>→</span>
    </p>
  );
};

export default ReadMore;
