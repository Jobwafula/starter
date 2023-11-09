import React from "react";
import {Outlet, NavLink,useNavigate } from "react-router-dom";
export default function SearchCategory() {
  const navigate = useNavigate()
  return (
    <div className="bg-rose-100">
      <div className="flex flex-col items-center mt-[1rem]">
        <p className="mb-[1rem] ">Lets find a movie to watch!</p>
        <form className="w-1/2 mb-[1rem]">
          <div className="">
            <input
              className="border text-center w-[100%] h-[3rem]  p-3 rounded "
              type="text"
              placeholder="search here ..."
            />
          </div>
        </form>
      </div>

      <section className="flex  flex-wrap justify-between  mb-[1rem] pl-[1rem] pr-[1rem]">
        <div>
         
          <button onClick={()=>{navigate('all')}} className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:underline active:bg-rose-900 ">
            All
          </button>
          
        </div>
        <div>
          <NavLink to='action' className='active:bg-rose-900'>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:underline active:bg-rose-900">
            Action
          </button></NavLink>
        
          
      
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:underline active:bg-rose-900">
            Horror
          </button>
        </div>

        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:underline active:bg-rose-900">
            Commedy
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:underline active:bg-rose-900">
            Hollywood
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:underline active:bg-rose-900">
            Documentary
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900  hover:text-white hover:underline active:bg-rose-900">
            Sports genre
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:underline active:bg-rose-900">
            Mystery
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:underline active:bg-rose-900">
            Cyber
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900  hover:text-white hover:underline active:bg-rose-900">
            Musical
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:underline active:bg-rose-900">
            Colombia
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:underline active:bg-rose-900">
            Experimental
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:underline active:bg-rose-900">
            Crime
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:underline active:bg-rose-900">
            Drama
          </button>
        </div>
      </section>
      <Outlet />
      <sectin>
      
      </sectin>
    </div>
  );
}
