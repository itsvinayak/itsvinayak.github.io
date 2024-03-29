import { FaYoutube } from 'react-icons/fa';
import { getYoutubeStatsData } from '@lib/utils';
import { lazy } from 'react';
const DoubleImageCard = lazy(() => import('@ui/DoubleImageCard'));

interface YouTubeStatsProps {
  link: string;
  title: string;
  description: string;
  largeImage: {
    src: string;
    alt: string;
  };
  smallImage: {
    src?: any;
    alt: string;
  };
}

const filterYouTubeData = (data: any) => {
  let filteredData: YouTubeStatsProps = {
    link: '',
    title: '',
    description: '',
    largeImage: {
      src: '',
      alt: '',
    },
    smallImage: {
      src: '',
      alt: '',
    },
  };

  let displayText;
  if (!data) {
    data = {};
  }
  console.log('filterYouTubeData ', data);

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
      title: '@itsvinayak',
      description: displayText,
      largeImage: {
        src: '/profile.jpeg',
        alt: 'Vinayak',
      },
      smallImage: {
        src: <FaYoutube color='black' />,
        alt: 'YouTube',
      },
    };
  }
  console.log('filteredData : ', filteredData);
  return filteredData;
};

const YouTubeStats = async () => {
  let youTubeStats = null;
  try {
    youTubeStats = await getYoutubeStatsData();
  } catch (error) {
    console.log('Error : ', error);
  }
  let filteredYouTubeStats: YouTubeStatsProps = filterYouTubeData(youTubeStats?.stats);

  console.log('YouTubeStats : ', youTubeStats);

  return (
    <>{filteredYouTubeStats && <DoubleImageCard {...filteredYouTubeStats} />}</>
  );
};

export default YouTubeStats;
