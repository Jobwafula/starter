

import Home from './pages/Home'
import { Routes, Route} from "react-router-dom";
import SearchCategory from './pages/SearchCategory'
import Action from './components/categories/Action'
import All from './components/categories/All';

function App() {
  

  return (
    <>
    <Routes>
    
    <Route path='/' element={<Home />}/>
    <Route path='category'  element={<SearchCategory />}/>
    <Route  path='category/action' element={<Action />}/>
    <Route  path='category/all' element={<All />}/>

    </Routes>
     
       
    </>
  )
}

export default App
