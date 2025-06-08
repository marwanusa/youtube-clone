import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { options } from "../api/api";

const fetchChannelVideos = async ({ pageParam = null, queryKey }) => {
  const channelId = queryKey[1];
  const url = pageParam
    ? `https://youtube-v2.p.rapidapi.com/channel/videos/continuation?channel_id=${channelId}&continuation_token=${pageParam}`
    : `https://youtube-v2.p.rapidapi.com/channel/videos?channel_id=${channelId}`;

  const response = await axios.get(url, options);
  return response.data;
};

const useInfiniteChannelVideos = (channelId) => {
  return useInfiniteQuery({
    queryKey: ["channelVideos", channelId],
    queryFn: fetchChannelVideos,
    getNextPageParam: (lastPage) => lastPage.continuation_token, 
    staleTime: 1000 * 60 * 5,
  });
};

export default useInfiniteChannelVideos;
