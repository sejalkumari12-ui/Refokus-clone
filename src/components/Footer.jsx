import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl py-10 flex gap-32 mx-auto'>
         <div className='basis-1/2 '>
         <h1 className='text-[11.5em] font-semibold leading-none tracking-tight'>
           refokus.
         </h1>
         
         </div>
         <div className='basis-1/2 flex gap-5'> 
         <div className='basis-1/3'>
            <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
            {["instagram","twitter(x?)","Linkedin"].map((item,index)=> <a className='block mt-3 text-zinc-600 capitalize'>{item}</a>   )}
         </div>

          <div className='basis-1/3'>
            <h4 className='mb-10 text-zinc-600 capitalize'>socials</h4>
            {["home","work","careers","contact"].map((item,index)=> <a className='block mt-3 text-zinc-200 capitalize'>{item}</a>   )}
         </div>
         <div className='basis-1/2'>
            <p className='text-right'> Refokus is pioneering digital agency driven by design and
              empowered by technology.</p>
              <img src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" className='w-32 mt-12' />
         </div>
         
         
         
         </div>


        </div>
      
    </div>
  )
}

export default Footer

