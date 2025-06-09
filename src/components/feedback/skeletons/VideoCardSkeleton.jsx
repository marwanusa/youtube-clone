const VideoCardSkeleton = () => {
    return (
      <div className="flex flex-col gap-2 max-w-[400px] animate-pulse">
        <div className="w-full h-[200px] bg-[#333] rounded-xl" />
        <div className="flex gap-2 mt-2">
          <div className="w-10 h-10 rounded-full bg-[#444]" />
          <div className="flex flex-col gap-2 flex-1">
            <div className="w-3/4 h-4 bg-[#444] rounded" />
            <div className="w-1/2 h-3 bg-[#444] rounded" />
            <div className="w-2/3 h-3 bg-[#444] rounded" />
          </div>
        </div>
      </div>
    );
  };
  
  export default VideoCardSkeleton;
  