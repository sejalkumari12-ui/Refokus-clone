import React, { useState } from 'react'
import {motion, useMotionValueEvent, useScroll} from "framer-motion"



function Work() {
 const [images , setImages]= useState([
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d713cb10965e8dbdee18_YIR%202021%20-%204%203.webp" , top: "50%", left: "50%", isActive:true},
  {url:"https://i.ytimg.com/vi/Vlji0MHCo40/sddefault.jpg" , top: "56%", left:"44%" , isActive:false},
  {url:"https://www.cssdesignawards.com/cdasites/2022/202204/20220503053001.jpg" , top: "45%" , left:"56%" , isActive:false},
  {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67ac97539b2b1323a3eb7a01_arqitel-thumbnail_B-4_3.webp" , top: "60%" , left: "53%" , isActive:false},
  {url:"https://i.pinimg.com/736x/b1/60/01/b16001955a118673074ec76efcbf4571.jpg" , top: "65%" , left: "55%" , isActive:false},



 ])

  const {scrollYProgress}=useScroll();




   scrollYProgress.on("change",(data)=>{
   function imagesShow(arr){
  setImages(prev =>(
      prev.map((item,index)=>(
        arr.indexOf(index) === -1?(
          {...item, isActive:false}
        )
        :{...item,isActive:true}
      ))
  ))
   }

   switch(Math.floor(data*100)){
    case 0:
      imagesShow([])
      break;
      case 1:
        imagesShow([0])
      break;
      case 3:
        imagesShow([0,1])
      break;
      case 5:
        imagesShow([0,1,2])
      break;
       case 7:
       imagesShow([0,1,2,3])
      break;
       case 9:
       imagesShow([0,1,2,3,4])
      break;
  }
   })
  

  


  return (
    <div className='w-full  select-none'>
        <div className='max-w-screen-xl mx-auto py-20 text-center relative'>
            <h1 className='text-[30vw] font-sans leading-none font-medium tracking-tight select-none'> Work</h1>
             <div className='w-full h-full absolute top-0'>
              {images.map((elem , index)=>(
                elem.isActive &&  (  <img className='w-60 rounded-md absolute -translate-x-[30%] -translate-y-[10%]' src={elem.url} style={{top:elem.top , left: elem.left}} alt="" />)
              )
              )}
             </div>

        </div>

        
      
    </div>
  )
}

export default Work
