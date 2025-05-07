import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { options } from "../api/api";
const fetchFromAPI = async (channelId) => {
  const result = await axios.get(
    `https://youtube-v31.p.rapidapi.com/search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=50`,
    options
  );
  return result.data;
};
const useGetChannelVid = (channelId) => {
  const query = useQuery({
    queryKey: [`channel/${channelId}/videos`],
    queryFn: () => fetchFromAPI(channelId),
    enabled: !!channelId,
    staleTime: 1000 * 60 * 3,
  });
  return query;
};

export default useGetChannelVid;
