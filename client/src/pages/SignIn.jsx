// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
//import { HiOutlineMail, HiOutlineKey } from 'react-icons/hi';
import emailIcon from '../images/email-icon.svg'; 
import passwordIcon from '../images/password-icon.svg';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
    e.preventDefault()
    setLoading(true)
    axios.post("http://localhost:3000/login", { email, password })
    .then(result => {
        console.log(result)
        
        if(result.data === "Success"){
          setLoading(false)
          
            navigate("/")
            
        }else{
            navigate("/register")
            alert("You are not registered to this service")

        }
   
    })
    .catch(err => console.log(err))
    // console.log('Logging in with:', { email, password });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <form className="bg-green-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 ite">
        <div className="mb-4 flex items-center">
          {/* <img src={emailIcon} alt="Email Icon" className="w-6 h-6 mr-2" /> */}
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div className="mb-4 flex items-center">
          {/* <img src={passwordIcon} alt="Password Icon" className="w-6 h-6 mr-2" /> */}
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 w-[100%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
           {loading?'Signing in ...':'Sign in'} 
          </button>
        </div>
        <Link to="/register">Dont have an account? register here</Link>
      </form>
    </div>
  );
};

export default Login;