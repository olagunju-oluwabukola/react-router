import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div >
<header>
    <nav className='flex m-7'>
        <h1 className='text-4xl text-red-600'>Router</h1>
        <div className='flex pl-[20em] gap-5  '>
        <NavLink to='/' className=' bg-red-700 w-20 text-center text-white pt-2'>Home</NavLink> <br />
         
         <NavLink to='about'className='bg-red-700 w-20 text-center text-white pt-2'>About</NavLink>
        </div>
       
    </nav>
</header>

<main>
<Outlet/>
</main>

    </div>
  )
}

export default Rootlayout