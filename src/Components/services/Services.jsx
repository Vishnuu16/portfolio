import React from 'react'
import theme from "../../assets/theme_pattern.svg"
import arrow from "../../assets/arrow_icon.svg"
import Services_Data from '../../assets/services_data'
const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[60px] mx-10 my-10'>
        <div className='relative '>
            <h1 className='py-[30px] px-0 font-semibold text-[60px]'>My Services</h1>
            <img className="absolute bottom-5 right-0 -z-10" src={theme} alt="" />
        </div>
        <div className='grid grid-cols-3 gap-10 mb-20'>
            {Services_Data.map((service,i)=>(
                <div key={i} className='flex flex-col justify-center gap-5 p-10 rounded-lg border-2 hover:border-[#ff00ff]  hover:bg-gradient-to-r hover:from-[#3f0028] hover:to-[#582300] transition-transform duration-300 cursor-pointer hover:scale-105 '>
                            <h3 className='font-semibold text-lg '>{service.s_no}</h3>
                            <h2 className='font-bold text-2xl   bg-gradient-to-r from-[#DA7C25] to-[#B923E1] bg-clip-text text-transparent transition-transform duration-200'>{service.s_name}</h2>
                            <p className='text-lg text-[#d4d4d4]  leading-[40px] max-w-[300px]'>{service.s_desc}</p>
                            <div className='flex gap-5 items-center  mt-5'>
                                <p className='text-2xl '>Read More</p>
                                <img src={arrow} alt="" />
                            </div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Services