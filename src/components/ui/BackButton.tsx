'use client';

import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className='focus:shadow-outline m-2 flex h-10 w-10 flex-row items-center justify-center rounded-full bg-gray-800 p-2 text-white transition-colors duration-150 hover:bg-gray-700'
      onClick={() => router.back()}
    >
      <FaArrowLeft />
      <span className='sr-only'>Back</span>
    </button>
  );
};

export default BackButton;
