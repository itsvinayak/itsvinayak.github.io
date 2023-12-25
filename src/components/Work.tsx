import TextTag from '@ui/TextTag';
import Heading from '@ui/Heading';

const About = () => {
  return (
    <>
      <Heading heading='Current Endeavors: Navigating the Software Development Horizon' />
      <p className='mt-4 pb-4'>
        At <TextTag text='Pratishthan Software Ventures Pvt. Ltd' logo='' />, I
        currently serve as a Senior Software Engineer, contributing my expertise
        for more than 2 years. In this role, I am actively involved in the
        creation and implementation of critical payment systems such as NACH and
        SEPA, along with the development and integration of ACH products.
        <br />I played a pivotal role in developing the Finacle OE Payments
        backend system (HKFPS). Additionally, I contributed to the development
        and integration of the Foreign Exchange feature for Payments,
        participated in performance tuning initiatives, and implemented Bulk DB
        inserts in Transaction Handler, outbound, and inbound microservices. My
        skills during this period included backend development, API development,
        RabbitMQ, Node.js, Redis, FinTech, Payments, REST APIs, debugging,
        MongoDB, problem-solving, software development, Git, Docker, and DevOps.
      </p>
    </>
  );
};

export default About;
