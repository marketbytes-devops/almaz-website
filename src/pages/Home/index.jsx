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
  const [areFieldsEnabled, setAreFieldsEnabled] = useState(false);
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
    setIsExpanded(true);
    setAreFieldsEnabled(true);
  };
 
  const handleCloseExpandedForm = () => {
    setIsExpanded(false);
    setAreFieldsEnabled(false);
  };
 
  const serviceOptions = [
    { value: "moving", label: "Moving" },
    { value: "logistics", label: "Logistics" },
    { value: "relocation", label: "Relocation" },
  ];
 
  return (
    <>
      <div className="container-primary w-full pt-12 sm:pt-16">
        <div
          className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] bg-cover bg-center flex flex-col justify-center items-center text-center text-white mx-0 px-0 sm:px-6 md:px-8 rounded-b-3xl rounded-t-none"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
          }}
        >
          <div
            className="absolute inset-0 rounded-b-3xl rounded-t-none"
            style={{
              backgroundImage: `linear-gradient(to bottom right, rgba(76, 112, 133, 0.8), rgba(0,0,0, 0.3))`,
            }}
          ></div>
          <motion.div
            className="relative z-10 w-full max-w-5xl mx-auto pt-12 sm:pt-16 md:pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 space-y-4 sm:space-y-5 px-4 sm:px-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div>
                <span className="text-white">Moving from </span>
                <span className="text-yellow-400">Qatar? </span>
              </div>
              <div>
                <span className="text-white">We'll get you there, </span>
                <span className="text-yellow-400">fast and safe!</span>
              </div>
              <div className="text-gray-100 font-normal text-base sm:text-lg md:text-xl">
                Qatar's most trusted international moving & relocation <br />
                experts delivering seamless and reliable logistics solutions
              </div>
            </motion.h1>
            <motion.div
              className="w-full bg-white/50 rounded-3xl shadow-lg shadow-black/30 mb-6 mx-auto relative overflow-hidden max-w-[90%] sm:max-w-4xl px-4 sm:px-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {isExpanded && (
                <button
                  onClick={handleCloseExpandedForm}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-900 hover:text-gray-600 focus:outline-none"
                  aria-label="Close expanded form"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
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
              <div className="p-4 sm:p-6">
                <div className="flex justify-center gap-2 sm:gap-4">
                  <button
                    onClick={() => {
                      setActiveTab("booking");
                      setIsExpanded(false);
                      setAreFieldsEnabled(false);
                    }}
                    className={`text-sm sm:text-base font-medium cursor-pointer rounded-xl px-4 sm:px-6 py-1 sm:py-2 ${
                      activeTab === "booking"
                        ? "text-black border-b-4 border-gray-900 bg-white"
                        : "text-gray-600 bg-white/80"
                    } transition-colors`}
                  >
                    Booking
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("tracking");
                      setIsExpanded(false);
                      setAreFieldsEnabled(false);
                    }}
                    className={`text-sm sm:text-base font-medium cursor-pointer rounded-xl px-4 sm:px-6 py-1 sm:py-2 ${
                      activeTab === "tracking"
                        ? "text-black border-b-4 border-gray-900 bg-white"
                        : "text-gray-600 bg-white/80"
                    } transition-colors`}
                  >
                    Tracking
                  </button>
                </div>
                <div className="border-t border-white/50 -mx-4 sm:-mx-6 mt-4 sm:mt-6"></div>
 
                {activeTab === "booking" ? (
                  <div className={`pt-4 sm:pt-6 ${!isExpanded ? "pb-0" : "pb-4"}`}>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap">
                      <div className="flex-1 min-w-[200px]">
                        <FormField
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          onClick={handleFullNameClick}
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="flex-1 min-w-[200px]">
                        <FormField
                          type="tel"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          disabled={!areFieldsEnabled}
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="flex-1 min-w-[200px]">
                        <FormField
                          type="select"
                          name="serviceType"
                          placeholder="Service Type"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          options={serviceOptions}
                          disabled={!areFieldsEnabled}
                          required
                          className="w-full"
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
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap">
                          <div className="flex-1 min-w-[200px]">
                            <FormField
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full"
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
                            className="w-full"
                          />
                        </div>
                        <div className="mt-4">
                          <Button
                            label="Get a quote"
                            icon="ArrowUpRight"
                            className="bg-yellow-400 text-black rounded-2xl px-4 py-2 sm:px-4 sm:py-3 text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-colors w-full sm:w-auto"
                            onClick={handleFormSubmit}
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center p-2">
                    <div className="flex-1 min-w-[200px]">
                      <FormField
                        type="text"
                        name="trackingNumber"
                        icon=""
                        placeholder="Tracking Number"
                        value={formData.trackingNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <Button
                      label="Track"
                      icon="ArrowUpRight"
                      className="w-full sm:w-auto bg-yellow-400 text-black text-base sm:text-lg rounded-2xl px-4 py-2 sm:px-4 sm:py-3 hover:bg-white hover:text-gray-900 transition-colors"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <section className="container-secondary about-us mt-8 sm:mt-10 lg:mt-16">
        <AboutSection />
      </section>
      <section className="container-secondary our-services pl-10 sm:pl-20 md:pl-40 mt-6 sm:mt-6 lg:mt-16">
        <OurServices />
      </section>
      <section className="container-secondary our-services mt-8 sm:mt-10 lg:mt-16">
        <ContactUs />
      </section>
      <section className="container-secondary our-services mt-8 sm:mt-10 lg:mt-16">
        <Review />
      </section>
      <section className="container-secondary our-services">
        <BlogSection />
      </section>
      <section className="w-full bg-primary/10 mt-10 sm:mt-12 lg:mt-16">
        <div className="mx-auto w-full py-6 sm:py-12 md:py-16">
          <GetInTouchSection />
        </div>
      </section>
    </>
  );
};
 
export default Home;