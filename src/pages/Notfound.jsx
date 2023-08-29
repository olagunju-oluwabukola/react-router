import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
const Notfound = () => {
  return (
    <div>
        <h2>Page not found</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, maiores similique eaque nisi obcaecati incidunt?</p>
        <Link to='/' element={<Home/>}>Go back to homepage.</Link>
    </div>
  )
}

export default Notfound