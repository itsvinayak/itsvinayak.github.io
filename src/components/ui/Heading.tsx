interface HeadingProps {
    heading: string;
}

const Heading: React.FC<HeadingProps> = ({ heading }) => {
    return (
        <>
            <h2 className="text-xl pt-6 md:text-2xl font-bold text-white">{heading}</h2>
            <hr className="border-1" />
        </>
    );
};

export default Heading;