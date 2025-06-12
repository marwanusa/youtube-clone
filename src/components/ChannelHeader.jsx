import React from 'react'
import useGetChannelDet from '../hooks/useGetChannelDet';
import ChannelHeaderSkeleton from './feedback/skeletons/ChannelHeaderSkeleton';

const ChannelHeader = ({channelId}) => {
  const { data, isLoading, isError } = useGetChannelDet(channelId);


  if (isLoading) {
    return (
      <div className="flex flex-col gap-5 ml-5 mr-5">
        <ChannelHeaderSkeleton />
      </div>
    );
  }
  if (isError) return <div>Error loading channel data</div>
  return (
    <div className='flex flex-col gap-3'>
    <img
  src={
    Array.isArray(data.banner) && data.banner[1]?.url
      ? data.banner[1].url
      : "/default-banner.jpg"
  }
  alt="channel banner"
/>
      <div className="flex gap-7 items-center">
        <img
        className="md:w-40 md:h-40 w-30 h-30 rounded-full"
        src={data.avatar?.[2]?.url || "https://i.pravatar.cc/40"}
          alt=""
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-4xl font-medium">{data.title}</h1>
          <span className="flex gap-1 text-gray-300">
            <p>{data.subscriber_count}</p>
            <p>. 999 videos</p>
          </span>
          <button className="w-[120px] bg-[#ffffff] hover:bg-[#ebe9e9] text-black font-bold py-2 px-4 rounded-3xl cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChannelHeader