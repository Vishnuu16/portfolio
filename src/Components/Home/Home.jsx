import React from "react";
import photo from "../../assets/IMG_20250127_201754.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resumePDF from "../../assets/VishnuVarthan MERN Stack Dev.pdf";
import { FaGithub, FaLinkedin, FaBehance, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  // Social media links
  const socialLinks = [
    { icon: <FaGithub size={20} />, url: "https://github.com/Vishnuu16" },
    { icon: <FaLinkedin size={20} />, url: "https://linkedin.com/in/vishnu-varthan-163188266" },
    { icon: <FaInstagram size={20} />, url: "https://instagram.com/vishnu._.16" },
    { icon: <FaBehance size={20} />, url: "https://www.behance.net/vishnuvkpudu" },
    
  ];

  return (
    <div id="home" className="flex items-center flex-col gap-6 px-4 sm:px-10 relative">
      {/* Social Media Icons (Right Side) */}
      <div className="hidden md:flex flex-col gap-5 fixed right-6 top-1/2 transform -translate-y-1/2 z-10">
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#60A5FA] transition-colors duration-300 bg-gray-800 bg-opacity-60 p-2 rounded-full hover:bg-opacity-100"
            aria-label={`Social media link ${index}`}
          >
            {social.icon}
          </a>
        ))}
        <div className="h-20 w-0.5 bg-[#60A5FA] mx-auto mt-2"></div>
      </div>

      <img
        className="mt-[100px] w-[200px] h-[200px] object-cover rounded-full border-4 border-white shadow-xl mx-auto"
        src={photo}
        alt="Profile"
      />

      <h1 className="w-full sm:w-[70%] text-center font-bold text-3xl sm:text-5xl leading-tight sm:leading-normal">
        <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
          I'm Vishnu Varthan,
        </span>{" "}
        <br />
        Full Stack Web Developer
      </h1>

      <p className="text-center w-full sm:w-[50%] text-lg sm:text-2xl leading-[30px] sm:leading-[40px] text-[#D8D8D8]">
        I am a MERN Stack Developer, with 1 Year of Experience in Building Websites.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-[35px] text-[18px] sm:text-[20px] font-medium mb-4">
        <div className="flex my-1 px-7 py-3 rounded-[50px] cursor-pointer bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white transition-transform duration-200 hover:scale-105 border-2 border-transparent hover:border-white">
          <AnchorLink href="#contact" offset={50}>
            Contact With Me
          </AnchorLink>
        </div>

        <a
          href={resumePDF}
          download="Vishnu_Varthan_Resume.pdf"
          className="border-2 border-white text-white rounded-full px-6 py-3 cursor-pointer hover:border-[#60A5FA] transition duration-200 hover:text-[#60A5FA] hover:scale-105"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Home;