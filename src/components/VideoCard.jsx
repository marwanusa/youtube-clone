import React from 'react'
import { useNavigate } from 'react-router-dom';

const VideoCard = ({item,isThereAvatar}) => {
    const navigate = useNavigate();
    const handleChannelClick = (channelId) => {
        navigate(`/channel/${channelId}`);
      };
      const calculateViews = (views) => {
        if (views >= 1000000) {
          return `${(views / 1000000).toFixed(1)}M views`;
        } else if (views >= 1000) {
          return `${(views / 1000).toFixed(1)}K views`;}
        else {
          return `${views} views`;
        }
      }
  return (
    <div
    key={`${item.video_id}`}
      className="flex flex-col gap-2  max-w-[400px] rounded-xl "
    >
        <div className="relative">
        <img
      className="w-full rounded-xl cursor-pointer"
        src={item.thumbnails[2].url}
        alt={item.title}
      />
        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
    {item.video_length}
  </span>
        </div>
      <div className="flex gap-2">
        {isThereAvatar &&         <img
          className="w-10 h-10 rounded-full cursor-pointer"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="avatar"
          onClick={() => handleChannelClick(item.channel_id)} 
          
        />}

        <div className="flex flex-col">
        <h4 className="max-w-[300px] max-h-[48px] overflow-hidden cursor-pointer hover:underline">{item.title}</h4>
        <p className="text-[#878787] text-sm cursor-pointer hover:underline"  onClick={() => handleChannelClick(item.channel_id)} >
          {item.author}
        </p>
        <p className="text-[#878787] text-sm">
          {item.published_time} . {calculateViews(item.number_of_views)}
        </p>
        </div>
      </div>

    </div>
  )
}

export default VideoCard