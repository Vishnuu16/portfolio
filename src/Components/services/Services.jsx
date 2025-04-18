import React from 'react';
import theme from "../../assets/theme_pattern.svg";
import arrow from "../../assets/arrow_icon.svg";
import Services_Data from '../../assets/services_data';

const Services = () => {
  return (
    <div id="services" className="flex flex-col items-center justify-center gap-[60px] mx-4 my-10 mb-30">
      {/* Title */}
      <div className="relative">
        <h1 className="py-[30px] px-0 font-semibold text-[40px] sm:text-[50px]">My Services</h1>
        <img className="absolute bottom-8 right-0 -z-10" src={theme} alt="" width="100px" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
        {Services_Data.map((service, i) => (
          <div
            key={i}
            className="flex flex-col justify-center gap-5 p-8 rounded-2xl border border-[#1E40AF] hover:border-blue-400 bg-[#0F172A] hover:bg-gradient-to-br hover:from-[#1D4ED8] hover:to-[#60A5FA] transition-all duration-300 text-white cursor-pointer hover:scale-105 shadow-md hover:shadow-blue-400/30"
          >
            <h3 className="font-semibold text-lg text-blue-200">{service.s_no}</h3>
            <h2 className="font-bold text-2xl bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent transition-transform duration-200">
              {service.s_name}
            </h2>
            <p className="text-base text-gray-300 leading-relaxed max-w-[300px]">
              {service.s_desc}
            </p>
            <div className="flex gap-3 items-center mt-3 hover:translate-x-1 transition-transform duration-200">
              <p className="text-lg font-medium text-blue-300">Read More</p>
              <img src={arrow} alt="arrow" className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
