import { options } from "../api/api";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const fetchFromAPI = async (searchTerm) => {
    const result = await axios.get(
      `https://youtube-v31.p.rapidapi.com/search?q=${searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
      options
    );
    return result.data;
  };
const useGetSearchRes = (searchTerm) => {
    const query = useQuery({
        queryKey: [`search/${searchTerm}`],
        queryFn: fetchFromAPI,
        staleTime: 1000 * 60 * 3,
    })
    return query;
}

export default useGetSearchRes;