import React from 'react'

const ListItem = ({text,img}) => {
  return (
    <>
    {
        img ? (    <li className="px-4 py-2 hover:bg-[#333] cursor-pointer flex justify-center items-center g-3">
            <img src={img} alt="" />
            {text}
          </li>) : (
            <li className="px-4 py-2 hover:bg-[#333] cursor-pointer ">
            {text}
          </li>
          )
    }
    </>


  )
}

export default ListItem