import React, { useState, useEffect } from "react";
import GetStartedForm from "../forms/GetStartedForm";
import hindi from "../../assets/hrithik.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  const [backgroundImage, setBackGroundImage] = useState(0);
  const imageList = [hindi];
  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //       setBackGroundImage((prevIndex)=>(prevIndex + 1) % imageList.length)
  //   },5000)
  // },[])

  return (
    <div
      className="bg-cover h-screen "
      style={{ backgroundImage: `url(${imageList[backgroundImage]})` }}
    >
      <div className="bg-black bg-opacity-50 h-full p-3  ">
        <div className="flex justify-between  ">
          <div>Magnet</div>
          <div className=" h-5 ">
            <button className="btn-primary">
              <Link to="/login">Sign In</Link>
            </button>
          </div>
          </div>

          <div className="flex flex-col justify-between items-center space-y-[2rem]  lg:space-y-[1rem] p-3 mt-[10%]">
            <div>
              <h1 className="text-3xl font-bold lg:text-[4rem] text-white">
                Say No More To Movie Search{" "}
              </h1>
            </div>
            <div>
              {" "}
              <h2 className="text-white font-bold text-2xl">Get Notified Anywhere</h2>
            </div>
            <div>
              {" "}
              <p className="text-white font-semibold">Ready ?</p>
            </div>
            <div>
              {" "}
              <h1 className="text-white text-[3rem]">Lets Get Started</h1>
            </div>
            <div>
              <GetStartedForm />
            </div>
          </div>
        </div>
      </div>
      
    
  );
}
