import Link from "next/link";
import Image from "next/image";


interface DoubleImageCardProps {
  link: string;
  title: string;
  description: string;
  largeImage: {
    src: string;
    alt: string;
  };
  smallImage: {
    src: string;
    alt: string;
  };
}

const DoubleImageCard = ({
  link,
  title,
  description,
  largeImage,
  smallImage,
}: DoubleImageCardProps) => {
  console.log(
    "DoubleImageCard : ",
    link,
    title,
    description,
    largeImage,
    smallImage
  );
  if (!link || !title || !description || !largeImage || !smallImage) {
    return null;
  }
  return (
    <Link
      href={link}
      className="rounded flex items-center md:flex-row bg-[#262626] flex-col md:py-4 m-1 w-full md:w-[46%]  md:align-middle justify-around border-zinc-600 border"
    >
      <div>
        <div className="relative h-10 md:h-16 p-1">
          <Image
            src={largeImage.src}
            alt={largeImage.alt}
            width={20}
            height={20}
            fetchPriority="high"
            decoding="async"
            style={{ color: "transparent" }}
            data-nimg="1"
            className="border border-neutral-200 dark:border-neutral-700 rounded-full h-8 w-8 md:h-16 md:w-16"
          />
          <div
            className="border border-neutral-200 dark:border-neutral-700 
            rounded-full bg-white inline-flex p-1 
            relative h-4 w-4 md:h-6 md:w-6  items-center -top-4 -right-4 md:-top-6 md:-right-10"
          >
            <Image
              src={smallImage.src}
              alt={smallImage.alt}
              width={15}
              height={11}
              decoding="async"
              data-nimg="1"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-4 p-1">
        <p className="text-neutral-900 dark:text-neutral-100 font-bold text-sm md:text-xl">
          {title}
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-lg">{description}</p>
      </div>
    </Link>
  );
};

export default DoubleImageCard;
