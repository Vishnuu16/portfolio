import React from 'react';
import logo from "../../assets/logo.svg";
import usericon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div id="footer" className="my-12 sm:my-16 mx-4 sm:mx-[170px] flex flex-col gap-10 text-white">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-10">
        {/* Left Side */}
        <div className="flex flex-col max-w-xl">
          <img src={logo} alt="Logo" className="w-[120px] sm:w-[180px]" />
          <p className="text-lg sm:text-xl text-[#B0B9D1] mt-4 leading-relaxed">
            I'm a passionate Full-Stack Developer experienced in building scalable web applications using the MERN stack.
          </p>
        </div>

        {/* Right Side - Subscribe */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <div className="flex items-center gap-4 px-4 py-3 bg-[#1E293B] rounded-full w-full sm:w-auto hover:ring-2 hover:ring-blue-500 transition-all duration-300">
            <img src={usericon} alt="User Icon" className="w-6 h-6" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none border-none text-[#94A3B8] placeholder:text-[#94A3B8] w-full sm:w-[200px]"
            />
          </div>
          <div className="py-3 px-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white cursor-pointer hover:scale-105 transition-transform duration-300 font-semibold">
            Subscribe
          </div>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-sm sm:text-base text-[#A1A1AA]">
        <p>© 2025, All Rights Reserved</p>
        <div className="flex gap-6">
          <p className="hover:text-blue-400 cursor-pointer transition-colors duration-200">Terms of Service</p>
          <p className="hover:text-blue-400 cursor-pointer transition-colors duration-200">Privacy Policy</p>
          <p className="hover:text-blue-400 cursor-pointer transition-colors duration-200">Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
