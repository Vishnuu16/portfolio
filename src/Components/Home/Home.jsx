import React from "react";
import photo from "../../assets/IMG_20250127_201754.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";




const Home = () => {
  return (
    <div id="home" className="flex items-center flex-col gap-6 px-4 sm:px-10">
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

        <div className="border-2 border-white text-white rounded-full px-6 py-3 cursor-pointer hover:border-[#60A5FA] transition duration-200 hover:text-[#60A5FA]">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Home;
