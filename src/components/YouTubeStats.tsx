import { FaYoutube } from 'react-icons/fa';
import { getYoutubeStatsData } from '@lib/utils';
import { lazy } from 'react';
const DoubleImageCard = lazy(() => import('@ui/DoubleImageCard'));
const YOUTUBE_CHANNEL_ID = 'UC3Vrabb-Q563wejSp3KG8fA';

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

  if (!data) {
    data = {};
  }

  const subscriberCount = Number(data?.subscriberCount) || 0;
  const viewCount = Number(data?.viewCount) || 0;
  const videoCount = Number(data?.videoCount) || 0;
  let displayText = 'YouTube Channel';

  if (subscriberCount || viewCount || videoCount) {
    if (subscriberCount > viewCount && subscriberCount > videoCount) {
      displayText = `${subscriberCount} Subscribers`;
    } else if (viewCount > subscriberCount && viewCount > videoCount) {
      displayText = `${viewCount} Views`;
    } else {
      displayText = `${videoCount} Videos`;
    }
  }
  if (data) {
    filteredData = {
      link: `https://www.youtube.com/channel/${
        process.env.YOUTUBE_CHANNEL_ID || YOUTUBE_CHANNEL_ID
      }`,
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
  return filteredData;
};

const YouTubeStats = async () => {
  let youTubeStats = null;
  try {
    youTubeStats = await getYoutubeStatsData();
  } catch (error) {
    console.error('Unable to load YouTube stats:', error);
  }
  let filteredYouTubeStats: YouTubeStatsProps = filterYouTubeData(
    youTubeStats?.stats
  );

  return (
    <>{filteredYouTubeStats && <DoubleImageCard {...filteredYouTubeStats} />}</>
  );
};

export default YouTubeStats;
