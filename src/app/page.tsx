import fetchData from "@lib/utils";
import Navbar from '@components/Navbar';
import HomeContent from '@components/HomeContent';
import About from '@components/About';


export default async function Home() {
  let youTubeStats;
  try {
    youTubeStats = await getYoutubleData();
  } catch (error) {
    console.error(error);
  }
  let statsData = { youTubeStats };
  return (
    <main className="flex justify-center flex-col items-center bg-[#111010] overflow-y-hidden">
      <div className="md:max-w-2xl rounded-lg p-3.5 lg:p-6 ">
        <Navbar />
        <HomeContent />
        <About statsData={statsData}/>        
      </div>
    </main>

  )
}



const getYoutubleData = async () => {
  const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;
  const statisticsURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
  const uploadsURL = `https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=${YOUTUBE_CHANNEL_ID}&type=video&maxResults=100&key=${YOUTUBE_API_KEY}`;
  console.log('fetching data', statisticsURL, uploadsURL);
  const statsData = await fetchData(statisticsURL);
  const uploadsData = await fetchData(uploadsURL);
  console.log('statsData', statsData);
  console.log('uploadsData', uploadsData);
  return {
    stats: statsData.items[0].statistics,
    videos: uploadsData.items,
  };
}
