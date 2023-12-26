import { cn } from '@lib/utils';
interface HeadingProps {
  heading: string;
  icon?: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ heading, icon, className }) => {
  return (
    <>
      <h2
        className={cn(
          'pt-12 text-xl font-bold text-black dark:text-white md:text-2xl',
          className
        )}
      >
        {heading}
        {!!icon && (
          <span className='inline-block w-8 h-10 ml-4' >
             {icon}
          </span>
        )}
      </h2>
      <hr className='h-px dark:bg-gray-200 border-0 bg-gray-700'/>
    </>
  );
};

export default Heading;
