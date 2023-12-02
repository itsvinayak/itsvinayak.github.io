import { formatDate } from "@lib/utils";
import TextTag from '@ui/TextTag';
import AuthorsCard from '@ui/AuthorsCard';


interface BlogTitleProps {
    title: string;
    date: string;
    authors?: string[];
    authorsImage?: string[];
    tags?: string[];
}

const BlogTitle: React.FC<BlogTitleProps> = ({ title, date, authors, authorsImage, tags }) => {
    return (
        <div className="p-4">
            <div className="text-xs flex flex-row font-light">
                <p> Published on </p>
                <time dateTime={date} className="px-1">{formatDate(date)}</time>
            </div>
            <h1 className="text-4xl font-bold text-center m-5">{title}</h1>
            <div className="flex flex-row items-center justify-between">
                <div>
                    { (authors && authorsImage) &&
                        authors.map((author: any, index: any) => (
                            < AuthorsCard key={index} author={{
                                name: author,
                                image: authorsImage[index],
                            }} />
                        ))
                    }
                </div>
                <div>
                    {tags && tags.map((tag, index) => (
                        <TextTag
                            key={index}
                            className="text-xs text-slate-200 m-1"
                            text={tag}
                            logo={""} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogTitle;