// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

// export default function Signup() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const onsubmit = async (e) => {
//     e.preventDefault();
//     await createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // sign in
//         const user = userCredential.user;
//         console.log(user);
//         // navigate("/login");
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//         // ..
//       });
//   };
//   return (
//     <div className="flex flex-col h-screen items-center justify-center " >
//       <form className="space-y-[1rem] ">
//         <div>
//         <input
//         className="h-[3rem] border text-center "
//           type="email"
//           label="Email address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           placeholder="Email address"
//         />
//         </div>
//         <div>
//         <input
//         className="h-[3rem] border text-center "
//           type="password"
//           label="Create password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           placeholder="Password"
//         />
//         </div>
//         <div>
//         <button className="text-center w-[100%] bg-rose-900 h-[3rem] " type="submit" onClick={onsubmit}>
//           submit
//         </button>
//         </div>
        
        
        
//       </form>
//       <p className="mt-[1rem]">
//         Already have an account? <NavLink to="/login">Sign in</NavLink>
//       </p>
//     </div>
//   );
// }
