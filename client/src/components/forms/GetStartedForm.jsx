import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function GetStartedForm() {
  const [email,setEmail] = useState('')
  // register email
  const register =async ()=>{
    try{
      await  axios.post('http://localhost:3000/api/register',{email})
    }
    catch(error){
      console.error("Error",error)

    }
    

  }
  
  const handleClick = (e)=>{
    e.preventDefault()
    register()


  }
  
  return (
    <div>
        <form  className=' flex flex-col space-y-4  md:space-y-0 lg:space-y-0 md:flex-row lg:flex-row md:space-x-4 lg:space-x-4 '>
            <div className=''>  <input className='text-center w-[100%] h-[3rem]  p-3 rounded' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Email Address'/></div>
            <div className=''>
                <button  className='btn-primary ' type='submit'onClick={handleClick}>
                  <Link to='/pages/subscription'>Get Started</Link> 
                 </button>
            </div>
          
        </form>
    </div>
  )
}
