import React, { useState, useEffect } from "react";

const Services = () => {
  const slides = [
    {
      id: 1,
      name: "Mobile Development",
      description:
        "Building high-performance mobile applications for Android and iOS platforms with seamless user experience.",
      url: "/images/Mobile_app_perspective_matte.png",
    },
    {
      id: 2,
      name: "Web Development",
      description:
        "Creating responsive and scalable web applications tailored to your business needs using modern frameworks.",
      url: "/images/Code_perspective_matte.png",
    },
    {
      id: 3,
      name: "Software Testing",
      description:
        "Comprehensive testing services to ensure quality, performance, and reliability of your software.",
      url: "/images/Dashboard_perspective_matte.png",
    },
    {
      id: 4,
      name: "Cloud Solutions",
      description:
        "Providing scalable and secure cloud infrastructure to manage your data and applications efficiently.",
      url: "/images/Code_perspective_matte.png",
    },
    {
      id: 5,
      name: "UI/UX Design",
      description:
        "Designing intuitive and user-friendly interfaces to create exceptional digital experiences.",
      url: "/images/Code_perspective_matte.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  const getSlideIndex = (index) => {
    if (index < 0) return totalSlides - 1;
    if (index >= totalSlides) return 0;
    return index;
  };

  const getVisibleSlides = () => {
    const prevIndex = getSlideIndex(currentIndex - 1);
    const nextIndex = getSlideIndex(currentIndex + 1);
    return [
      slides[prevIndex],
      slides[currentIndex],
      slides[nextIndex],
    ];
  };

  const goToSlide = (index) => {
    setCurrentIndex(getSlideIndex(index));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full mx-auto py-8 bg-[#F9F9FF]">
      <h2 className="text-center text-[35px] font-bold mb-6 font-inter">Services We Offer</h2>

      {/* Carousel */}
      <div className="relative overflow-hidden flex justify-center">
        <div className="flex transition-transform duration-500 gap-6">
          {getVisibleSlides().map((slide, index) => (
            <div
            key={index}
            className={`flex-shrink-0 w-[380px] h-[300px] mx-auto rounded-lg flex flex-col items-start gap-[10px] text-center shadow-xl bg-white font-inter ${
              index === 1 ? "mt-[80px] shadow-2xl shadow-purple-300" : ""
            } transition-all`}
            style={
              index === 1
                ? { padding: "1px", background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)" }
                : {}
            }
          >
            <div className="w-full h-full bg-white rounded-lg flex flex-col items-start p-6 gap-[10px]">
              <div className="w-[58px] h-[58px] rounded-full p-[1px]  flex justify-center items-center" style={{
    background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
  }}>
  <div className="w-full h-full bg-white rounded-full flex justify-center items-center">
    <img src={slide.url} alt="Example" className="w-[34px] h-[34px]" />
  </div>
</div>
              <h3 className="text-lg font-semibold mb-2 text-start bg-gradient-to-b from-[#F76680] to-[#57007B] bg-clip-text text-transparent">{slide.name}</h3>
              <p className="text-gray-600 text-start">{slide.description}</p>
            </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots and Progress Bar */}
      <div className="relative mt-6 flex items-center justify-center">
        {/* Pagination Dots */}
        <div className="absolute -bottom-8 flex gap-4 transform -translate-x-1/2 left-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-gradient-to-b from-[#F76680] to-[#57007B] w-[15px] h-[15px] scale-125"
                  : "bg-white border-[1px]"
              }`}
            ></button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute -bottom-8 flex gap-2 right-[120px] items-center">
          <span className="text-gray-600 font-medium text-sm">0{currentIndex + 1}</span>
          <div className="relative w-48 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-2 bg-gradient-to-b from-[#F76680] to-[#57007B] transition-all duration-500"
              style={{
                width: `${((currentIndex + 1) / slides.length) * 100}%`,
              }}
            ></div>
          </div>
          <span className="text-gray-600 font-medium text-sm">0{slides.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
