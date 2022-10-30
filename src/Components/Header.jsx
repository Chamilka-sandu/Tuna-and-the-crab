import React from 'react';
import Logo from './Images/logo.png'
import {MdShoppingBasket} from "react-icons/md"

const Header = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
     
          
       <div className ="hidden md:flex w-full h-full  p-4">
      <div div className='flex items-center gap-2'>
        
      <img src={Logo} className= "w-8 object-cover" alt="logo"/>
        
        <p className="text-heading to-blue-600 text-x1 font-bold"> City </p>
         </div>
          
      <ul className="flex items-center gap-8 ml-auto">
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
        <li className='text-base  text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Services</li>
        </ul>
        <div className='relative flex items-center justify-center'></div>
         
      <div className="flex md:hidden w-full h-full p-4">
        <MdShoppingBasket className='text-textColor text-2xl ml-8' />
        
        <div className='w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>

          <p className='text-x5' text-white font-semibold >2</p>
        </div>
        </div>
      </div>          
   </header>                                                                                                                                                                             
  );
};
export default Header;