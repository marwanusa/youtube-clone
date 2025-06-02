import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { options } from '../api/api'
const fetchFromAPI = async () => {
    const result = await axios.get("https://youtube-v2.p.rapidapi.com/trending/?lang=en&country=us&section=Now", options)
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