import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function Button({title="Get started"}) {
  return (
    <div className='w-40  px-5 py-2 bg-zinc-100 text-black rounded-full flex justify-between items-center'>
      <span className='text-md font-medium '>{title}</span>
       <MdOutlineKeyboardDoubleArrowRight  className='text-xl '/>
    </div>
  )
}

export default Button
