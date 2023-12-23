import Image from 'next/image';
import { cn } from '@lib/utils';

interface TextTagProps {
  text: string;
  logo?: string;
  className?: string;
}

const TextTag = ({ text, logo, className }: TextTagProps) => {
  console.log('TextTag : ', text, logo);
  return (
    <span
      className={cn(
        'inline-flex items-center rounded border border-neutral-200 bg-neutral-800 p-1 text-sm leading-4 text-white no-underline  dark:border-neutral-700 dark:text-neutral-100',
        className
      )}
    >
      <span className='text-neutral-100'>{text}</span>
      {logo && (
        <span className='ml-1'>
          <Image
            src={logo}
            alt={text}
            width={16}
            height={16}
            className='inline-block'
          />
        </span>
      )}
    </span>
  );
};

export default TextTag;
