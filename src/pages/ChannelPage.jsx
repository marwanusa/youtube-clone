import { useLoaderData } from "react-router-dom";
import useGetChannelVid from "../hooks/useGetChannelVid";

const ChannelPage = () => {
  const { channelId } = useLoaderData();
  const { data, isLoading, isError, error } = useGetChannelVid(channelId);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div className="flex flex-col gap-5 ml-5 mr-5">
      <span className="w-full bg-gray-700 rounded-xl h-[180px] flex justify-center items-center text-3xl">
        Channel Cover
      </span>
      <div className="flex gap-7 items-center">
        <img
        className="w-50 h-50 rounded-full"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-medium">{data.items[0].snippet.channelTitle}</h1>
          <span className="flex gap-1 text-gray-300">
            <p>6.34M subscribers</p>
            <p>. 999 videos</p>
          </span>
          <button class="w-[120px] bg-[#ffffff] hover:bg-[#ebe9e9] text-black font-bold py-2 px-4 rounded-3xl cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
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
        {data.items.map((item) => (
          <div
            key={item.id.videoId}
            className="flex flex-col gap-2  max-w-[300px] rounded-xl "
          >
            <img
              className="w-full rounded-xl cursor-pointer"
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
            />
            <h4 className="max-w-[190px] max-h-[48px] overflow-hidden cursor-pointer hover:underline">
              {item.snippet.title}
            </h4>
            <div className="flex gap-2">
              <p>2.4M views . 3 days ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelPage;
