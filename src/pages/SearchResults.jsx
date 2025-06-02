import React from "react";
import { useLoaderData } from "react-router-dom";
import useGetSearchRes from "../hooks/useGetSearchRes";

function SearchResults() {
  const { searchTerm } = useLoaderData();
  const { data, isLoading, error, isError } = useGetSearchRes(searchTerm);
  const calculateViews = (views) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M views`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K views`;
    } else {
      return `${views} views`;
    }
  };
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div className="grid grid-cols-1 gap-6">
      {data.videos.map((item) => (
        <div key={item.video_id} className="flex gap-3">
          <div className="relative">
          <img
            src={item.thumbnails?.[1]?.url || item.thumbnails?.[0]?.url}
            alt=""
            className="w-[410px] h-[250px] cursor-pointer"
          />
                        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
    {item.video_length}
  </span>
          </div>

          <div className="flex flex-col gap-2 max-w-[660px] overflow-hidden">
            <span className="text-[18px] cursor-pointer">{item.title}</span>
            <div className="">
              <img
                src={
                  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                }
                alt=""
                className="w-7 h-7 rounded-full inline mr-2 cursor-pointer"
              />


              <span className="text-[#878787] text-sm cursor-pointer">{item.author}</span>
              <span className="text-[#878787] text-sm block mt-2">
              {calculateViews(item.number_of_views)} . {item.published_time}
            </span>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
