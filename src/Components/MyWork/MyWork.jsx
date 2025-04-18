import React, { useState, useEffect } from "react";
import themeimg from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow from "../../assets/arrow_icon.svg";

const MyWork = () => {
  const [current, setCurrent] = useState(0);
  const visibleCards = 1;

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? mywork_data.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === mywork_data.length - 1 ? 0 : prev + 1
    );
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [current]);

  return (
    <div
      id="mywork"
      className="flex flex-col gap-16 py-20 px-4 sm:px-[170px] overflow-hidden"
    >
      {/* Heading */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="relative">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            My <span className="text-white">Projects</span>
          </h1>
          <img
            className="absolute -bottom-4 -right-6 -z-10 opacity-40"
            src={themeimg}
            alt="decoration"
            width="120px"
          />
        </div>
        <button className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 rounded-full font-medium text-white hover:gap-4 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
          View All
          <img src={arrow} alt="arrow icon" className="w-4 h-4" />
        </button>
      </div>

      {/* Custom Carousel */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition"
        >
          ◀
        </button>

        {/* Slide */}
        <div className="w-full overflow-hidden px-6">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / visibleCards)}%)`,
            }}
          >
            {mywork_data.map((work, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full sm:w-[600px] max-w-full px-4"
              >
                <div className="rounded-xl overflow-hidden group relative shadow-lg">
                  <img
                    className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                    src={work.w_img}
                    alt={work.w_name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white">
                        {work.w_name}
                      </h3>
                      <p className="text-blue-300 text-sm mt-1">
                        {work.w_category}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {work.skills?.map((skill, j) => (
                          <span
                            key={j}
                            className="text-xs bg-blue-900/50 text-blue-200 px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={work.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer duration-300"
                      >
                        {work.buttontext}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default MyWork;
