import Layout from "@components/Layout";
import CardGrid from "@ui/CardGrid";
import { LinkCardProps } from "@components/types/LinkCardProps";


const Links: LinkCardProps[] = [
    {
        "title": "Github",
        "link": "",
        "description": "My Github Profile",
        "image": "",
        "classNameBox": "lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2"
    },
    {
        "title": "Youtube",
        "link": "",
        "description": "My Youtube Channel",
        "image": "/Social/youtube.svg",
        "classNameBox": "lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1"
    },
    {
        "title": "Twitter",
        "link": "",
        "description": "My Twitter Profile",
        "image": "",
        "classNameBox": "lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-1"
    },
    {
        "title": "Twitter",
        "link": "",
        "description": "My Twitter Profile",
        "image": "",
        "classNameBox": "lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-1"
    },
    {
        "title": "Twitter",
        "link": "",
        "description": "My Twitter Profile",
        "image": "",
        "classNameBox": "lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-2"
    },
    {
        "title": "Twitter",
        "link": "",
        "description": "My Twitter Profile",
        "image": "",
        "classNameBox": "lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-1"
    }
];




const Page = () => {
    return (
        <Layout>
            <div className="grid gap-4 lg:grid-cols-4 pt-10 lg:pt-20 px-9 lg:px-0">
                {Links.map((link: LinkCardProps) => (
                    <CardGrid
                        key={link.title}
                        title={link.title}
                        description={link.description}
                        image={link.image}
                        link={link.link}
                        classNameBox={link.classNameBox}
                    />
                ))}
            </div>
        </Layout>
    );
};

export default Page;