import React from "react";
import themeimg from "../../assets/theme_pattern.svg";
import photo from "../../assets/developericonn.jpg";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const About = () => {
  const skills = [
    { skill: "HTML & CSS", level: 80 },
    { skill: "JavaScript", level: 55 },
    { skill: "React Js", level: 70 },
    { skill: "Node Js", level: 60 },
    { skill: "Express Js", level: 60 },
    { skill: "Mongo DB", level: 56 },
  ];

  const content = [
    { value: "1+", label: "YEARS OF EXPERIENCE" },
    { value: "6+", label: "PROJECTS COMPLETED" },
    { value: "1+", label: "HAPPY CLIENTS" },
  ];

  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-16 py-16 mx-4 sm:mx-12 lg:mx-20"
    >
      {/* Header Section */}
      <div className="relative text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold text-white">
          About Me
        </h1>
        <img
          className="absolute bottom-0 right-4 -z-10"
          src={themeimg}
          alt="Theme"
          width="120px"
        />
      </div>

      {/* Profile and Bio Section */}
      <div className="flex flex-col sm:flex-row gap-12 sm:gap-[80px] w-full">
        {/* Profile Picture */}
        <div className="flex justify-center sm:justify-start w-full sm:w-auto">
          <img
            src={photo}
            alt="Profile"
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px] h-auto aspect-square rounded-xl object-cover shadow-2xl transition-all duration-300 transform hover:scale-105"
          />
        </div>

        {/* About Me Text */}
        <div className="flex flex-col gap-8 sm:gap-[80px] w-full">
          <div className="text-lg sm:text-xl text-gray-300">
            <p className="font-semibold text-lg sm:text-xl mb-4">
              I am a Passionate Full-Stack Developer with expertise in building
              scalable web applications using the MERN Stack.
            </p>
            <p>
              I enjoy transforming ideas into interactive, user-friendly web
              experiences with clean and efficient code.
            </p>
          </div>

          {/* Skills Section with Circular Progress Bars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-[40px]">
  {skills.map((skill, i) => (
    <div
      key={i}
      className="flex flex-col items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
    >
      <div className="text-white font-semibold mb-4">{skill.skill}</div>
      <div className="w-24 h-24">
        <CircularProgressbar
          value={skill.level}
          styles={buildStyles({
            pathColor: "#3B82F6",
            textColor: "#fff", // text color kept in case you use it again later
            trailColor: "#93C5FD",
            strokeWidth: 10,
          })}
        />
      </div>
    </div>
  ))}
</div>


        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
        {content.map((item, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:scale-105"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-center text-transparent bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text">
              {item.value}
            </h1>
            <p className="text-lg font-medium text-center text-gray-300 mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
