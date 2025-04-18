import React, { useState } from "react";
import line from "../../assets/nav_underline.svg";
import logo from "../../assets/logo.svg";
import menuopen from "../../assets/menu_open.svg";
import menuclose from "../../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navdata = [
    { namee: "Home", button: "home", id: "#home" },
    { namee: "About Me", button: "about me", id: "#about" },
    { namee: "Services", button: "services", id: "#services" },
    { namee: "Portfolio", button: "portfolio", id: "#mywork" },
    { namee: "Contact Us", button: "contact us", id: "#contact" },
  ];

  return (
    <div className="flex items-center justify-between py-5 px-6 sm:px-10 lg:px-[170px] shadow-md">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-[140px] sm:w-[180px] transition-transform duration-300 hover:scale-105" />

      {/* Hamburger Icon for Mobile */}
      <img
        src={menuopen}
        alt="Open Menu"
        className="block md:hidden w-8 h-8 cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => setIsMobileOpen(true)}
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-10 font-semibold text-white">
        {navdata.map((data) => (
          <li key={data.id} className="flex flex-col items-center">
            <AnchorLink
              href={data.id}
              offset={50}
              onClick={() => setMenu(data.button)}
              className={`transition-all duration-300 text-lg lg:text-xl hover:text-indigo-400 ${
                menu === data.button ? "text-indigo-400 font-bold" : "text-white"
              }`}
            >
              {data.namee}
            </AnchorLink>
            {menu === data.button && (
              <img src={line} alt="underline" className="mt-2 w-10 opacity-80" />
            )}
          </li>
        ))}
      </ul>

      {/* Desktop CTA Button */}
      <div className="hidden md:flex py-2 px-6 rounded-full cursor-pointer text-white text-sm lg:text-base font-semibold transition-transform duration-300 hover:scale-110 border border-indigo-600">
        <AnchorLink href="#contact" offset={50}>
          Contact with Me
        </AnchorLink>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-70 flex items-center justify-center md:hidden">
          <div className="bg-white w-full h-full flex flex-col items-center pt-20 relative px-8">
            <img
              src={menuclose}
              alt="Close Menu"
              className="absolute top-6 right-6 w-8 h-8 cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMobileOpen(false)}
            />
            <ul className="flex flex-col gap-6 text-xl font-semibold w-full text-center">
              {navdata.map((data) => (
                <li
                  key={data.id}
                  onClick={() => {
                    setMenu(data.button);
                    setIsMobileOpen(false);
                  }}
                >
                  <AnchorLink
                    href={data.id}
                    offset={50}
                    className={`${
                      menu === data.button ? "text-indigo-600 font-bold" : "text-black"
                    } hover:text-indigo-400 transition-colors duration-300`}
                  >
                    {data.namee}
                  </AnchorLink>
                </li>
              ))}
            </ul>
            <div className="mt-10 py-3 px-7 rounded-full text-white font-semibold cursor-pointer transition-transform duration-300 hover:scale-110 border border-indigo-600">
              <AnchorLink href="#contact" offset={50}>
                Contact with Me
              </AnchorLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
