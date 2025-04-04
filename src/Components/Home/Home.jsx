import React from 'react'
import profile from '../../assets/profile_img.svg'
const Home = () => {
  return (
    <div className='flex items-center flex-col gap-6 '>
        <img className='mt-[100px] ' src={profile} alt="" />
        <h1 className='w-[70%] text-center font-bold text-5xl '><span className='bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent'>I'm Vishnu Varthan,</span> <br />Full Stack Web Developer</h1>
        <p className='text-center w-[50%] text-2xl leading-[40px]'>I am a MERN Stack Web Developer , with 1 year of experience in building the website</p>
        <div className='flex items-center gap-[35px] text-[24px] font-medium mb-4'>
            <div className='flex my-1 px-7 py-3 rounded-[50px] cursor-pointer bg-gradient-to-r from-[#DA7C25] to-[#B923E1] transition-transform duration-200 hover:border-2 hover:border-white'>Contact With Me</div> 
            <div className='border-2  border-white rounded-full px-5 py-3 cursor-pointer hover:border-[#B923E1]'>My Resume</div>
        </div>
    </div>
  )
} 

export default Home