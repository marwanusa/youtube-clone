import { options } from "../api/api";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const fetchFromAPI = async (searchTerm) => {
    const result = await axios.get(
      `https://youtube-v2.p.rapidapi.com/search/?query=${searchTerm}&lang=en&order_by=this_month&country=us`,
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