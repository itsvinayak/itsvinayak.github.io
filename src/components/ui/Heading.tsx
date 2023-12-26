import { cn } from '@lib/utils';
interface HeadingProps {
  heading: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ heading, className }) => {
  return (
    <>
      <h2
        className={cn(
          'pt-12 text-xl font-bold text-white md:text-2xl',
          className
        )}
      >
        {heading}
      </h2>
      <hr className='border-1' />
    </>
  );
};

export default Heading;
