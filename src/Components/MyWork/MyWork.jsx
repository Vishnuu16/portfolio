import React from 'react'
import themeimg from "../../assets/theme_pattern.svg";
import mywork_data from '../../assets/mywork_data';
import arrow from "../../assets/arrow_icon.svg"
 

const MyWork = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-20 my-[80px] mx-[170px]'>
            <div className='relative'>
                <h1 className='text-4xl py-0 px-10 font-bold'>My Latest Work</h1>
                <img className='absolute bottom-0 right-3 -z-10' src={themeimg} alt="" width="100px" />
            </div>
            <div className='grid grid-cols-3 gap-5 '> 
                {mywork_data.map((work,i)=>(
                   <img className=' w-[419px] h-[280px] box-border transition-all duration-300 cursor-pointer hover:scale-105' key={i} src={work.w_img} alt="" />
                ))}
            </div>
            <div className=' flex gap-5 rounded-full border-2 cursor-pointer  border-white py-2 px-10 font-semibold mb-10 transition-transform duration-500 hover:gap-7 '>
                <p>Show More</p>
                <img src={arrow} alt="" />
            </div>
    </div>
  )
}

export default MyWork