import React from "react";
import {Outlet, NavLink,useNavigate, Navigate } from "react-router-dom";
import Bollywood from "../components/categories/Bollywood";

export default function SearchCategory() {
  const navigate = useNavigate();
  
  const activeLink = "bg-rose-900 font-bold text-white"
  return (
    <div className="">
      <div className="flex flex-col items-center mt-[3rem]">
        <p className="mb-[2rem] text-[2rem]">Lets find a movie to watch!</p>
        <form className="w-1/2 mb-[1rem]">
          <div className="">
            <input
              className="border border-black text-center w-[100%] h-[3rem]  p-3 rounded "
              type="text"
              placeholder="search here ..."
            />
          </div>
        </form>
      </div>

      <section className="flex  flex-wrap justify-between  mb-[1rem] pl-[1rem] pr-[1rem]">
        <div>
          <NavLink to='all' >
            <button  className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover: active:bg-rose-900 ">
            All
          </button>
          </NavLink>
         
          
          
        </div>
        <div>
          <NavLink to='action'
            className={({isActive})=>isActive?'font-bold ':''}>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover: active:bg-rose-900">
            Action
          </button></NavLink>
        
          
      
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:active:bg-rose-900">
            Horror
          </button>
        </div>

        <div>
          <button onClick={()=>navigate('/category/bollywood')} className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover: active:bg-rose-900">
            Bollywood
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:active:bg-rose-900">
            Hollywood
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:active:bg-rose-900">
            Documentary
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900  hover:text-white hover:active:bg-rose-900">
            Sports genre
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover: active:bg-rose-900">
            Mystery
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:active:bg-rose-900">
            Cyber
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900  hover:text-white hover:active:bg-rose-900">
            Musical
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:active:bg-rose-900">
            Colombia
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:active:bg-rose-900">
            Experimental
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:active:bg-rose-900">
            Crime
          </button>
        </div>
        <div>
          <button className="rounded bg-rose-200 w-[100%]  p-2 hover:bg-rose-900 hover:text-white hover:active:bg-rose-900">
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
