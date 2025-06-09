const ChannelHeaderSkeleton = () => {
    return (
      <div className="flex flex-col gap-3 animate-pulse">
        <div className="w-full h-[200px] bg-[#333] rounded-lg" />
        <div className="flex gap-7 items-center">
          <div className="w-40 h-40 bg-[#444] rounded-full" />
          <div className="flex flex-col gap-4">
            <div className="w-48 h-6 bg-[#444] rounded" />
            <div className="w-64 h-4 bg-[#444] rounded" />
            <div className="w-[120px] h-10 bg-[#555] rounded-3xl" />
          </div>
        </div>
      </div>
    );
  };
  
  export default ChannelHeaderSkeleton;
  