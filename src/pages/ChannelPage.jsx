import { useLoaderData } from "react-router-dom";
import ChannelHeader from "../components/ChannelHeader";
import useInfiniteChannelVideos from "../hooks/useInfiniteChannelVideos";
import VideoCard from "../components/VideoCard.jsx";
import { useRef, useEffect } from "react";
import Spinner from "../components/feedback/Spinner.jsx";

const ChannelPage = () => {
  const { channelId } = useLoaderData();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteChannelVideos(channelId);

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

    if (observerRef.current){ 
      observer.observe(observerRef.current)
    };

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current)
      };
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (isError) return <div className="text-white">Error fetching videos</div>;

  return (
    <div className="flex flex-col gap-5 ml-5 mr-5">
      <ChannelHeader channelId={channelId} />
      <hr />
      <div className="flex gap-2">
        <button className="cursor-pointer bg-[#272727] hover:bg-[#ffffff6b] text-white font-bold py-1 px-3 rounded">
          Latest
        </button>
        <button className="cursor-pointer bg-[#272727] hover:bg-[#ffffff6b] text-white font-bold py-1 px-3 rounded">
          Popular
        </button>
        <button className="cursor-pointer bg-[#272727] hover:bg-[#ffffff6b] text-white font-bold py-1 px-3 rounded">
          Oldest
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-3">
        {data.pages.map((page, i) =>
          page.videos.map((video, idx) => (
            <VideoCard key={`${i}-${idx}`} item={video} isThereAvatar={false} />
          ))
        )}
      </div>
      {/* Loading Feedback */}
      <div ref={observerRef} className="h-10 w-full"></div>
      {isFetchingNextPage && (
        <div className="text-white text-center py-4"><Spinner/></div>
      )}
      {!hasNextPage && (
        <div className="text-gray-400 text-center py-4">No more videos</div>
      )}
    </div>
  );
};

export default ChannelPage;
