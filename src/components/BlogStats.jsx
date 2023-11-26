import { lazy } from "react";
const DoubleImageCard = lazy(() => import("@components/DoubleImageCard"));

const getBlogData = {
  link: `https://www.youtube.com/channel/${process.env.YOUTUBE_CHANNEL_ID}`,
  title: "@itsvinayak",
  description: 12,
  largeImage: {
    src: "/profile.jpeg",
    alt: "Vinayak",
  },
  smallImage: {
    src: "/rss-round-color-icon.svg",
    alt: "Rss",
  },
};

const BlogStats = () => {
  return (
    <div>
      <DoubleImageCard {...getBlogData} />
    </div>
  );
};

export default BlogStats;
