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
    dotsClass: "slick-dots custom-dots",
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    appendDots: dots => (
      <div>
        <ul className="custom-dots">
          {/* Only show first 5 dots */}
          {dots.slice(0, 5)}
        </ul>
      </div>
    ),
    customPaging: (i) => {
      return (
        <div className={`custom-dot ${i === currentSlide % 5 ? 'active' : ''}`}></div>
      );
    },
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

  // Determine which slide is centered
  const getCenteredSlideIndex = () => {
    const centerIndex = Math.floor(slidesToShow / 2);
    return (currentSlide + centerIndex) % certifications.length;
  };

  return (
    <div className="slider-container pb-16 pt-1 px-0 sm:px-0">
      <div className="mb-8 text-left px-4 sm:px-6">
        <h2 className="text-3xl font-poppins font-normal">
          Members & Certifications
        </h2>
      </div>
      <Slider ref={sliderRef} {...settings} className="mx-0">
        {certifications.map((cert, index) => {
          const isCentered = index === getCenteredSlideIndex();
          const isAdjacentToCenter =
            Math.abs(index - getCenteredSlideIndex()) === 1;
          return (
            <div
              key={index}
              className={`px-1 flex justify-center ${
                isCentered ? "mx-2" : isAdjacentToCenter ? "mx-1" : "mx-0.5"
              }`}
            >
              <div className="transition-all duration-200 ease-in-out flex justify-center">
                <div
                  className={`w-[218px] h-[109px] flex items-center justify-center transition-transform duration-200 ${
                    isCentered
                      ? "transform scale-120 z-10 w-[240px] h-[150px]"
                      : "transform scale-90 opacity-90"
                  }`}
                  style={{
                    backgroundColor: "#F3F7F8",
                    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
                    zIndex: isCentered ? 10 : 1,
                  }}
                >
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className={`object-contain transition-transform duration-200 ${
                      isCentered ? "w-[100px] h-[100px]" : "w-[83px] h-[83px]"
                    }`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <style jsx>{`
        .custom-dots {
          bottom: -5px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        .custom-dot {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          border-radius: 50%;
          margin: 0 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-dot.active {
          background: #facc15;
          width: 12px;
          height: 12px;
        }
        @media (max-width: 640px) {
          .custom-dot {
            width: 8px;
            height: 8px;
          }
          .custom-dot.active {
            width: 10px;
            height: 10px;
          }
        }
        .slick-slide {
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .slider-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mb-8.text-left {
          text-align: left;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Certifications;