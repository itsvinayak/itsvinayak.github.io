import { cn } from '@lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface CardGridProps {
    image: string;
    title: string;
    link: string;
    description: string;
    classNameBox?: string;
}

const CardGrid: React.FC<CardGridProps> = ({ image, title, description, link, classNameBox }) => {
    return (
        <Link
            href={link}
            passHref
            className={cn("rounded-lg shadow-xl m-1 p-5 overflow-hidden border-zinc-600 border", classNameBox)}
        >
            <div className="m-4 flex justify-center flex-col items-center">
                {/* image */}
                <Image
                    src={image}
                    alt="image"
                    width={200}
                    height={200}
                    className="w-10 h-10 rounded-full object-cover"
                />
                {/* title */}
                <h1
                    className="text-white text-sm md:text-base 2xl:text-2xl font-bold mt-5"
                >
                    {title}
                </h1>
            </div>
            <p className="prose lg:prose-xl text-white">
                    {description}
            </p>
        </Link>
    );
};


export default CardGrid;