import { useLoaderData } from "react-router-dom";
import ChannelHeader from "../components/ChannelHeader";
import useGetChannelVid from "../hooks/useGetChannelVid";
import VideoCard from "../components/VideoCard.jsx";
const ChannelPage = () => {
  const { channelId } = useLoaderData();
  const { data, isLoading, isError } = useGetChannelVid(channelId);
  
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading channel data</div>
  return (
    <div className="flex flex-col gap-5 ml-5 mr-5">
      <ChannelHeader channelId = {channelId}/>
      <hr />
      <div className="flex gap-2">
        <button className=" cursor-pointer bg-[#272727] hover:bg-[#ffffff6b] text-white font-bold py-1 px-3 rounded">
          Latest
        </button>
        <button className=" cursor-pointer bg-[#272727] hover:bg-[#ffffff6b] text-white font-bold py-1 px-3 rounded">
          Popular
        </button>
        <button className=" cursor-pointer bg-[#272727] hover:bg-[#ffffff6b] text-white font-bold py-1 px-3 rounded">
          Oldest
        </button>
      </div>
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-3">
        {data?.videos.map((item) => (
          <VideoCard item={item} isThereAvatar={false} />
        ))}
      </div>
    </div>
  );
};

export default ChannelPage;
