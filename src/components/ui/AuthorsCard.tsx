import Image from "next/image";

interface AuthorsCardProps {
    author: {
        name: string;
        image: string;
    }
}

const AuthorsCard: React.FC<AuthorsCardProps> = ({ author }) => {
    return (
        <header className="flex flex-row justify-center items-center">
            {author.image &&
                <Image
                    src={author.image}
                    width={5}
                    height={5}
                    alt="author"
                    className="rounded-full w-5 h-5 m-2"
                />}
            <p className="text-xs">@ {author.name}</p>
        </header>
    );
};


export default AuthorsCard;