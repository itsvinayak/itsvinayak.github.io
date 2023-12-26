import Image from 'next/image';
import { cn } from '@lib/utils';
import { ImageComponentProps } from '@components/types/ImageGridProps';

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  className,
}) => {
  return (
    <div className='animate-ease-out animate-flipUp'>
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
