import { SocialLinks } from '@components/data/social';
import { cn } from '@lib/utils';
import Link from 'next/link';

interface SocialFooterBarProps {
  className?: string;
}

const SocialFooterBar: React.FC<SocialFooterBarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'flex h-16 w-full flex-row items-center justify-center',
        className
      )}
    >
      {SocialLinks.map((link) => (
        <Link
          key={link.title}
          href={link.link}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={link.title}
          className='flex h-16 w-16 flex-row items-center justify-center hover:text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-zinc-500'
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialFooterBar;
