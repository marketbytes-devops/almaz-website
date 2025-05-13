import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cert1 from "../../../../assets/about/certification1.webp";
import cert2 from "../../../../assets/about/certification2.webp";
import cert3 from "../../../../assets/about/certification3.webp";
import cert4 from "../../../../assets/about/certification4.webp";
import cert5 from "../../../../assets/about/certification5.webp";
import cert6 from "../../../../assets/about/certification6.webp";
import cert7 from "../../../../assets/about/certification7.webp";
import cert8 from "../../../../assets/about/certification8.webp";
import cert9 from "../../../../assets/about/certification9.webp";
import TitleDescription from "../../../../components/TitleDescription";

const Certifications = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  // Handle mouse wheel scrolling
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        slider.slickNext();
      } else {
        slider.slickPrev();
      }
    };

    const sliderElement = slider.innerSlider.list;
    sliderElement.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      sliderElement.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Handle responsive slidesToShow
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(5);
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: true,
    dotsClass: "slick-dots flex justify-center items-center p-0 m-0 list-none",
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center items-center space-x-2">
          {dots.slice(0, 5)}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full bg-gray-300 cursor-pointer transition-all duration-300 sm:w-3 sm:h-3 ${
          i === currentSlide % 5 ? "bg-yellow-400 w-3 h-3 sm:w-3 sm:h-3" : ""
        }`}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "5px",
        },
      },
    ],
  };

  const certifications = [
    { src: cert1, alt: "Certification 1" },
    { src: cert2, alt: "Certification 2" },
    { src: cert3, alt: "Certification 3" },
    { src: cert4, alt: "Certification 4" },
    { src: cert5, alt: "Certification 5" },
    { src: cert6, alt: "Certification 6" },
    { src: cert7, alt: "Certification 7" },
    { src: cert8, alt: "Certification 8" },
    { src: cert9, alt: "Certification 9" },
  ];

  const getCenteredSlideIndex = () => {
    const centerIndex = Math.floor(slidesToShow / 2);
    return (currentSlide + centerIndex) % certifications.length;
  };

  return (
    <div className="w-ful pb-8">
      <div className="mb-8 text-left">
        <TitleDescription title="Members & Certifications" />
      </div>
      <Slider
        ref={sliderRef}
        {...settings}
        className="mx-0"
      >
        {certifications.map((cert, index) => {
          const isCentered = index === getCenteredSlideIndex();
          const isAdjacentToCenter = Math.abs(index - getCenteredSlideIndex()) === 1;
          return (
            <div
              key={index}
              className={`px-1 flex justify-center mb-10 ${
                isCentered ? "mx-2" : isAdjacentToCenter ? "mx-1" : "mx-0.5"
              }`}
            >
              <div className="transition-all duration-200 ease-in-out flex justify-center">
                <div
                  className={`flex items-center justify-center align-middle bg-[#F3F7F8] shadow-[4px_4px_10px_rgba(0,0,0,0.3)] transition-transform duration-200 h-[120px] ${
                    isCentered
                      ? "flex items-center justify-center transform scale-150 m-8 z-10 w-full h-[120px]"
                      : "flex items-center justify-center transform scale-100 opacity-90 w-full h-[120px]"
                  }`}
                >
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className={`object-contain flex items-center justify-center transition-transform duration-200 p-4 ${
                      isCentered
                        ? "w-full h-full p-8 aspect-auto"
                        : "w-full h-full aspect-auto"
                    }`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Certifications;