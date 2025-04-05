import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { logo_url } from '../utils/Image_url'
import Search from './Search'
import { useSelector } from "react-redux";
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const onlineStatus=useOnlineStatus();
  const [darkMode, setDarkMode]=useState(
    localStorage.getItem("theme")==="dark"
  );

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    else{
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode])
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className='flex flex-wrap justify-between shadow-lg p-2 dark:bg-gray-900 dark:text-white'>
      <img src={logo_url} className='w-8 h-8 rounded-full'/>
      <Search/>
      <div className='flex px-8'>
        <nav>
          <p>Online Status: {onlineStatus ? "True" : "False"}</p>
          <Link to="/" className='px-4'>Home</Link> 
          <Link to="/login" className='px-4'>Login</Link>
          <Link to="/signup" className='px-4'>Signup</Link>
          <Link to="/cart" className='px-4'>🛒 Cart <span >({totalQuantity})</span></Link>
          <button className='p-2 border rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white'
          onClick={()=>setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </div>
      
    </div>
  )
}

export default Header
