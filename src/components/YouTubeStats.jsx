import DoubleImageCard from "@components/DoubleImageCard";

const filterYouTubeData = (data) => {
  let filteredData = {};
  let displayText;
  
  console.log("filterYouTubeData ", data);
  
  data.subscriberCount = Number(data?.subscriberCount) || 0;
  data.viewCount = Number(data?.viewCount) || 0;
  data.videoCount = Number(data?.videoCount) || 0;

  if (
    data.subscriberCount > data.viewCount &&
    data.subscriberCount > data.videoCount
  ) {
    displayText = `${data.subscriberCount} Subscribers`;
  } else if (
    data.viewCount > data.subscriberCount &&
    data.viewCount > data.videoCount
  ) {
    displayText = `${data.viewCount} Views`;
  } else {
    displayText = `${data.videoCount} Videos`;
  }
  if (data) {
    filteredData = {
      link: `https://www.youtube.com/channel/${process.env.YOUTUBE_CHANNEL_ID}`,
      title: "@itsvinayak",
      description: displayText,
      largeImage: {
        src: "/profile.jpeg",
        alt: "Vinayak",
      },
      smallImage: {
        src: "/youtube.png",
        alt: "YouTube",
      },
    };
  }
  return filteredData;
};

const YouTubeStats = ({ youTubeStats }) => {
  let channelStats = youTubeStats?.stats || {};
  return <DoubleImageCard {...filterYouTubeData(channelStats)} />;
};

export default YouTubeStats;
