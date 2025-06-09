import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useGetVideoDet from "../hooks/useGetVideoDet";
import useGetVideoCom from "../hooks/useGetVideoCom";
import useGetVideoRecom from "../hooks/useGetVideoRecom";
import { BeatLoader } from "react-spinners";

function VideoDetails() {
  const { videoId } = useLoaderData();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

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
  const {
    data: statsData,
    isLoading: isStatsLoading,
    isError: isStatsError,
    error: statsError,
  } = useGetVideoDet(videoId);
  const {
    data: commentsData,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
    error: commentsError,
  } = useGetVideoCom(videoId);
  const {
    data: recommendedData,
    isLoading: isRecommendedLoading,
    isError: isRecommendedError,
    error: recommendedError,
  } = useGetVideoRecom(videoId);
  if (isStatsError) return <div>Error: {statsError.message}</div>;
  if (isCommentsError) return <div>Error: {commentsError.message}</div>;
  if (isRecommendedError) return <div>Error: {recommendedError.message}</div>;

  return (
    <>
      {isStatsLoading || isCommentsLoading || isRecommendedLoading ? (
        <div className="flex justify-center items-center h-[calc(100vh-76px)]">
          <BeatLoader color="#ff0000" />{" "}
        </div>
      ) : (
        <div className="flex flex-row gap-6  w-full px-4 py-6">
          {/* Left: Video, Description, Comments */}
          <div className="flex flex-col basis-[70%] max-w-[900px]">
            {/* Video Player */}
            <div className="w-full aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video Player"
              />
            </div>
            {/* Video Title */}
            <h1 className="text-xl font-bold text-white mb-2">
              {statsData.title}
            </h1>

            {/* Video Description */}
            <div
              className={`bg-[#272727] rounded-lg p-4 mb-4 text-gray-200 flex flex-col gap-2 cursor-pointer`}
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              <span className="flex gap-2">
                <p>{calculateViews(statsData.number_of_views)}</p>
                <p>{statsData.published_date}</p>
              </span>
              <h6 className={`${isExpanded ? "" : "line-clamp-2"}`}>{statsData.description}</h6>
              {!isExpanded && "...more"}
            </div>
            {/* Comments */}
            <div className="rounded-lg p-2">
              <h2 className="text-lg font-semibold text-white mb-3">
                {commentsData.total_number_of_comments} Comments
              </h2>
              <div className="flex flex-col gap-3">
                {commentsData.comments.map((comment, idx) => (
                  <div
                    key={idx}
                    className="flex gap-2 items-center  rounded-md py-3"
                  >
                    <img
                      src={comment.thumbnails[0].url}
                      alt={comment.author_name}
                      className="w-10 h-10 rounded-full cursor-pointer"
                      onClick={() =>
                        handleChannelClick(comment.author_channel_id)
                      }
                    />
                    <div className="flex flex-col">
                      <div className="flex gap-2 items-center">
                        <span
                          className="font-bold text-sm text-blue-300 cursor-pointer"
                          onClick={() =>
                            handleChannelClick(comment.author_channel_id)
                          }
                        >
                          {comment.author_name}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {comment.published_time}
                        </span>
                      </div>

                      <span className="text-gray-200">{comment.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right: Recommended Videos */}
          <div className="flex flex-col basis-[27%] gap-4 ">
            <h2 className="text-lg font-semibold text-white mb-2">
              Recommended
            </h2>
            {recommendedData.videos.map((rec, idx) => (
              <div
                key={idx}
                className="flex gap-3 bg-[#181818] rounded-lg p-2 hover:bg-[#232323] cursor-pointer"
                onClick={() => handleVideoClick(rec.video_id)}
              >
                <img
                  src={rec.thumbnails[0].url}
                  alt={rec.title}
                  className="w-28 h-16 rounded-md object-cover"
                />
                <div className="flex flex-col justify-between">
                  <span className="font-bold text-white text-sm">
                    {rec.title}
                  </span>
                  <span className="text-xs text-gray-400">{rec.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default VideoDetails;
