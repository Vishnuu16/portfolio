import React, { useState, useEffect } from "react";
import themeimg from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow from "../../assets/arrow_icon.svg";

const MyWork = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projectsPerSlide = 2;
  const totalSlides = Math.ceil(mywork_data.length / projectsPerSlide);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div id="mywork" className="flex flex-col gap-16 py-20 px-4 sm:px-[170px]">
      {/* Heading */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="relative">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            My <span className="text-white">Projects</span>
          </h1>
          <img
            className="absolute -bottom-4 -right-6 -z-10 opacity-40"
            src={themeimg}
            alt="pattern background"
            width="120px"
          />
        </div>
        <button
          onClick={() => window.location.href = "/projects"}
          className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 rounded-full font-medium text-white hover:gap-4 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
        >
          View All
          <img src={arrow} alt="arrow icon" className="w-4 h-4" />
        </button>
      </div>

      {/* Carousel */}
      <div className="relative w-full">
        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition"
        >
          ◀
        </button>

        {/* Slide container */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const startIndex = slideIndex * projectsPerSlide;
              const endIndex = startIndex + projectsPerSlide;
              const slideProjects = mywork_data.slice(startIndex, endIndex);

              return (
                <div 
                  key={slideIndex}
                  className="flex-shrink-0 w-full px-4"
                >
                  <div className="flex gap-6">
                    {slideProjects.map((work, i) => (
                      <div key={i} className="flex-1 min-w-0">
                        <div className="rounded-xl overflow-hidden group relative shadow-lg h-full">
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
                                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
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
              );
            })}
          </div>
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition"
        >
          ▶
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentSlide ? "bg-blue-500 scale-110" : "bg-gray-500"
            }`}
            onClick={() => goToSlide(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MyWork;