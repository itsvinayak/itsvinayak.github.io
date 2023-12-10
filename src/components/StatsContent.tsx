import { lazy } from "react";
const YouTubeStats = lazy(() => import("@components/YouTubeStats"));
const BlogStats = lazy(() => import("@components/BlogStats"));

const StatsContent = () => {
  return (
    <div className="flex mt-2 justify-between flex-wrap">
      <YouTubeStats />
      <BlogStats />
    </div>
  );
};

export default StatsContent;
