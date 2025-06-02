import { options } from "../api/api";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const fetchFromAPI = async (channelId) => {
    const result = await axios.get(
      `https://youtube-v2.p.rapidapi.com/channel/details?channel_id=${channelId}`,
      options
    );
    return result.data;
  };
const useGetChannelDet= (channelId) => {
    const query = useQuery({
        queryKey: ['channelDetails', channelId],
        queryFn: () => fetchFromAPI(channelId),
        staleTime: 1000 * 60 * 3,
    })
    return query;
}
export default useGetChannelDet;