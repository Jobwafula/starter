import { useState } from 'react'


import Home from './pages/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from './pages/Signup'
import SignIn from './pages/SignIn'

function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path='/signup'  element={<Signup />}/>
        <Route  path='/login' element={<SignIn />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
     </Router>
     <Home />
       
    </>
  )
}

export default App
