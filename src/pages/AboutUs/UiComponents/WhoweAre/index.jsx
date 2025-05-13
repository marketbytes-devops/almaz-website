import React, { useState } from "react";
import { motion } from "framer-motion";
import whowearePic from "../../../../assets/about/whowearePic.webp";
import yellowTick from "../../../../assets/about/yellowtick.svg";

const WhoweAre = () => {
  const [openSection, setOpenSection] = useState("certified");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full">
      <div className="w-full primary_Gradient">
        <div className="mx-auto w-full max-w-7xl px-2 sm:px-3 lg:px-4 font-sans overflow-x-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 px-2 sm:px-3 lg:px-4 py-8 sm:py-12 md:py-20">
              <motion.h1
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6"
                style={{ color: "#FFC107" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Who we are
              </motion.h1>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-200 mb-12 sm:mb-12 md:mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Almas Movers International is an ISO-certified moving company
                based in Doha, Qatar since 2011. With global affiliations and a
                trusted team, we provide safe, professional relocation services
                locally and worldwide.
              </motion.p>

              <div className="space-y-4 sm:space-y-6">
               
                <div>
                  <div
                    className="flex items-center justify-between p-2 sm:p-3 rounded"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                    }}
                  >
                    <motion.h3
                      className="text-base sm:text-lg md:text-xl text-white flex items-center px-9"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <img
                        src={yellowTick}
                        alt="Tick"
                        className="mr-2 w-6 h-6 sm:w-7 sm:h-7"
                      />{" "}
                      Certified Excellence
                    </motion.h3>
                    <button
                      onClick={() => toggleSection("certified")}
                      className="text-lg sm:text-xl md:text-2xl text-gray-300 px-5"
                    >
                      {openSection === "certified" ? "−" : "+"}
                    </button>
                  </div>
                  {openSection === "certified" && (
                    <div
                      className="p-2 sm:p-3 rounded"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                      }}
                    >
                      <motion.p
                        className="text-xs sm:text-sm md:text-base text-gray-300 mt-2 pl-4 sm:pl-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.5 }}
                      >
                        ISO certified for quality and reliability, ensuring the
                        safety of your belongings.
                      </motion.p>
                    </div>
                  )}
                </div>

                <div>
                  <div
                    className="flex items-center justify-between p-2 sm:p-3 rounded"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                    }}
                  >
                    <motion.h3
                      className="text-base sm:text-lg md:text-xl text-white flex items-center px-9"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <img
                        src={yellowTick}
                        alt="Tick"
                        className="mr-2 w-6 h-6 sm:w-7 sm:h-7"
                      />{" "}
                      Seamless Relocation Services
                    </motion.h3>
                    <button
                      onClick={() => toggleSection("seamless")}
                      className="text-lg sm:text-xl md:text-2xl text-gray-300 px-5"
                    >
                      {openSection === "seamless" ? "−" : "+"}
                    </button>
                  </div>
                  {openSection === "seamless" && (
                    <div
                      className="p-2 sm:p-3 rounded"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                      }}
                    >
                      <motion.p
                        className="text-xs sm:text-sm md:text-base text-gray-300 mt-2 pl-4 sm:pl-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.5 }}
                      >
                        Zero compromise on service standards.
                      </motion.p>
                    </div>
                  )}
                </div>

                <div>
                  <div
                    className="flex items-center justify-between p-2 sm:p-3 rounded"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                    }}
                  >
                    <motion.h3
                      className="text-base sm:text-lg md:text-xl text-white flex items-center px-9"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <img
                        src={yellowTick}
                        alt="Tick"
                        className="mr-2 w-6 h-6 sm:w-7 sm:h-7"
                      />{" "}
                      Worldwide Support Network
                    </motion.h3>
                    <button
                      onClick={() => toggleSection("worldwide")}
                      className="text-lg sm:text-xl md:text-2xl text-gray-300 px-5"
                    >
                      {openSection === "worldwide" ? "−" : "+"}
                    </button>
                  </div>
                  {openSection === "worldwide" && (
                    <div
                      className="p-2 sm:p-3 rounded"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                      }}
                    >
                      <motion.p
                        className="text-xs sm:text-sm md:text-base text-gray-300 mt-2 pl-4 sm:pl-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.5 }}
                      >
                        Global reach with local expertise.
                      </motion.p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 min-h-[250px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[400px] flex items-center justify-center sm:px-3 lg:px-4 py-8 sm:py-12 md:py-16">
              <motion.img
                src={whowearePic}
                alt="Who We Are"
                className="w-full max-w-[90%] sm:max-w-[90%] md:max-w-[90%] max-h-[90%] rounded-3xl object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          max-width: 100%;
          overflow-x: hidden;
        }
        @media (max-width: 640px) {
          .text-xl {
            font-size: clamp(1rem, 4vw, 1.25rem);
          }
          .text-lg {
            font-size: clamp(0.875rem, 3.5vw, 1rem);
          }
          .text-base {
            font-size: clamp(0.75rem, 3vw, 0.875rem);
          }
          .text-sm {
            font-size: clamp(0.625rem, 2.5vw, 0.75rem);
          }
          .px-2 {
            padding-left: clamp(0.5rem, 2vw, 0.75rem);
            padding-right: clamp(0.5rem, 2vw, 0.75rem);
          }
          .space-y-6 {
            margin-top: clamp(0.75rem, 3vw, 1rem);
          }
        }
        @media (max-width: 400px) {
          .min-h-[150px] {
            min-height: 120px;
          }
          .px-2 {
            padding-left: clamp(0.25rem, 1.5vw, 0.5rem);
            padding-right: clamp(0.25rem, 1.5vw, 0.5rem);
          }
          .max-w-\[95\%\] {
            max-width: 98%;
          }
        }
      `}</style>
    </div>
  );
};

export default WhoweAre;
