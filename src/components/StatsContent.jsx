import YouTubeStats from "./YouTubeStats";

const StatsContent = ({ statsData }) => {
  return (
    <div>
      <YouTubeStats youTubeStats={statsData.youTubeStats} />
    </div>
  );
};

export default StatsContent;
