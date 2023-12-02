import ReadMore from "@ui/ReadMore";
import Link from "next/link";
import AuthorsCard from "@ui/AuthorsCard";
import TextTag from "@ui/TextTag";
import React from "react";
import { formatDate } from "@lib/utils";

interface ArticleCardProps {
  post: {
    title: string;
    description: string;
    date: string;
    slug: string;
    slugAsParams: string;
    authors: string[];
    authorsImage: string[];
    tags: string[];
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  console.log("serving post -> ", post);
  let { title, description, date, slug, slugAsParams, authors, authorsImage, tags } = post;
  if (!authorsImage) {
    authorsImage = ['/profile.jpeg']
  }
  if (!tags) {
    tags = ['JS', 'React', 'Next.js']
  }
  let postLink: string = "";
  if (slugAsParams) {
    postLink = `/blog/${slug}`;
  }
  return (
    <Link href={postLink}>
      <article
        className="overflow-hidden relative duration-700 
    border rounded-xl hover:bg-zinc-800/10 group
     md:gap-8 hover:border-zinc-400/50 border-zinc-600  p-2 md:p-8"
      >
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {title}
        </h2>
        <div className="py-2">
          <span className="text-xs duration-1000 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange text-slate-200">
            <time dateTime={date}>{formatDate(date)}</time>
          </span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div>
            {
              authors.map((author, index) => (
                < AuthorsCard key={index} author={{
                  name: author,
                  image: authorsImage[index],
                }} />
              ))
            }
          </div>
          <div>
            {tags.map((tag, index) => (
              <TextTag
                key={index}
                className="text-xs text-slate-200 m-1"
                text={tag}
                logo={""} />
            ))}
          </div>
        </div>
        <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <ReadMore link={postLink} />
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
