import React from 'react'


import logo from "../../assets/logo.svg"
const Navbar = () => {

 const navdata = ["Home", "About Me", "Services", "Portfolio", "Contact Us"]
  return (
    <div className=' flex item-center justify-between my-1 mx-20'>
    <img src={logo} alt="" />
    <ul className='flex  justify-between my-auto px-3'>
      {navdata.map((data)=>(
        <li className='flex mx-5 font-outfit item-center text-lg'>{data}</li>
      ))}  
      
    </ul> 
    <div className="flex my-1 px-7 py-3 rounded-[50px] cursor-pointer bg-gradient-to-r from-[#DA7C25] to-[#B923E1] transition-transform duration-200 hover:scale-105">Contact with Me</div>
    
    </div>
  )
}

export default Navbar 