import React, { useState } from "react";
import { motion } from "framer-motion";
import TitleDescription from "../../../../components/TitleDescription";
import Button from "../../../../components/Button";
import FormField from "../../../../components/FormField";

const faqs = [
  {
    id: "shipment-number",
    title: "How do I track my shipment?",
    description:
      "To track your shipment, simply enter the 10-character tracking number (4 letters and 6 digits) in the field provided. You'll receive real-time updates on your cargo’s status and location.",
  },
  {
    id: "tracking-info",
    title: "What if my tracking number isn’t working?",
    description: "Ensure that the tracking number is entered correctly (4 letters and 6 digits). If the issue persists, please contact our customer support team for assistance.",
  },
  {
    id: "tracking-info",
    title: "Can I track my shipment internationally?",
    description: "Yes, you can track your shipment globally using the same tracking number. We provide real-time updates no matter where your cargo is located.",
  },
];

const accordionVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
};

const Shipment = () => {
  const [formData, setFormData] = useState({
    trackingNumber: "",
  });
  const [openSection, setOpenSection] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <div>
      <TitleDescription
        title="Track Your Shipment"
        titleClass="text-2xl sm:text-3xl md:text-4xl text-black font-semibold"
        description="Enter the tracking number to view the current location and status of your cargo in real-time."
        descriptionClass="text-base sm:text-lg text-black mt-4 sm:mt-6"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      />

      <div className="relative bg-gradient-to-b from-gray-500 to-primary text-white p-4 sm:p-6 shadow-lg w-full mx-auto overflow-hidden flex flex-col sm:flex-row items-center gap-4 rounded-xl mt-6 sm:mt-8">
        <FormField
          type="text"
          name="trackingNumber"
          placeholder="Input your 10-character tracking number to check the current status of your shipment"
          value={formData.trackingNumber}
          onChange={handleInputChange}
          required
          className="w-full sm:flex-1 text-sm sm:text-base"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        />
        <Button
          label="Track"
          icon="ArrowUpRight"
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-lg bg-secondary text-black rounded-xl hover:bg-white hover:text-black transition-colors"
          style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}
        />
      </div>

      <TitleDescription
        description=""
        descriptionClass="text-sm sm:text-base text-primary/100 mt-4 sm:mt-6"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      />

      <div className="border border-primary/20 my-8 sm:my-10 md:my-12"></div>

      <div className="w-full pt-2">
        <div className="space-y-4 sm:space-y-4 lg:space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <div
                className={`flex items-center justify-between p-3 sm:p-4 rounded-lg bg-primary_blue/40 cursor-pointer`}
                onClick={() => toggleSection(faq.id)}
              >
                <h3
                  className="text-sm sm:text-base md:text-lg text-black"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {faq.title}
                </h3>
                <button
                  className="text-base sm:text-lg text-gray-800"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {openSection === faq.id ? "−" : "+"}
                </button>
              </div>
              {openSection === faq.id && (
                <motion.div
                  className="px-4 py-3 sm:py-4 rounded-lg bg-white"
                  variants={accordionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <p
                    className="text-xs sm:text-sm md:text-base text-gray-600"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {faq.description}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shipment;