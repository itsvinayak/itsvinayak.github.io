const InputBox = () => {
    return (
        <input
            className="mx-4 md:mx-8 lg:mx-16 xl:mx-20 bg-transparent border-none outline-none max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg p-1 md:p-2 lg:p-2 xl:p-4 text-sm md:text-sm lg:text-xl xl:text-xl rounded-full shadow-inner text-white"
            placeholder="Subscribe to our newsletter"
            lang="en"
            dir="ltr"
            type="email"
            autoComplete="on"
            autoCorrect="on"
            autoFocus={true}
            spellCheck={true}
        />
    );
};

export default InputBox;