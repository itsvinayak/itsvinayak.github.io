import { lazy } from "react";
const DoubleImageCard = lazy(() => import("@components/DoubleImageCard"));

const getBlogData = () => {
  filteredData = {
    link: `https://www.youtube.com/channel/${process.env.YOUTUBE_CHANNEL_ID}`,
    title: "@itsvinayak",
    description: 12,
    largeImage: {
      src: "/profile.jpeg",
      alt: "Vinayak",
    },
    smallImage: {
      src: "/youtube-logo.svg",
      alt: "YouTube",
    },
  };

  console.log("filteredData : ", filteredData);
  return filteredData;
};

const BlogStats = () => {
  return (
    <div>
      <DoubleImageCard {...getBlogData} />
    </div>
  );
};

export default BlogStats;
