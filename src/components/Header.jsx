import React from 'react'
import { Link } from 'react-router-dom'
import { logo_url } from '../utils/Image_url'
import Search from './Search'
import { useSelector } from "react-redux";


const Header = () => {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className='flex flex-wrap justify-between shadow-lg p-2'>
      <img src={logo_url} className='w-8 h-8 rounded-full'/>
      <Search/>
      <div className='flex px-8'>
        <nav>
          <Link to="/" className='px-4'>Home</Link> 
          <Link to="/login" className='px-4'>Login</Link>
          <Link to="/signup" className='px-4'>Signup</Link>
          <Link to="/cart" className='px-4'>🛒 Cart <span >({totalQuantity})</span></Link>
        </nav>
      </div>
      
    </div>
  )
}

export default Header
