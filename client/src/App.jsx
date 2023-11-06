

import Home from './pages/Home'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import SearchCategory from './pages/SearchCategory'

function App() {
  const router = createBrowserRouter([{
    path:'/',
    element:<Home />
  },
{
  path:'/category',
  element:<SearchCategory />
}])
 

  return (
    <>
     <RouterProvider router={router} />
       
    </>
  )
}

export default App
