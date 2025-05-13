import { useState } from "react";
import { motion } from "framer-motion"; // Added for animations
import TitleDescription from "../../../../components/TitleDescription";
import Imagedown from "../../../../assets/getintouch.webp";
import Imageup from "../../../../assets/getintouch2.webp";
import Button from "../../../../components/Button";
import FormField from "../../../../components/FormField";

// Animation variants for form and images
const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
  },
};

const GetInTouchSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const serviceOptions = [
    { value: "moving", label: "Moving" },
    { value: "logistics", label: "Logistics" },
    { value: "relocation", label: "Relocation" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center py-8 sm:py-10 container-secondary">
      {/* Form Section */}
      <motion.div
        className="w-full md:w-1/2"
        variants={formVariants}
        initial="hidden"
        animate="visible"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        <TitleDescription
          title="Get in touch"
          description="Please get in touch with us if you have any questions or need further assistance."
          titleClass="text-3xl sm:text-4xl text-black py-2"
          descriptionClass="text-base sm:text-lg text-gray-600"
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Name"
            required
            style={{ fontFamily: '"Poppins", sans-serif' }}
            className="w-full text-sm sm:text-base"
          />
          <FormField
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone number"
            required
            style={{ fontFamily: '"Poppins", sans-serif' }}
            className="w-full text-sm sm:text-base"
          />
          <FormField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            style={{ fontFamily: '"Poppins", sans-serif' }}
            className="w-full text-sm sm:text-base"
          />
          <FormField
            type="select"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            options={serviceOptions}
            placeholder="Service type"
            required
            style={{ fontFamily: '"Poppins", sans-serif' }}
            className="w-full text-sm sm:text-base"
          />
          <FormField
            type="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            style={{ fontFamily: '"Poppins", sans-serif' }}
            className="w-full text-sm sm:text-base"
          />
          <motion.div>
            <Button
              label="Submit"
              icon="ArrowUpRight"
              className="bg-secondary text-black rounded-2xl px-4 py-3 text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
            />
          </motion.div>
        </form>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="hidden lg:flex items-center justify-center w-full md:w-1/2 h-full relative"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative flex flex-col items-center">
          <div className="relative flex flex-col items-center">
            {/* White Circle Background */}
            <div
              className="absolute w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-white rounded-full z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[45%]"
            ></div>

            {/* Top Image */}
            <div
              className="relative w-48 sm:w-64 md:w-80 h-56 sm:h-72 md:h-96 mr-0 md:mr-32 z-10"
            >
              <img
                src={Imageup}
                alt="Get in touch top"
                className="w-full h-full rounded-3xl object-cover"
              />
            </div>

            {/* Bottom Image */}
            <div
              className="relative w-40 sm:w-48 md:w-64 h-44 sm:h-56 md:h-72 mt-[-4rem] sm:mt-[-5rem] md:mt-[-6rem] left-0 md:left-20 z-5"
            >
              <img
                src={Imagedown}
                alt="Get in touch bottom"
                className="w-full h-full rounded-3xl object-cover"
              />
            </div>
          </div>

          {/* Decorative SVG */}
          <div className="absolute inset-0 flex items-center justify-center z-5">
            <svg
              width="474"
              height="523"
              viewBox="0 0 474 523"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-[200px] sm:w-[300px] md:w-[474px] h-[200px] sm:h-[300px] md:h-[523px]"
            >
              <path
                d="M460.4 8.00171C433.829 22.3557 488.054 68.757 468 85.6267C436.854 111.827 371.705 64.7291 358 94.1423C343.705 124.821 443 193.541 350 193.541C241 193.541 281.923 161.3 221.129 235.146C194.923 266.978 304.373 348.274 289 369.943C268.796 398.422 160.373 361.359 131 382.881C114.949 394.642 159.974 467.025 147.152 483.732C126.974 510.025 42.741 474.337 10 511.627"
                stroke="#8DBAFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="10"
              />
              <circle cx="8" cy="514.627" r="8" fill="#FFD31D" />
              <circle cx="460" cy="8.62671" r="8" fill="#FFD31D" />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetInTouchSection;