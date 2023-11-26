import fs from 'fs';
import matter from 'gray-matter';

const fetchData = async (url) => {
  try {
    const res = await fetch(url, {
      next: {
        revalidate: 3600,
      }
    });
    if(!res.ok) throw new Error('error fetching data');
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getYoutubeStatsData = async () => {
  if(process.env.NODE_ENV === 'development'){
    return {
      stats: {
        subscriberCount: 0,
        viewCount: 0,
        videoCount: 0
      }
    }
  }
  const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;
  const statisticsURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
  // const uploadsURL = `https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=${YOUTUBE_CHANNEL_ID}&type=video&maxResults=100&key=${YOUTUBE_API_KEY}`;
  console.log('fetching data', statisticsURL);
  const statsData = await fetchData(statisticsURL);
  console.log('statsData', statsData);
  if (!statsData?.items?.length || !uploadsData?.items?.length) throw new Error('error fetching data');
  return {
    stats: statsData?.items[0]?.statistics
  };
};


export const getAllPost = async () => {
  const files = fs.readdirSync(`${process.cwd()}/blogs`);
  const data = [];
  for (const file of files) {
    const markdownWithMeta = fs.readFileSync(`blogs/${file}`, 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    console.log(frontmatter);
    data.push({
      ...frontmatter
    });
  }
  return data;
};
