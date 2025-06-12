import React, { useEffect, useRef } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useGetSearchRes from "../hooks/useGetSearchRes";
import { BeatLoader } from "react-spinners";
import Spinner from "../components/feedback/Spinner";

function SearchResults() {
  const { searchTerm } = useLoaderData();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useGetSearchRes(searchTerm);
  const navigate = useNavigate();
  const handleChannelClick = (channelId) => {
      navigate(`/channel/${channelId}`);
    };
    const handleVideoClick = (videoId) => {
      navigate(`/video/${videoId}`);
    };
  const calculateViews = (views) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M views`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K views`;
    } else {
      return `${views} views`;
    }
  };

  const observerRef = useRef();
  // Infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[calc(100vh-76px)]">
        <BeatLoader color="#ff0000" />{" "}
      </div>
    );
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        {data.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.videos.map((item) => (
              <div key={item.video_id} className="flex flex-col mx-auto md:mx-0 md:flex-row gap-3" >
                <div className="relative w-[410px] h-[250px]" onClick={() => handleVideoClick(item.video_id)} >
                  <img
                    src={item.thumbnails?.[1]?.url || item.thumbnails?.[0]?.url}
                    alt=""
                    className="min-w-[410px] h-[250px] cursor-pointer"
                    
                  />
                  <span className="absolute bottom-2 right-6 md:right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                    {item.video_length}
                  </span>
                </div>
                <div className="ml-2 md:ml-0 flex flex-col gap-2 w-[25rem] md:w-[30rem]  overflow-hidden ">
                  <span className="text-[18px] cursor-pointer" onClick={() => handleVideoClick(item.video_id)}>
                    {item.title}
                  </span>
                  <div >
                    <img
                      src="https://avatar.iran.liara.run/public/5"
                      alt=""
                      className="w-7 h-7 rounded-full inline mr-2 cursor-pointer"
                      onClick={() => handleChannelClick(item.channel_id)}
                    />

                    <span className="text-[#878787] text-sm cursor-pointer" onClick={() => handleChannelClick(item.channel_id)}>
                      {item.author}
                    </span>
                    <span className="text-[#878787] text-sm block mt-2">
                      {calculateViews(item.number_of_views)} .{" "}
                      {item.published_time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div ref={observerRef} className="h-10 w-full"></div>
      {isFetchingNextPage && (
        <div className="text-white text-center py-4">
          <Spinner />
        </div>
      )}
      {!hasNextPage && (
        <div className="text-gray-400 text-center py-4">No more videos</div>
      )}
    </>
  );
}

export default SearchResults;
