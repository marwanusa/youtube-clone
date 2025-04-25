import useGetRecomended from "../hooks/useGetRecomended";

const RelatedVideos = () => {
  const {data,isLoading,isError,error} = useGetRecomended();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  console.log(data);
  return (
    <div>
       {data.items.map((item) => (
        <div key={item.id.videoId}>
          <h4>{item.snippet.title}</h4>
          <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
        </div>
      ))} 

    </div>
  );
};

export default RelatedVideos;
