import Link from "next/link";
import Image from "next/image";
import Heading from "@ui/Heading";
import { getAllPost } from "@lib/utils";
import { SinglePostProps } from "@components/types/ArticleProps";
import { FaLongArrowAltRight } from "react-icons/fa";


const maxPost: number = 5;

const RecentBlog = async () => {
    const posts: SinglePostProps[] = await getAllPost();
    const recentPosts: SinglePostProps[] = posts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).slice(0, maxPost);
    return (
        <div>
            <Heading heading="Recent Blog" />
            <ul className="rounded overflow-hidden shadow-md pt-7">
                {recentPosts.map((post: SinglePostProps) => (
                    <li key={post.slug} className="px-4 py-2 border-b last:border-none hover:font-bold transition-all duration-300 ease-in-out">
                        <div className="flex flex-row align-middle">
                            <FaLongArrowAltRight className="mx-2 mt-1" />
                            <Link href={`/blog/${post.slug}`}>
                                {post.title}
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentBlog;