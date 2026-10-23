import { ImageData } from '@components/data/image';
import GitHubShowcase from '@components/GitHubShowcase';
import ImageGrid from '@ui/ImageGrid';
import Heading from '@ui/Heading';

const ImageContent = () => {
  return (
    <section>
      <GitHubShowcase />
      <div className='pb-12'>
        <Heading heading='Glimpses from My Life' />
      </div>
      <ImageGrid images={ImageData} />
    </section>
  );
};

export default ImageContent;
