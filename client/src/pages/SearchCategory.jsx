import React from 'react'
import Hollywood from '../components/categories/Hollywood'
import Bollywood from '../components/categories/Bollywood'

export default function SearchCategory() {
  return (
    <div className=''>
        <form className='flex flex-col items-center'>
            <input className='border text-center w-[100%] h-[3rem]  p-3 rounded ' type="text"  placeholder='search here ...'/>
        </form>
        <section className='space-x-2'>
          <button className='hover:underline active:underline'>Hollywood</button>
          <button className='hover:underline'>Bollywood</button>
          <button className='hover:underline'>Nollywood</button>
          <button className='hover:underline'>Colombia</button>
          
        </section>
        <sectin>
          <Bollywood />
        <Hollywood />

        </sectin>
        
    </div>
  )
}
