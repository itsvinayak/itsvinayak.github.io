import Link from "next/link";
import Image from "next/image";
import Heading from "@ui/Heading";
import { getAllPost } from "@lib/utils";
import { PostProps } from "@components/types/ArticleProps";

const maxPost = 5;



const RecentBlog = async () => {
    const posts: PostProps = await getAllPost();
    const recentPosts: PostProps = posts.sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, maxPost);
    return (
        <div>
            <Heading heading="Recent Blog" />
            <ul className="rounded overflow-hidden shadow-md pt-7">
                {recentPosts.map((post: PostProps) => (
                    <li key={post.slug} className="px-4 py-2 border-b last:border-none hover:font-bold transition-all duration-300 ease-in-out">
                        {/* <Image
                            src='/icon/arrow.png'
                            alt={post.title}
                            width={25}
                            height={25}
                            className="rounded bg-white inline-flex p-1 relative h-6 w-6 items-center -top-6 -right-10"
                        /> */}
                        <Link href={`/blog/${post.slug}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};


module.exports = RecentBlog;