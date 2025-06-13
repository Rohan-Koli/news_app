import React from 'react'
import { useNavigate } from 'react-router-dom'
function  Nav() {
    const navigate = useNavigate()
  return (
    <div className='w-full bg-gray-100  flex justify-between px-20 py-5 items-start ' >
        <div className='font-bold text-xl'>NEWS 24/7</div>
        <div className='flex text-xl font-semibold justify-between items-center gap-10'>
            <div onClick={()=>navigate("/")}>News</div>
            <div onClick={()=>navigate("/Bookmark")}>Bookmark</div>
        </div>
    </div>
  )
}

export default  Nav