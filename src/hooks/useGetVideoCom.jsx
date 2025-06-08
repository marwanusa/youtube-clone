import axios from 'axios';
import { options } from '../api/api';
import { useQuery } from '@tanstack/react-query';
const fetchFromAPI = async (videoId) => {
  const result = await axios.get(`https://youtube-v2.p.rapidapi.com/video/comments?video_id=${videoId}`, options)
  return result.data;
}
const useGetVideoCom= (videoId) => {
    const query = useQuery({
      queryKey: [`videoComments/${videoId}`],
      queryFn: () => fetchFromAPI(videoId),
      staleTime: 1000 * 60 * 3,
  })
  return query;
}

export default useGetVideoCom