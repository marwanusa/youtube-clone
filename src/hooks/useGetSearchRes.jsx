import axios from "axios";
import { options } from "../api/api";
import { useInfiniteQuery } from "@tanstack/react-query";


const fetchFromAPI = async ({ pageParam = null, queryKey }) => {
  const searchTerm = queryKey[1];

  const baseUrl = "https://youtube-v2.p.rapidapi.com/search/";
  const url = pageParam
    ? `${baseUrl}continuation?continuation_token=${pageParam}&query=${searchTerm}&lang=en&country=us&order_by=this_year`
    : `${baseUrl}?query=${searchTerm}&lang=en&country=us&order_by=this_year`;

  const result = await axios.get(url, options);
  return result.data;
};


const useGetSearchRes = (searchTerm) => {
  return useInfiniteQuery({
    queryKey: ["search", searchTerm],
    queryFn: fetchFromAPI,
    getNextPageParam: (lastPage) => {
      return lastPage?.continuation_token || undefined;
    },
    staleTime: 1000 * 60 * 3,
    enabled: !!searchTerm, 
  });
};

export default useGetSearchRes;
