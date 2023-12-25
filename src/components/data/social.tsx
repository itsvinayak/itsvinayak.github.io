
import { FaGithub, FaYoutube, FaDev, FaStackOverflow } from 'react-icons/fa';
import { FaHashnode } from 'react-icons/fa6';
import { BsSubstack } from 'react-icons/bs';

export const SocialLinks = [
    {
        title: 'Github',
        link: 'https://github.com/itsvinayak',
        description: 'My Github Profile',
        image: '',
        icon: <FaGithub />
    },
    {
        title: 'Youtube',
        link: 'https://www.youtube.com/channel/UC3Vrabb-Q563wejSp3KG8fA',
        description: 'My Youtube Channel',
        image: '/Social/youtube.svg',
        icon: <FaYoutube />,
    },
    {
        title: 'Hashnode',
        link: 'https://itsvinayak.hashnode.dev/',
        description: 'My Hashnode Blog',
        image: '',
        icon: <FaHashnode />,
    },
    {
        title: 'Dev.to',
        link: 'https://dev.to/itsvinayak',
        description: 'My dev.to Blog',
        image: '',
        icon: <FaDev />,
    },
    {
        title: 'Stackoverflow',
        link: '',
        description: 'My Stackoverflow Profile',
        image: '',
        icon: <FaStackOverflow />,
    },
    {
        title: 'substack',
        link: 'https://itsvinayak.substack.com/',
        description: 'My substack Blog',
        image: '',
        icon: <BsSubstack />,
    },
];


