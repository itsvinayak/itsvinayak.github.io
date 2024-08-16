import { cn } from '@lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { CardGridProps } from '@components/types/CardGridProps';

const CardGrid: React.FC<CardGridProps> = ({
  image,
  icon,
  title,
  description,
  link,
  classNameBox,
}) => {
  let iconComponent;
  if (icon) {
    iconComponent = (
      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-zinc-600'>
        {icon}
      </div>
    );
  } else if (image) {
    iconComponent = (
      <Image
        src={image}
        alt='image'
        width={200}
        height={200}
        className='h-10 w-10 rounded-full object-cover'
      />
    );
  } else {
    iconComponent = (
      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-zinc-600'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
          />
        </svg>
      </div>
    );
  }
  return (
    <Link
      href={link}
      passHref
      className={cn(
        'm-1 transform-gpu select-all overflow-hidden rounded-lg border border-zinc-600 p-5 shadow-xl	 duration-100 hover:scale-110',
        classNameBox
      )}
    >
      <div className='m-4 flex flex-col items-center justify-center'>
        {/* image */}
        {iconComponent}
        <h1 className='mt-5 text-center text-sm font-bold text-black dark:text-white md:text-base 2xl:text-2xl'>
          {title}
        </h1>
        <p className='prose text-center text-base/6 text-black dark:text-white lg:prose-xl'>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default CardGrid;
