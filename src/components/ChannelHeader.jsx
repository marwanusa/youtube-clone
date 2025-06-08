import React from 'react'
import useGetChannelDet from '../hooks/useGetChannelDet';

const ChannelHeader = ({channelId}) => {
  const { data, isLoading, isError } = useGetChannelDet(channelId);
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading channel data</div>
  return (
    <div className='flex flex-col gap-3'>
    <img src={data.banner[1].url} alt="channel banner"/>
      <div className="flex gap-7 items-center">
        <img
        className="w-40 h-40 rounded-full"
          src={data.avatar[2].url}
          alt=""
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium">{data.title}</h1>
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