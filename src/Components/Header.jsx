import React from 'react';
import Logo from './Images/logo.png'

const Header = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
     
          
       <div className ="hidden md:flex w-full h-full  p-4">
      <div className='flex items-center gap-2'>
        
      <img src={Logo} className= "w-8 object-cover" alt="logo"/>
        </div>
        <p className="text-heading to-blue-600 text-x1 font-bold"> City </p>
         
          
      <ul className="">
        <li>Home</li>
        <li>Menu</li>
        <li>About Us</li>
        <li>Services</li>
          </ul>
         </div>
       <div className="flex md:hidden w-full h-full p-4"> </div>          
   </header>                                                                                                                                                                             
  );
};
export default Header;