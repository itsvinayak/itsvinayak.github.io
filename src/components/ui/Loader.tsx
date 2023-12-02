import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex items-center justify-center m-6">
        <Image
            src="/loader.gif"
            alt="loader"
            width={100}
            height={100}
            className="inline-block"
        />
    </div>
  );
};


export default Loader;