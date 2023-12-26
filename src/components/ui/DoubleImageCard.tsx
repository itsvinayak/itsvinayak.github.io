import Link from 'next/link';
import Image from 'next/image';

interface DoubleImageCardProps {
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

const DoubleImageCard = ({
  link,
  title,
  description,
  largeImage,
  smallImage,
}: DoubleImageCardProps) => {
  console.log(
    'DoubleImageCard : ',
    link,
    title,
    description,
    largeImage,
    smallImage
  );
  if (!link || !title || !description || !largeImage || !smallImage) {
    return null;
  }
  let smallImageIcon = null;
  if (typeof smallImage.src === 'string' && smallImage.src.length !== 0) {
    smallImage.src = <Image
      src={smallImage.src}
      alt={smallImage.alt}
      width={15}
      height={11}
      decoding='async'
      data-nimg='1'
    />;
  } else if (typeof smallImage.src === 'object' && smallImage.src !== null) {
    smallImageIcon = smallImage.src;
  }
  return (
    <Link
      href={link}
      className='m-1 flex w-full flex-col items-center justify-around rounded border border-zinc-600 bg-[#262626]  md:w-[46%] md:flex-row md:py-4 md:align-middle'
    >
      <div>
        <div className='relative h-10 p-1 md:h-16'>
          <Image
            src={largeImage.src}
            alt={largeImage.alt}
            width={20}
            height={20}
            fetchPriority='high'
            decoding='async'
            style={{ color: 'transparent' }}
            data-nimg='1'
            className='h-8 w-8 rounded-full border border-neutral-200 md:h-16 md:w-16 dark:border-neutral-700'
          />
          <div
            className='relative -right-4 -top-4 
            inline-flex h-4 w-4 items-center 
            rounded-full border border-neutral-200 bg-white p-1  md:-right-10 md:-top-6 md:h-6 md:w-6 dark:border-neutral-700'
          >
            {!!smallImageIcon && smallImageIcon}
          </div>
        </div>
      </div>
      <div className='mx-4 flex flex-col p-1'>
        <p className='text-sm font-bold text-neutral-900 md:text-xl dark:text-neutral-100'>
          {title}
        </p>
        <p className='text-xs text-neutral-600 md:text-lg dark:text-neutral-400'>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default DoubleImageCard;
