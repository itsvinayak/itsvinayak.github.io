import { SocialLinks } from '@components/data/social';
import Link from 'next/link';

interface SocialFooterBarProps {}

const SocialFooterBar: React.FC<SocialFooterBarProps> = () => {
  console.log('SocialFooterBar : ', SocialLinks);
  return (
    <div className='flex h-16 w-full flex-row items-center justify-center'>
      {SocialLinks.map((link) => (
        <Link
          key={link.title}
          href={link.link}
          target='_blank'
          className='flex h-16 w-16 flex-row items-center justify-center  hover:scale-110'
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialFooterBar;
