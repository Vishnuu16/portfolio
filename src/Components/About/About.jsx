import React from "react";
import themeimg from "../../assets/theme_pattern.svg";
import profile from "../../assets/about_profile.svg";
const About = () => {
  const skills = [
    { skill: "HTML& CSS", width: "w-[80%]" },
    { skill: "JavaScript", width: "w-[55%]" },
    { skill: "React Js", width: "w-[75%]" },
    { skill: "Node Js", width: "w-[65%]" },
    { skill: "Express Js", width: "w-[65%]" },
    { skill: "Mongo DB", width: "w-[60%]" },
  ];
  const content = [
    { value: "1+", label: "YEAR OF EXPERIENCE" },
    { value: "6+", label: "PROJECTS COMPLETED" },
    { value: "1+", label: "Year Of Experience" },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-[80px] mx-[80px] my-[170px]">
      <div className="relative">
        <h1 className="py-[30px] px-0 font-semibold text-[60px] ">About Me</h1>
        <img
          className="absolute bottom-5  left-16 -z-1 "
          src={themeimg}
          alt=""
        />
      </div>
      <div className="flex gap-[80px]">
        <div>
          {/* left */}
          <img src={profile} alt="" />
        </div>
        <div className="flex flex-col gap-[80px]">
          {/* right */}
          <div className="flex flex-col text-lg gap-5 font-semibold">
            <p>
              I am a Passionate Full-Stack Developer with expertise in building
              scalable web applications using the Mern Stack.
            </p>
            <p>
              I enjoy transforming ideas into interactive, user-friendly web
              experience with clean and efficient code.
            </p>
          </div>
          <div className=" flex flex-col gap-[20px] w-[75%] ">
            {/* skill */}
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex gap-[20px] items-center transition-transform duration-300 hover:scale-105 "
              >
                <p className="text-lg font-medium min-w-[150px]">
                  {skill.skill}
                </p>
                <hr
                  className={`${skill.width} outline-none border-none h-1.5 rounded-full bg-gradient-to-r from-[#DF8908] to-[#B415FF]`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-[100%] justify-around ms-20 mb-[80px]">
        {/* Achievement */}
        {content.map((item, i) => (
          <>
            <div
              key={i}
              className="flex flex-col items-center gap-3 transition duration-500 hover:scale-125"
            >
              <h1 className="text-[50px] font-bold bg-gradient-to-r from-[#B415FF]  to-[#DF8908] bg-clip-text text-transparent">
                {item.value}
              </h1>
              <p className="text-lg font-medium mt-0">{item.label}</p>
            </div>
            <hr className =""/>
          </>
        ))}
      </div>
    </div>
  );
};

export default About;
