import ReadMore from "@components/ReadMore";
import Link from "next/link";

const ArticleCard = ({ post }) => {
  console.log("serving post -> ",post);
  const { title, description, date, link } = post;
  return (
    <Link href={link}>
      <article
        className="overflow-hidden relative duration-700 
    border rounded-xl hover:bg-zinc-800/10 group
     md:gap-8 hover:border-zinc-400/50 border-zinc-600  p-2 md:p-8"
      >
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {title}
        </h2>
        <div className="flex justify-between gap-2 items-center">
          <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
            <time dateTime="2023-04-01T00:00:00.000Z">{date}</time>
          </span>
        </div>
        <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <ReadMore />
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
