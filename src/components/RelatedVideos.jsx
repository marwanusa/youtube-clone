import { useNavigate } from "react-router-dom";
import useGetRecomended from "../hooks/useGetRecomended";

const RelatedVideos = () => {
  const { data, isLoading, isError, error } = useGetRecomended();
  const navigate = useNavigate();
  if (isLoading) return( <div>Loading...</div>);
  if (isError) return (<div>Error: {error.message}</div>);  
  const handleChannelClick = (channelId) => {
    navigate(`/channel/${channelId}`);
  };
  return (
    <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2">
      {data?.items.map((item) => (
        <div
          key={item.id.videoId}
          className="flex flex-col gap-2  max-w-[400px] rounded-xl "
        >
          <img
          className="w-full rounded-xl cursor-pointer"
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title}
          />
          <div className="flex gap-2">
            <img
              className="w-10 h-10 rounded-full cursor-pointer"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="avatar"
              onClick={() => handleChannelClick(item.snippet.channelId)} 
              
            />
            <div className="flex flex-col">
            <h4 className="max-w-[300px] max-h-[48px] overflow-hidden cursor-pointer hover:underline">{item.snippet.title}</h4>
            <p className="text-[#878787] text-sm cursor-pointer hover:underline"  onClick={() => handleChannelClick(item.snippet.channelId)} >
              {item.snippet.channelTitle}
            </p>
            <p className="text-[#878787] text-sm">
              {item.snippet.publishTime}
            </p>
            </div>

          </div>

        </div>
      ))}
    </div>
  );
};

export default RelatedVideos;
