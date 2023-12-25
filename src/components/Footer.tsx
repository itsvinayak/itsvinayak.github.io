import Link from 'next/link';
import {cn} from '@lib/utils';

interface FooterLinkProps {
    href: string;
    text: string;
    classProps?: string;
}

const FooterLink = ({ href, text, classProps }: FooterLinkProps) => {
    return (
        <Link
            href={href}
            className={cn('flex items-center transition-all hover:scale-110 hover:text-neutral-800 dark:hover:text-neutral-100 text-sm md:text-md', classProps)} 
            target='_blank'
        >
            <svg
                width='12'
                height='12'
                className='mr-2'
                viewBox='0 0 12 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z'
                    fill='currentColor'
                ></path>
            </svg>
            <span>{text}</span>
            <span className='sr-only'> {text} </span>
        </Link>
    );
};

const Footer = () => {
    return (
        <footer className='text-md flex w-screen flex-row items-center justify-between p-5 overflow-auto text-nowrap '>
            <div className='flex w-1/4 flex-row justify-between pb-2 pt-4 '>
                <FooterLink href='/connect' text='Connect' classProps='m-4' />
                <FooterLink
                    href='https://itsvinayak.substack.com/'
                    text='Get Email Updates'
                />
                <p className='text-sm m-4'>
                    <b>Created by</b> @itsvinayak
                </p>
            </div>

        </footer>
    );
};

export default Footer;
