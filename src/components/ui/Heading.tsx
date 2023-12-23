interface HeadingProps {
  heading: string;
}

const Heading: React.FC<HeadingProps> = ({ heading }) => {
  return (
    <>
      <h2 className='pt-6 text-xl font-bold text-white md:text-2xl'>
        {heading}
      </h2>
      <hr className='border-1' />
    </>
  );
};

export default Heading;
