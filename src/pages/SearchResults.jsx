import React from 'react'
import { useLoaderData } from 'react-router-dom';
import useGetSearchRes from '../hooks/useGetSearchRes';

function SearchResults() {
  const { searchTerm } = useLoaderData();
  const {data,isLoading,error,isError} = useGetSearchRes(searchTerm);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div className="grid grid-cols-1 gap-6">
      {
        data.items.map((item) => (
          <div key={item.id.videoId} className="flex gap-3">
            <img
              src={item.snippet.thumbnails.high.url}
              alt=""
              className="w-[410px] h-[250px]"
            />
            <div className='flex flex-col gap-2 max-w-[660px] overflow-hidden'>
              <span className='text-xl'>{item.snippet.title}</span>
              <div className=''>
              <img
                  src={"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                  alt=""
                  className="w-10 h-10 rounded-full inline mr-2"
                />
              <span className='text-[#878787] text-sm '>{item.snippet.channelTitle}</span>
              </div>
              <span className='text-[#878787]'>{item.snippet.publishTime} . Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default SearchResults