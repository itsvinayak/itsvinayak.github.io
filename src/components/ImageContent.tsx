import { ImageData } from '@components/data/image';
import ImageGrid from '@ui/ImageGrid';
import Heading from '@ui/Heading';

const ImageContent = () => {
  return (
    <section>
      <div className='pb-12'>
        <Heading heading='Glims from My Life' />
      </div>
      <ImageGrid images={ImageData} />
    </section>
  );
};

export default ImageContent;
