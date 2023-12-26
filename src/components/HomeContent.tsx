import { lazy } from 'react';
const TextTag = lazy(() => import('@ui/TextTag'));
import { FaPython, FaNodeJs, FaJsSquare } from 'react-icons/fa';

const HomeContent = () => {
  return (
    <>
      <h1 className='font-extrabold italic leading-relaxed tracking-wide subpixel-antialiased md:mt-4 block md:text-4xl'>
        hey, I&#39;m Vinayak &nbsp;
      </h1>
      <p className='text-md my-0 mt-5'>
        I&#39;m a tech enthusiast with a passion for solving complex problems
        and developing innovative solutions.
        <br />
        <br />
        My expertise lies in <TextTag
          text='Python'
          logo={<FaPython />}
        /> ( <TextTag text='Flask/Django' logo={''} />, and{' '}
        <TextTag text='Selenium' logo={''} /> ){' '}
        <TextTag text='JavaScript' logo={<FaJsSquare />} />{' '}
        {/* (Node.js, Loopback, ) */}
        (
        <TextTag text='Loopback' logo={''} />,{' '}
        <TextTag text='Next.js' logo={''} />,{' '}
        <TextTag text='Node.js' logo={<FaNodeJs />} />, and
        <TextTag text='Node-Red' logo={''} />) for backend design and
        development. I have a proven track record of designing and implementing
        scalable and efficient solutions that meet business objectives.
      </p>
    </>
  );
};

export default HomeContent;
