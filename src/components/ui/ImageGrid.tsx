import Image from 'next/image';
import { cn } from '@lib/utils';
import { ImageComponentProps } from '@components/types/ImageGridProps';
import Link from 'next/link';

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  className,
}) => {
  return (
    <div className='animate-ease-out animate-flipUp'>
    <Link href={src} target='_blank'>
      <Image
        src={src}
        width={300}
        height={300}
        loading='lazy'
        alt={alt}
        className={cn(
          'h-auto max-w-full rounded-lg hover:scale-110 ',
          className
        )}
      />
      </Link>
    </div>
  );
};

const ImageGrid = ({ images }: any) => {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
      {!!images &&
        images.map((image: any, index: number) => (
          <ImageComponent key={index} src={image} alt={image} />
        ))}
    </div>
  );
};

export default ImageGrid;
