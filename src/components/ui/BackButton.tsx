"use client";

import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';


const BackButton = () => {
    const router = useRouter();
    return (
      <button 
        className='flex flex-row items-center justify-center w-10 h-10 p-2 m-2 text-white transition-colors duration-150 bg-gray-800 rounded-full focus:shadow-outline hover:bg-gray-700'
        onClick={() => router.back()}
        >
        <FaArrowLeft />
        <span className='sr-only'>Back</span>
        </button>
    );
};


export default BackButton;