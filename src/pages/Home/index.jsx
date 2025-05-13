import React, { useState } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/img-1.webp";
import Button from "../../components/Button";
import FormField from "../../components/FormField";
import AboutSection from "./UiComponents/AboutSection";
import OurServices from "./UiComponents/OurServices";
import ContactUs from "./UiComponents/ContactUs";
import Review from "./UiComponents/Review";
import BlogSection from "./UiComponents/Blogs";
import GetInTouchSection from "./UiComponents/GetinTouch";

const Home = () => {
  const [activeTab, setActiveTab] = useState("booking");
  const [isExpanded, setIsExpanded] = useState(false);
  const [areFieldsEnabled, setAreFieldsEnabled] = useState(false); // Track if fields are enabled
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    serviceType: "",
    email: "",
    message: "",
    trackingNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const handleFullNameClick = () => {
    setIsExpanded(true); // Expand the form
    setAreFieldsEnabled(true); // Enable the fields
  };

  const handleCloseExpandedForm = () => {
    setIsExpanded(false); // Collapse the expanded form
    setAreFieldsEnabled(false); // Disable the fields again
  };

  const serviceOptions = [
    { value: "moving", label: "Moving" },
    { value: "logistics", label: "Logistics" },
    { value: "relocation", label: "Relocation" },
  ];

  return (
    <>
      <style>
        {`
          .ripple-button {
            position: relative;
            overflow: hidden;
          }
 
          .ripple-button::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s ease, height 0.6s ease;
            pointer-events: none;
          }
 
          .ripple-button:hover::before {
            width: 200%;
            height: 200%;
          }
        `}
      </style>
      <div className="container-primary w-full pt-16">
        <div
          className="relative w-full min-h-[700px] bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 overflow-hidden rounded-3xl"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
          }}
        >
          <div
            className="absolute inset-0 min-h-[700px] rounded-3xl"
            style={{
              backgroundImage: `linear-gradient(to bottom right, rgb(76, 112, 133), rgba(0,0,0, 0.3))`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <motion.div
            className="relative z-20 max-w-5xl mx-auto pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="space-y-5 font-bold pt-8 lg:pt-10">
                <div>
                  <span className="text-white"> Moving from </span>
                  <span className="text-secondary">Qatar? </span>
                </div>
                <div>
                  <span className="text-white">We'll get you there, </span>
                  <span className="text-secondary">fast and safe!</span>
                </div>
                <div className="text-gray-100 font-normal text-xl">
                  Qatar's most trusted international moving & relocation <br />
                  experts delivering seamless and reliable logistics solution
                </div>
              </div>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl max-w-[600px] mx-auto mt-14 lg:mt-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            ></motion.p>
            <motion.div
              className="max-w-[1100px] w-full bg-[rgba(255,255,255,0.5)] rounded-3xl shadow-lg shadow-black/30 mb-6 overflow-hidden mx-auto relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {isExpanded && (
                <button
                  onClick={handleCloseExpandedForm}
                  className="absolute top-1 lg:top-4 right-1 lg:right-4 text-gray-900 hover:text-gray-600 focus:outline-none"
                  aria-label="Close expanded form"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
              <div className="p-6">
                <div className="flex justify-center gap-4 sm:gap-6">
                  <button
                    onClick={() => {
                      setActiveTab("booking");
                      setIsExpanded(false);
                      setAreFieldsEnabled(false);
                    }}
                    className={`text-[16px] sm:text-[16px] lg:text-[16px] font-normal cursor-pointer rounded-xl px-10 py-2 ${activeTab === "booking"
                        ? "text-black border-b-4 border-[#121211]"
                        : "text-gray-600"
                      } bg-white rounded-xl`}
                  >
                    Booking
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("tracking");
                      setIsExpanded(false);
                      setAreFieldsEnabled(false);
                    }}
                    className={`text-[16px] sm:text-[16px] lg:text-[16px] font-normal cursor-pointer rounded-xl px-10 py-2 ${activeTab === "tracking"
                        ? "text-black border-b-4 border-[#121211]"
                        : "text-gray-600"
                      } bg-white rounded-md`}
                  >
                    Tracking
                  </button>


                </div>
                <div className="border-t border-white -mx-6 sm:-mx-8 mt-6"></div>

                {activeTab === "booking" ? (
                  <div className={`pt-6 ${!isExpanded ? "pb-0" : ""}`}>
                    <div className="flex gap-3 sm:gap-4 flex-wrap">
                      <div className="flex-1 min-w-[270px]">
                        <FormField
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          onClick={handleFullNameClick}
                          required
                        />
                      </div>
                      <div className="flex-1 min-w-[270px]">
                        <FormField
                          type="tel"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          disabled={!areFieldsEnabled}
                          required
                        />
                      </div>
                      <div className="flex-1 min-w-[270px]">
                        <FormField
                          type="select"
                          name="serviceType"
                          placeholder="Service Type"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          options={serviceOptions}
                          disabled={!areFieldsEnabled}
                          required
                        />
                      </div>
                    </div>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-4"
                      >
                        <div className="flex gap-4 sm:gap-4 flex-wrap">
                          <div className="flex-1 min-w-[270px]">
                            <FormField
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <FormField
                            type="textarea"
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mt-4">
                          <Button
                            label="Get a quote"
                            icon="ArrowUpRight"
                            className="bg-secondary text-black rounded-2xl px-4 py-3 text-lg hover:bg-white hover:text-gray-900 transition-colors ripple-button"
                            onClick={handleFormSubmit}
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <div className="flex gap-4 sm:gap-4 items-center p-2 flex-wrap">
                    <div className="flex-1 min-w-[200px]">
                      <FormField
                        type="text"
                        name="trackingNumber"
                        icon=""
                        placeholder="Tracking Number"
                        value={formData.trackingNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Button
                      label="Track"
                      icon="ArrowUpRight"
                      className="w-auto bg-secondary text-black text-xl text-left rounded-2xl px-4 py-3 mb-3 hover:bg-white hover:text-gray-900 transition-colors"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <section className="container-secondary about-us mt-10 sm:mt-10 lg:mt-16">
        <AboutSection />
      </section>

      <section className="container-secondary our-services pl-40 mt-6 sm:mt-6 lg:mt-16">
        <OurServices />
      </section>

      <section className="container-secondary our-services mt-10 sm:mt-10 lg:mt-16">
        <ContactUs />
      </section>
      <section className="container-secondary our-services mt-10 sm:mt-10 lg:mt-16">
        <Review />
      </section>
      <section className="container-secondary our-services ">
        <BlogSection />
      </section>
      <section className="w-full bg-primary/10 mt-12 sm:mt-12 lg:mt-16">
        <div className="mx-auto w-full py-8 sm:py-12 md:py-16">
          <GetInTouchSection />
        </div>
      </section>
    </>
  );
};

export default Home;