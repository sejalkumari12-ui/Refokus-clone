import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-10 py-4 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex justify-between items-center'>
       <img src={val.url} alt="" />
         <span className='font-semibold'>{val.Number}</span>
      
    </div>
  )
}

export default Stripe
