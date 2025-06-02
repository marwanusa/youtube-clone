import useGetRecomended from "../hooks/useGetRecomended";
import VideoCard from "./VideoCard";

const RelatedVideos = () => {
  const { data, isLoading, isError, error } = useGetRecomended();
  if (isLoading) return( <div>Loading...</div>);
  if (isError) return (<div>Error: {error.message}</div>);  

  return (
    <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2">
      {data?.videos.map((item) => (
        
        <VideoCard item={item} isThereAvatar={true}/>
      ))}
    </div>
  );
};

export default RelatedVideos;
