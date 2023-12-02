import fs, { read } from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import html from "remark-html";
import remarkImage from "remark-images";
import remarkEmoji from "remark-emoji";
import path from "path";
import { compareDesc } from "date-fns";
import { allPosts } from "@generated";
import { unified } from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";


export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const fetchData = async (url) => {
  try {
    const res = await fetch(url, {
      next: {
        revalidate: 3600,
      },
    });
    if (!res.ok) throw new Error("error fetching data");
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getYoutubeStatsData = async () => {
  if (process.env.NODE_ENV === "development") {
    return {
      stats: {
        subscriberCount: 0,
        viewCount: 0,
        videoCount: 0,
      },
    };
  }
  const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;
  const statisticsURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
  // const uploadsURL = `https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=${YOUTUBE_CHANNEL_ID}&type=video&maxResults=100&key=${YOUTUBE_API_KEY}`;
  console.log("fetching data", statisticsURL);
  const statsData = await fetchData(statisticsURL);
  console.log("statsData", statsData);
  if (!statsData?.items?.length || !uploadsData?.items?.length)
    throw new Error("error fetching data");
  return {
    stats: statsData?.items[0]?.statistics,
  };
};

export const getAllPost = async () => {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
  return posts;
};

export async function getPostBySlug(slug) {
  const post = allPosts.find((post) => post.slugAsParams === slug);
  // const content = await unified()
  //   .use(parse)
  //   .use(remark2react)
  //   .use(remarkEmoji)
  //   .use(remarkImage)
  //   .use(html)
  //   .process(post.content);
  // return {
  //   ...post,
  //   content: content.result,
  // };
  return post;
}


export function formatDate (date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options)
}
