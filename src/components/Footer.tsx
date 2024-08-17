import SocailFooterBar from '@ui/SocailFooterBar';


const Footer = () => {
    return (
        <footer className='text-md flex w-screen flex-col items-center justify-between overflow-auto py-5 lg:flex-row'>
            <SocailFooterBar className='w-screen lg:w-1/2' />
            <div className='w-screen text-center lg:w-1/2'>
                Created by &nbsp;<b> @itsvinayak </b> &nbsp; with &nbsp;❤️
            </div>
        </footer>
    );
};

export default Footer;
