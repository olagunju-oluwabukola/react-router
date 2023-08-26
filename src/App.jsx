import { useState } from 'react'
import {
   createBrowserRouter, 
   Route, 
  createRoutesFromElements, 
  RouterProvider } 
  from 'react-router-dom'

  import Home from'./pages/Home' 
import About from'./pages/About'


import Rootlayout from './Layouts/Rootlayout'

function App() {
  const router = 
createBrowserRouter(createRoutesFromElements(
  <Route element={ <Rootlayout/> }>
    <Route index  element={<Home/>}/>
    <Route path='about' element={<About/> }/>
  </Route>
))
  return (
    <div className='bg-blue-900'>
     <RouterProvider router={router} />
    </div>

        

  )
}

export default App
