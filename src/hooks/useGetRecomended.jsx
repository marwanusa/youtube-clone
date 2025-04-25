import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { options } from '../api/api'
const fetchFromAPI = async () => {
    const result = await axios.get("https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=60", options)
    return result.data;
}
const useGetRecomended = () => {
    const query = useQuery({
        queryKey: ['recomended'],
        queryFn: fetchFromAPI ,
        staleTime: 1000 * 60 * 3,
    })
  return query;
}

export default useGetRecomended