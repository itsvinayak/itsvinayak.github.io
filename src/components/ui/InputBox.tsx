const InputBox = () => {
  return (
    <input
      className='mx-4 max-w-xs rounded-full border-none bg-transparent p-1 text-sm text-white shadow-inner outline-none md:mx-8 md:max-w-sm md:p-2 md:text-sm lg:mx-16 lg:max-w-md lg:p-2 lg:text-xl xl:mx-20 xl:max-w-lg xl:p-4 xl:text-xl'
      placeholder='Subscribe to our newsletter'
      lang='en'
      dir='ltr'
      type='email'
      autoComplete='on'
      autoCorrect='on'
      autoFocus={true}
      spellCheck={true}
    />
  );
};

export default InputBox;
