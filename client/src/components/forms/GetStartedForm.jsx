import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function GetStartedForm() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  // register email
  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/register", {
        email,
      })
      .then((result) => {
        console.log(result);
        console.log(result.json);

        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form className=" flex flex-col space-y-4  md:space-y-0 lg:space-y-0 md:flex-row lg:flex-row md:space-x-4 lg:space-x-4 ">
        <div className="">
          {" "}
          <input
            className="outline-none text-center w-[100%] h-[3rem]  p-3 rounded "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
        </div>
        <div className="">
          <button
            className="btn-primary "
            type="submit"
            onClick={handleRegister}
          >
         <Link to='/pages/subscription'>
         Get Started</Link>  
          </button>
        </div>
      </form>
    </div>
  );
}
