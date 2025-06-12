import React from 'react'
import { useNavigate } from 'react-router-dom';
import calculateViews from '../utils/calculateViews';
import handleChannelClick from '../utils/handleChannelClick';
import handleVideoClick from '../utils/handleVideoClick';

const VideoCard = ({item,isThereAvatar}) => {
    const navigate = useNavigate();

  return (
    <div
    key={`${item.video_id}`}
      className="flex flex-col gap-2  max-w-[400px] rounded-xl md:m-0 mx-auto"
    >
        <div className="relative" onClick={() => handleVideoClick(item.video_id,navigate)} >
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
          src="https://avatar.iran.liara.run/public/5"
          alt="avatar"
          onClick={() => handleChannelClick(item.channel_id,navigate)} 
          
        />}

        <div className="flex flex-col">
        <h4 className="max-w-[300px] max-h-[48px] overflow-hidden cursor-pointer hover:underline">{item.title}</h4>
        <p className="text-[#878787] text-sm cursor-pointer hover:underline"  onClick={() => handleChannelClick(item.channel_id,navigate)} >

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