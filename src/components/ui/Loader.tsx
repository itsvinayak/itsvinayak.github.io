import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className='m-6 flex items-center justify-center w-screen h-screen overflow-hidden'>
      <div className='flex w-full flex-col items-center justify-center gap-4'>
        <div className='flex h-28 w-28 animate-spin items-center justify-center rounded-full border-8 border-gray-300 text-4xl text-blue-400 dark:border-t-black'>
          <FaSpinner 
            className='animate-ping'
            color='white'
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
