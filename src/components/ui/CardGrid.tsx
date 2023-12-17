import { cn } from '@lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { CardGridProps } from '@components/types/CardGridProps';


const CardGrid: React.FC<CardGridProps> = ({ image, icon, title, description, link, classNameBox }) => {
    let iconComponent;
    if (icon) {
        iconComponent = <div className="w-10 h-10 rounded-full bg-zinc-600 flex justify-center items-center">
            {icon}
        </div>
    } else if (image) {
        iconComponent = <Image
            src={image}
            alt="image"
            width={200}
            height={200}
            className="w-10 h-10 rounded-full object-cover"
        />
    } else {
        iconComponent = <div className="w-10 h-10 rounded-full bg-zinc-600 flex justify-center items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
            </svg>
        </div>
    }
    return (
        <Link
            href={link}
            passHref
            className={cn("rounded-lg shadow-xl m-1 p-5 overflow-hidden border-zinc-600 border hover:scale-110 duration-100	 transform-gpu select-all", classNameBox)}
        >
            <div className="m-4 flex justify-center flex-col items-center">
                {/* image */}
                {iconComponent}
                <h1
                    className="text-white text-sm md:text-base 2xl:text-2xl font-bold mt-5 text-center"
                >
                    {title}
                </h1>
            </div>
            <p className="prose lg:prose-xl text-white text-center text-base/6">
                {description}
            </p>
        </Link>
    );
};


export default CardGrid;