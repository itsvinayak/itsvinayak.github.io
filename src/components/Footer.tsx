import SocailFooterBar from '@ui/SocailFooterBar';


const Footer = () => {
  return (
    <footer className='text-md flex w-screen flex-col items-center justify-between overflow-auto p-5 lg:flex-row'>
      <SocailFooterBar />
      <div className='flex w-screen flex-col text-center md:flex-row lg:w-1/2'>
        Created by @itsvinayak
      </div>
    </footer>
  );
};

export default Footer;
