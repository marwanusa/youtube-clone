import axios from 'axios';
import { options } from '../api/api';
import { useQuery } from '@tanstack/react-query';
const fetchFromAPI = async (videoId) => {
  const result = await axios.get(`https://youtube-v2.p.rapidapi.com/video/details?video_id=${videoId}`, options)
  return result.data;
}
const useGetVideoDet = (videoId) => {
    const query = useQuery({
      queryKey: [`videoDetails/${videoId}`],
      queryFn: () => fetchFromAPI(videoId),
      staleTime: 1000 * 60 * 3,
  })
  return query;
}

export default useGetVideoDet