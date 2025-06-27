import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width,start,para,hover}) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl hover:${hover} text-white  ${width} min-h-[30rem] flex flex-col justify-between`}>
    <div className='w-full'>
       <div className='w-full flex justify-between items-center'>
      <h3 className='font-small font-light'>one heading</h3>
      < IoIosArrowRoundForward />
     </div>
     <h1 className='text-3xl text-medium mt-5'>whatever heading</h1>
    </div>
    <div className='down w-full '>
      {
        start &&(
          <>
          <h1 className='text-5xl font-semibold tracking-tighter leading-none'>start a project</h1>
      <button className='rounded-full px-4 py-1 border-[1px] border-zinc-200 mt-5'>Contact us</button>
          
          </>
        ) 
      }
       {para &&(
 <p className='text-sm text-zinc-500 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, reprehenderit.</p>

       )}
     
    </div>
    </div>
  )
}

export default Card
