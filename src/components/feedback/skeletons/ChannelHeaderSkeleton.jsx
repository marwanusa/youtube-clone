const ChannelHeaderSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 animate-pulse px-4">
      {/* Banner */}
      <div className="w-full h-[150px] md:h-[200px] bg-[#333] rounded-lg" />
      {/* Avatar + Info */}
      <div className="flex flex-col md:flex-row gap-5 items-center md:items-start mt-4">
        {/* Avatar */}
        <div className="w-24 h-24 md:w-40 md:h-40 bg-[#444] rounded-full" />
        {/* Info */}
        <div className="flex flex-col gap-3 w-full items-center md:items-start">
          <div className="w-40 md:w-48 h-5 bg-[#444] rounded" />
          <div className="w-52 md:w-64 h-4 bg-[#444] rounded" />
          <div className="w-[100px] md:w-[120px] h-9 bg-[#555] rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default ChannelHeaderSkeleton;
