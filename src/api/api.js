const BASE_URL = import.meta.env.VITE_BASE_URL;

export const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST,
  },
};

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   return data;
// };
