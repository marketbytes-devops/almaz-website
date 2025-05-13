import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from "../../../../assets/about/icon.svg";
import icon2 from "../../../../assets/about/icon2.svg";
import icon3 from "../../../../assets/about/icon3.svg";
import TitleDescription from "../../../../components/TitleDescription";

const WhychooseUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    dotsClass: "slick-dots custom-dots",
    customPaging: (i) => <div className="custom-dot"></div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };

  const slides = [
    {
      icon: icon1,
      title: "Fast World Wide Delivery",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      alt: "Fast Delivery",
    },
    {
      icon: icon2,
      title: "Timely Delivery",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      alt: "Timely Delivery",
    },
    {
      icon: icon3,
      title: "24/7 Service",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      alt: "24/7 Service",
    },
    {
      icon: icon1,
      title: "Fast World Wide Delivery",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      alt: "Fast Delivery",
    },
    {
      icon: icon2,
      title: "Timely Delivery",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      alt: "Timely Delivery",
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="mx-auto w-full ml-4 mt-0 px-5 sm:px-3 lg:px-5 py-8 sm:py-12 md:py-16">
        <TitleDescription
          title="Why Choose Us"
          titleClass="text-[32px] font-poppins font-normal text-black py-2 mb-6"
        />
        <p className="text-left text-[20px] font-poppins font-medium leading-[160%] max-w-full text-gray-800">
          Why have people loved us for more than 14 years?
        </p>
        <p className="text-left text-[16px] font-poppins font-normal leading-[160%] max-w-full mb-10 text-gray-600">
          At Almas Movers International, trust isn't built overnight—it's earned
          move by move. For over a decade, we've been the reliable choice for
          families and businesses relocating across Qatar and around the world.
          Our clients choose us and stay with us because we combine global
          standards with a personal touch.
        </p>
        <Slider {...settings} className="slick-slider">
          {slides.map((slide, index) => (
            <div key={index} className="p-2 sm:p-3 lg:p-4">
              <div
                style={{ backgroundColor: "#F8FAFC" }}
                className="p-6 pl-1 rounded-lg card-container flex items-center"
              >
                <div className="icon-container w-[52px] h-[52px] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <img
                    src={slide.icon}
                    alt={slide.alt}
                    className="w-[32px] h-[32px]"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold sm:text-base text-gray-900">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");
          .font-poppins {
            font-family: "Poppins", sans-serif;
          }
          .icon-container {
            background-color: #ffffff; /* White background for circle */
          }
          .custom-dots {
            bottom: -5px;
            display: flex !important;
            justify-content: center;
            align-items: center;
            margin-top: 1.5rem;
            padding: 0;
            list-style: none;
            width: 100%;
            position: relative;
          }
          .custom-dots li {
            margin: 0 6px;
          }
          .custom-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #d1d5db;
            opacity: 0.6;
            transition: background-color 0.3s, opacity 0.3s;
          }
          .custom-dots .slick-active .custom-dot {
            background-color: #ffc107;
            opacity: 1;
          }
          .slick-slider {
            width: 100%;
            position: relative;
            overflow: visible;
          }
          .slick-slide > div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          }
          .card-container {
            max-width: 100%;
            width: calc(100% - 0.5rem);
            margin: 0 auto;
          }
          @media (max-width: 600px) {
            .card-container {
              width: calc(100% - 1rem);
            }
            .text-[20px] {
              font-size: clamp(1rem, 4vw, 1.125rem);
            }
            .text-[16px] {
              font-size: clamp(0.875rem, 3.5vw, 1rem);
            }
            .p-2 {
              padding: clamp(0.5rem, 2vw, 0.75rem);
            }
            .custom-dots li {
              margin: 0 4px;
            }
            .custom-dot {
              width: 10px;
              height: 10px;
            }
          }
          @media (max-width: 400px) {
            .card-container {
              width: calc(100% - 0.75rem);
            }
            .p-2 {
              padding: clamp(0.25rem, 1.5vw, 0.5rem);
            }
            .custom-dots li {
              margin: 0 3px;
            }
            .custom-dot {
              width: 8px;
              height: 8px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default WhychooseUs;
