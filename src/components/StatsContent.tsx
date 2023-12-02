import { lazy } from "react";
const YouTubeStats = lazy(() => import("@components/YouTubeStats"));
const BlogStats = lazy(() => import("@components/BlogStats"));

const StatsContent = () => {
  return (
    <div className="group flex w-full mt-8 justify-between">
      <YouTubeStats />
      <BlogStats />
    </div>
  );
};

export default StatsContent;
