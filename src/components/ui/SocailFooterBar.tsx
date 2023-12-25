import { SocialLinks } from "@components/data/social";
import Link from "next/link";

interface SocialFooterBarProps {}

const SocialFooterBar: React.FC<SocialFooterBarProps> = () => {
    console.log('SocialFooterBar : ', SocialLinks);
    return (
        <div className='flex flex-row justify-center items-center w-full h-16'>
            {SocialLinks.map((link) => (
                <Link
                    key={link.title}
                    href={link.link}
                    target='_blank'
                    className='flex flex-row justify-center items-center w-16 h-16  hover:scale-110'>
                    {link.icon}
                </Link>
            ))}
        </div>
    );
};

export default SocialFooterBar;