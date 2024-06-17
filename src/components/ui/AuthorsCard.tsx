import Image from 'next/image';

interface AuthorsCardProps {
  author: {
    name: string;
    image: string;
  };
}

const AuthorsCard: React.FC<AuthorsCardProps> = ({ author }) => {
  return (
    <header className='flex flex-row items-center justify-center'>
      <p className='text-xs'>by {author.name}</p>
      {author.image && (
        <Image
          src={author.image}
          width={5}
          height={5}
          alt='author'
          className='m-2 h-5 w-5 rounded-full'
        />
      )}
    </header>
  );
};

export default AuthorsCard;
