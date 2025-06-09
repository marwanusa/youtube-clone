import { BeatLoader } from "react-spinners";
import useGetRecomended from "../hooks/useGetRecomended";
import VideoCard from "./VideoCard";

const RelatedVideos = () => {
  const { data, isLoading, isError, error } = useGetRecomended();
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-[calc(100vh-76px)]">
          <BeatLoader color="#ff0000" />{" "}
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 ">
          {data?.videos.map((item,idx) => (
            <div key={idx}>
              <VideoCard  item={item} isThereAvatar={true} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default RelatedVideos;
