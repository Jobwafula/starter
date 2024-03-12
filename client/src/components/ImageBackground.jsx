import React,{useEffect, useState} from 'react'

export default function ImageBackground() {
    const [backgroundImage,setBackGroundImage]= useState(0)
    const imageList = [
        'url(/images/image1.jpg)',
        'url(/images/image2.jpg)',
        'url(/images/image3.jpg)',
      ];
      useEffect(()=>{
        const interval = setInterval(()=>{
            setBackGroundImage((prevIndex)=>(prevIndex + 1) % imageList.length)
        },3000)
      },[])
      
    return () => clearInterval(interval);
  return (
    <div>ImageBackground</div>
  )
}
