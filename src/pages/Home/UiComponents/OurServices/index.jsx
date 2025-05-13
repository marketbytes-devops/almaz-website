import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import InternationalRelocationIcon from "../../../../assets/Icon_InternationalRelocation.webp";
import HouseMovingIcon from "../../../../assets/Icon_HouseMoving.webp";
import VehicleMovingIcon from "../../../../assets/Icon_vechiclemoving.webp";
import OfficeRelocationIcon from "../../../../assets/Icon_OfficeRelocation.webp";
import StorageIcon from "../../../../assets/Icon_StorageandWarehouse.webp";
import InsuranceIcon from "../../../../assets/Icon_Insurance.webp";
import AirfreightIcon from "../../../../assets/Air-freight.webp";
import SeafrieghtIcon from "../../../../assets/Sea-frieght.webp";
import TitleDescription from "../../../../components/TitleDescription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
 
const OurServices = () => {
  const cards = [
    {
      id: 0,
      title: "International relocation",
      text: "If you are looking for relocation services, be sure that the international movers",
      image: InternationalRelocationIcon,
    },
    {
      id: 1,
      title: "House moving",
      text: "Basically, we should understand that domestic relocation is not an easy process.",
      image: HouseMovingIcon,
    },
    {
      id: 2,
      title: "Vehicle relocation",
      text: "Vehicles are everyone's valued assets and we would not want it to be damaged during.",
      image: VehicleMovingIcon,
    },
    {
      id: 3,
      title: "Office relocation",
      text: "Efficient office moving with minimal downtime.",
      image: OfficeRelocationIcon,
    },
    {
      id: 4,
      title: "Storage solutions",
      text: "Secure storage options for your belongings.",
      image: StorageIcon,
    },
    {
      id: 5,
      title: "Insurance coverage",
      text: "Comprehensive insurance for all your moving needs.",
      image: InsuranceIcon,
    },
    {
      id: 6,
      title: "Air freight",
      text: "Fast and reliable air freight services for your cargo.",
      image: AirfreightIcon,
    },
    {
      id: 7,
      title: "Sea freight",
      text: "Cost-effective and secure sea freight solutions.",
      image: SeafrieghtIcon || HouseMovingIcon,
    },
  ];
 
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewAllClicked, setViewAllClicked] = useState(false);
  const gridRef = useRef(null);
  const touchStartX = useRef(null);
 
  const getCardDimensions = () => {
    const width = window.innerWidth;
    if (width < 640) {
      return { cardHeight: 280, horizontalGap: 16, verticalGap: 24, cardsPerRow: 1, visibleRows: 6 };
    } else if (width < 1024) {
      return { cardHeight: 320, horizontalGap: 20, verticalGap: 32, cardsPerRow: 2, visibleRows: 3 };
    } else {
      return { cardHeight: 360, horizontalGap: 24, verticalGap: 40, cardsPerRow: 3, visibleRows: 2 };
    }
  };
 
  const [dimensions, setDimensions] = useState(getCardDimensions());
 
  useEffect(() => {
    const handleResize = () => {
      setDimensions(getCardDimensions());
      setCurrentSlide(0);
    };
 
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  const calculatePositions = () => {
    if (!gridRef.current || dimensions.cardsPerRow === 1) return [];
    const containerWidth = gridRef.current.offsetWidth;
    const { cardHeight, horizontalGap, verticalGap, cardsPerRow } = dimensions;
 
    const cardWidth = (containerWidth - (cardsPerRow - 1) * horizontalGap) / cardsPerRow;
 
    const positions = [];
    const totalCards = 6;
    for (let i = 0; i < totalCards; i++) {
      const row = Math.floor(i / cardsPerRow);
      const col = i % cardsPerRow;
      positions.push({
        x: col * (cardWidth + horizontalGap),
        y: row * (cardHeight + verticalGap),
      });
    }
 
    // Adjust positions for slide 1
    if (currentSlide === 1 && dimensions.cardsPerRow === 3) {
      // Move card 6 (Air freight) to row 1, col 3
      positions[2] = { x: 2 * (cardWidth + horizontalGap), y: 0 };
      // Move card 7 (Sea freight) to row 2, col 3
      positions[5] = { x: 2 * (cardWidth + horizontalGap), y: cardHeight + verticalGap };
    } else if (currentSlide === 1 && dimensions.cardsPerRow === 2) {
      // Move card 6 (Air freight) to row 1, col 2
      positions[1] = { x: cardWidth + horizontalGap, y: 0 };
      // Move card 7 (Sea freight) to row 2, col 2
      positions[3] = { x: cardWidth + horizontalGap, y: cardHeight + verticalGap };
    }
 
    return positions;
  };
 
  const [gridPositions, setGridPositions] = useState(calculatePositions());
 
  useEffect(() => {
    setGridPositions(calculatePositions());
  }, [dimensions, currentSlide]);
 
  const cardVariants = [
    {
      visible: { opacity: 1, scale: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.5 } },
      hidden: { opacity: 0, scale: 0.8, x: -100 },
      exit: { opacity: 0, x: 100, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.5 } },
    },
    {
      visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 15, duration: 0.6 } },
      hidden: { opacity: 0, scale: 0.8, y: -100 },
      exit: { opacity: 0, y: 100, transition: { type: "spring", stiffness: 120, damping: 15, duration: 0.6 } },
    },
    {
      visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 80, damping: 25, duration: 0.5 } },
      hidden: { opacity: 0, scale: 0.8, rotate: 90 },
      exit: { opacity: 0, rotate: -90, transition: { type: "spring", stiffness: 80, damping: 25, duration: 0.5 } },
    },
    {
      visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 10, duration: 0.4, bounce: 0.5 } },
      hidden: { opacity: 0, scale: 0.5, y: 50 },
      exit: { opacity: 0, scale: 0.4, transition: { type: "spring", stiffness: 150, damping: 10, duration: 0.4 } },
    },
  ];
 
  const getImageSize = () => {
    if (dimensions.cardsPerRow === 1) return "w-20 h-20";
    if (dimensions.cardsPerRow === 2) return "w-20 h-20";
    return "w-28 h-28";
  };
 
  const handleViewAll = (e) => {
    e.preventDefault();
    setViewAllClicked(true);
  };
 
  useEffect(() => {
    if (viewAllClicked) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
      }, 3000); // Toggle slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [viewAllClicked]);
 
  useEffect(() => {
    if (dimensions.cardsPerRow === 1 && viewAllClicked) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % cards.slice(0, 6).length);
      }, 3000); // Cycle through mobile slides every 3 seconds
      return () => clearInterval(interval);
    }
  }, [viewAllClicked, dimensions.cardsPerRow]);
 
  const handleNextSlide = () => {
    if (currentSlide < 1) {
      setCurrentSlide(1);
    }
  };
 
  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(0);
    }
  };
 
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
 
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50 && currentSlide < 1) {
      setCurrentSlide(1);
    } else if (diff < -50 && currentSlide > 0) {
      setCurrentSlide(0);
    }
    touchStartX.current = null;
  };
 
  const getVisibleCards = () => {
    if (currentSlide === 0) {
      return cards.slice(0, 6); // Initial 6 cards
    }
    if (dimensions.cardsPerRow === 3) {
      return [
        cards[1], // Row 1, Col 1 (House moving)
        cards[2], // Row 1, Col 2 (Vehicle relocation)
        cards[6], // Row 1, Col 3 (Air freight)
        cards[4], // Row 2, Col 1 (Storage solutions)
        cards[5], // Row 2, Col 2 (Insurance coverage)
        cards[7], // Row 2, Col 3 (Sea freight)
      ];
    } else if (dimensions.cardsPerRow === 2) {
      return [
        cards[2], // Row 1, Col 1 (Vehicle relocation)
        cards[6], // Row 1, Col 2 (Air freight)
        cards[4], // Row 2, Col 1 (Storage solutions)
        cards[7], // Row 2, Col 2 (Sea freight)
        cards[5], // Row 3, Col 1 (Insurance coverage)
        cards[3], // Row 3, Col 2 (Office relocation)
      ];
    }
    return cards.slice(0, 6);
  };
 
  return (
    <div className="w-full py-8 bg-white">
      <style>
        {`
          .card:hover {
            background-image: linear-gradient(to bottom right, #D1AB0C, #4B708C);
          }
          .card-image {
            transition: transform 0.3s ease;
            object-fit: contain;
          }
          .card:hover .card-image {
            transform: rotateY(180deg);
          }
          .slider-container {
            overflow: hidden;
            position: relative;
            width: 100%;
          }
          .slider {
            display: flex;
            transition: transform 0.5s ease;
          }
          .slider-card {
            flex: 0 0 100%;
            padding: 0 16px;
          }
          .card-content {
            display: flex;
            flex-direction: column;
            height: 100%;
            position: relative;
          }
          .card-arrow {
            position: absolute;
            bottom: -10px;
            left: -3px;
            width: 45px;
            height: 45px;
            background: transparent;
            border-radius: 50%;
            padding: 3px;
            transition: background 0.3s ease;
          }
          .card:hover .card-arrow {
            background: white;
          }
          .card-arrow svg {
            width: 100%;
            height: 100%;
          }
          .card:hover .card-arrow svg path {
            fill: black;
          }
          @media (max-width: 639px) {
            .card {
              width: 100% !important;
              height: ${dimensions.cardHeight}px;
            }
          }
          @media (min-width: 640px) and (max-width: 1023px) {
            .card {
              width: calc(50% - ${dimensions.horizontalGap / 2}px) !important;
              height: ${dimensions.cardHeight}px;
              margin-right: ${dimensions.horizontalGap}px;
              margin-bottom: ${dimensions.verticalGap}px;
            }
            .card:nth-child(2n) {
              margin-right: 0;
            }
            .card:nth-last-child(-n+2) {
              margin-bottom: 0;
            }
          }
          @media (min-width: 1024px) {
            .card {
              width: calc(33.333% - ${dimensions.horizontalGap * 2 / 3}px) !important;
              height: ${dimensions.cardHeight}px;
              margin-right: ${dimensions.horizontalGap}px;
              margin-bottom: ${dimensions.verticalGap}px;
            }
            .card:nth-child(3n) {
              margin-right: 0;
            }
            .card:nth-last-child(-n+3) {
              margin-bottom: 0;
            }
          }
        `}
      </style>
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-start items-start mb-6">
          <div>
            <TitleDescription
              title="Our Services"
              titleClass="text-3xl text-black"
            />
            <p className="text-base sm:text-base text-gray-600 mt-4">
              Seamless & Stress-Free Moving Solutions Tailored for You
            </p>
          </div>
          <button
            onClick={handleViewAll}
            className="text-black hover:text-primary transition-all duration-300 mt-4 md:mt-0 md:ml-auto text-base sm:text-lg"
          >
            View All
            <FontAwesomeIcon
              icon={faChevronRight}
              className="ml-2 text-sm sm:text-base"
            />
          </button>
        </div>
        <div className="flex flex-col items-start relative">
          {dimensions.cardsPerRow === 1 ? (
            <div
              className="slider-container"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="slider"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {cards.slice(0, 6).map((card, index) => (
                  <div key={card.id} className="slider-card">
                    <motion.div
                      className="card bg-gradient-to-br from-gray-300 to-primary rounded-[16px] p-5 sm:p-6"
                      style={{
                        height: `${dimensions.cardHeight}px`,
                      }}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={cardVariants[0]}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        duration: 0.5,
                        delay: index * 0.05,
                      }}
                    >
                      <div className="card-content">
                        <img
                          src={card.image}
                          alt={card.title}
                          className={`card-image ${getImageSize()} mt-4 mb-4 object-contain`}
                          onError={() => console.log(`Failed to load image: ${card.title}`)}
                        />
                        <h3 className="text-xl sm:text-2xl text-gray-300 mb-4 capitalize">
                          {card.title}
                        </h3>
                        <p className="text-base sm:text-normal text-gray-300 mb-4 flex-grow">
                          {card.text}
                        </p>
                        <div className="card-arrow mb-0">
                          <svg
                            width="38"
                            height="38"
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="none" />
                            <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="white" />
                            <path
                              d="M15.452 13.5802L16.513 12.5202L22.292 18.2972C22.3851 18.3898 22.4591 18.4999 22.5095 18.6211C22.56 18.7424 22.5859 18.8724 22.5859 19.0037C22.5859 19.1351 22.56 19.2651 22.5095 19.3863C22.4591 19.5076 22.3851 19.6177 22.292 19.7102L16.513 25.4902L15.453 24.4302L20.877 19.0052L15.452 13.5802Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              ref={gridRef}
              className="relative w-full pt-2"
              style={{
                height: `${
                  dimensions.visibleRows * (dimensions.cardHeight + dimensions.verticalGap) -
                  dimensions.verticalGap
                }px`,
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {getVisibleCards().map((card, index) => {
                const { x, y } = gridPositions[index] || { x: 0, y: 0 };
                const variantIndex = index % 4; // Cycle through 4 animation types
                return (
                  <motion.div
                    key={card.id}
                    className="card absolute bg-gradient-to-br from-gray-400 to-primary rounded-[16px] p-5 sm:p-6"
                    style={{
                      height: `${dimensions.cardHeight}px`,
                    }}
                    initial={{ ...cardVariants[variantIndex].hidden, x, y }}
                    animate={{ ...cardVariants[variantIndex].visible, x, y }}
                    exit={{ ...cardVariants[variantIndex].exit, x: x + 100 }}
                    variants={cardVariants[variantIndex]}
                    transition={{
                      type: "spring",
                      stiffness: cardVariants[variantIndex].visible.transition.stiffness,
                      damping: cardVariants[variantIndex].visible.transition.damping,
                      duration: cardVariants[variantIndex].visible.transition.duration,
                      bounce: cardVariants[variantIndex].visible.transition.bounce,
                      delay: index * 0.05,
                    }}
                  >
                    <div className="card-content">
                      <img
                        src={card.image}
                        alt={card.title}
                        className={`card-image ${getImageSize()} mt-4 mb-4 object-contain`}
                        onError={() => console.log(`Failed to load image: ${card.title}`)}
                      />
                      <h3 className="text-xl sm:text-xl text-white mb-4 capitalize">
                        {card.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-200 mb-4 flex-grow">
                        {card.text}
                      </p>
                      <div className="card-arrow mb-0">
                        <svg
                          width="38"
                          height="38"
                          viewBox="0 0 38 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" fill="none" />
                          <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="white" />
                          <path
                            d="M15.452 13.5802L16.513 12.5202L22.292 18.2972C22.3851 18.3898 22.4591 18.4999 22.5095 18.6211C22.56 18.7424 22.5859 18.8724 22.5859 19.0037C22.5859 19.1351 22.56 19.2651 22.5095 19.3863C22.4591 19.5076 22.3851 19.6177 22.292 19.7102L16.513 25.4902L15.453 24.4302L20.877 19.0052L15.452 13.5802Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
 
export default OurServices;