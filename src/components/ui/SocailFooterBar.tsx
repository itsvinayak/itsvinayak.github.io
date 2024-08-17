import { SocialLinks } from '@components/data/social';
import { cn } from '@lib/utils';
import Link from 'next/link';

interface SocialFooterBarProps {
  className?: string;
}

const SocialFooterBar: React.FC<SocialFooterBarProps> = ({className}) => {
  console.log('SocialFooterBar : ', SocialLinks, className);
  return (
    <div className={cn('flex h-16 w-full flex-row items-center justify-center', className)}>
      {SocialLinks.map((link) => (
        <Link
          key={link.title}
          href={link.link}
          target='_blank'
          className='flex h-16 w-16 flex-row items-center justify-center hover:text-gray-400'
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialFooterBar;
