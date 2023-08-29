import { useState } from 'react'
import {
   createBrowserRouter, 
   Route, 
  createRoutesFromElements, 
  RouterProvider } 
  from 'react-router-dom'

  import Home from'./pages/Home' 
import About from'./pages/About'
import Help from'./pages/Help'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'


import Rootlayout from './Layouts/Rootlayout'
import Helplayout from './Layouts/Helplayout'

function App() {
  const router = 
createBrowserRouter(createRoutesFromElements(
  <Route element={ <Rootlayout/> }>
    <Route index  element={<Home/>}/>
    <Route path='about' element={<About/> }/>
    <Route path='Help' element={<Helplayout/>}>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='Help' element={<Help/>}/>
    </Route>
    <Route path='*' element={<Notfound/>}/>
  </Route>
))
  return (
    <div className='bg-blue-900'>
     <RouterProvider router={router} />
    </div>

        

  )
}

export default App
