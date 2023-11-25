import Link from "next/link";
import Image from "next/image";

const DoubleImageCard = ({
  link,
  title,
  description,
  largeImage,
  smallImage,
}) => {
  return (
    <Link
      href={link}
      className="border border-neutral-200 dark:border-neutral-700
                bg-neutral-50 dark:bg-neutral-800 
                  rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex items-center space-x-3">
        <div className="relative h-16">
          <Image
            src={largeImage.src}
            alt={largeImage.alt}
            width={15}
            height={11}
            fetchPriority="high"
            decoding="async"
            style={{ color: "transparent" }}
            data-nimg="1"
            className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
          />
          <div
            className="border border-neutral-200 dark:border-neutral-700 
            rounded-full bg-white inline-flex p-1 
            relative h-6 w-6 items-center -top-6 -right-10"
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
      <div className="flex flex-col">
        <p className="font-medium text-neutral-900 dark:text-neutral-100">
          {title}
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>
    </Link>
  );
};

export default DoubleImageCard;
