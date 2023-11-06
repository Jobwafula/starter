import React from 'react'
import { Link } from 'react-router-dom'


  

export default function GetStartedForm() {
  
  return (
    <div>
        <form  className=' flex flex-col space-y-4  md:space-y-0 lg:space-y-0 md:flex-row lg:flex-row md:space-x-4 lg:space-x-4 '>
            <div className=''>  <input className='text-center w-[100%] h-[3rem]  p-3 rounded'  placeholder='Email Address'/></div>
            <div className=''>
            
                <button  className='btn-primary ' type='submit'>
                  <Link to='/category'>Get Started</Link> 
            
                 </button>
            </div>
          
        </form>
    </div>
  )
}
