import { lazy } from "react";
const DoubleImageCard = lazy(() => import("@ui/DoubleImageCard"));

const getBlogData : BlogStatsProps = {
  link: `https://www.youtube.com/channel/${process.env.YOUTUBE_CHANNEL_ID}`,
  title: "@itsvinayak",
  description: "12",
  largeImage: {
    src: "/profile.jpeg",
    alt: "Vinayak",
  },
  smallImage: {
    src: "/rss-round-color-icon.svg",
    alt: "Rss",
  },
};

interface BlogStatsProps {
  link: string;
  title: string;
  description: string;
  largeImage: {
    src: string;
    alt: string;
  };
  smallImage: {
    src: string;
    alt: string;
  };
}

const BlogStats = () => {
  return (
    <div className="w-1/2">
      { getBlogData && <DoubleImageCard {...getBlogData} /> }
    </div>
  );
};

export default BlogStats;
