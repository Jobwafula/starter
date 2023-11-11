import React from 'react'
import GetStartedForm from '../forms/GetStartedForm'
import hindi from '../../assets/hrithik.jpg'


export default function Hero() {
  console.log(hindi)
  return (
    <div className="relative" > 
    <div className=''>
    <img  className='z-[-1] w-screen h-screen inset-0 absolute ' alt='image' src={hindi} /> 
    </div> 
         <div className='h-screen    bg-gradient-to-r from-black to-sky-1 '>
         <div className='flex justify-between p-3' >
            <div>Magnet</div>
            <div className='flex justify-end h-5 '>
                <button className='btn-primary'>Sign In</button>
            </div>
        </div>
        <div className='flex flex-col items-center  space-y-[1rem] mt-[10%]'>
        <div><h1 className='text-[3rem] text-white'>Say No More To Movie Search </h1></div>
        <div> <h2 className='text-white'>Get Notified Anywhere</h2></div>
        <div> <p className='text-white'>Ready ?</p></div>
        <div> <h1 className='text-white'>Lets Get Started</h1></div>  
        <div>
            <GetStartedForm />
        </div>
        </div>
         </div>
    </div>
  )
}
