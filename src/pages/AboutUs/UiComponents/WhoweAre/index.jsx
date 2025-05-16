import React, { useState } from "react";
import { motion } from "framer-motion";
import whowearePic from "../../../../assets/about/whowearePic.webp";
import yellowTick from "../../../../assets/about/yellowtick.svg";
import TitleDescription from "../../../../components/TitleDescription";

// JSON data for dynamic content
const whoWeAreData = {
  title: "Who we are",
  description:
    "Almas Movers International is an ISO-certified moving company based in Doha, Qatar since 2011. With global affiliations and a trusted team, we provide safe, professional relocation services locally and worldwide.",
  sections: [
    {
      id: "certified",
      title: "Certified Excellence",
      description:
        "ISO certified for quality and reliability, ensuring the safety of your belongings.",
      icon: yellowTick,
    },
    {
      id: "seamless",
      title: "Seamless Relocation Services",
      description: "Zero compromise on service standards.",
      icon: yellowTick,
    },
    {
      id: "worldwide",
      title: "Worldwide Support Network",
      description: "Global reach with local expertise.",
      icon: yellowTick,
    },
  ],
  image: {
    src: whowearePic,
    alt: "Who We Are",
  },
};

const WhoweAre = () => {
  const [openSection, setOpenSection] = useState(whoWeAreData.sections[0].id);

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className="w-full py-8 sm:py-8 lg:py-16">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row space-x-0 sm:space-x-0 md:space-x-0 lg:space-x-20 xl:space-x-20">
          <div className="w-full md:w-1/2">
            <TitleDescription title={whoWeAreData.title} description={whoWeAreData.description} titleClass="text-secondary pb-2" descriptionClass="text-gray-100 pb-2"/>
            <div className="space-y-4 sm:space-y-6 pt-6">
              {whoWeAreData.sections.map((section, index) => (
                <div key={section.id}>
                  <div
                    className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-white/10 to-white/5"
                  >
                    <motion.h3
                      className="text-base sm:text-lg md:text-xl text-white flex items-center pl-4 sm:pl-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                    >
                      <img
                        src={section.icon}
                        alt="Tick"
                        className="mr-2 w-5 h-5 sm:w-6 sm:h-6"
                      />
                      {section.title}
                    </motion.h3>
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="text-lg sm:text-xl md:text-2xl text-gray-300 pr-4 sm:pr-6"
                      aria-expanded={openSection === section.id}
                      aria-controls={`section-${section.id}`}
                    >
                      {openSection === section.id ? "−" : "+"}
                    </button>
                  </div>
                  {openSection === section.id && (
                    <div
                      className="pb-4 sm:pb-4 lg:pb-6 pl-14 sm:pl-14 lg:pl-[70px] bg-gradient-to-r from-white/10 to-white/5"
                      id={`section-${section.id}`}
                    >
                      <motion.p
                        className="text-xs sm:text-sm md:text-base text-gray-300"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.5 }}
                      >
                        {section.description}
                      </motion.p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center pt-8 sm:pt-8 md:pt-0 lg:pt-0 xl:pt-0">
            <motion.img
              src={whoWeAreData.image.src}
              alt={whoWeAreData.image.alt}
              className="w-full h-auto object-cover rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoweAre;