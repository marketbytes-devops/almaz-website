import React, { useState, useEffect, useRef } from "react";
import image1 from "../../../../assets/about/relocateimg.webp";

const Relocate = () => {
  const [monthlyServices, setMonthlyServices] = useState(0);
  const [deliveries, setDeliveries] = useState(0);
  const [globalPartners, setGlobalPartners] = useState(0);
  const [onTimeDelivery, setOnTimeDelivery] = useState(0);
  const sectionRef = useRef(null);

  const startAnimation = () => {
    const duration = 2000;
    const frameRate = 30;
    const totalFrames = Math.round(duration / (1000 / frameRate));

    let frame1 = 0;
    const increment1 = 348000 / totalFrames;
    const counter1 = setInterval(() => {
      frame1++;
      const currentValue = Math.round(increment1 * frame1);
      setMonthlyServices(currentValue);
      if (frame1 >= totalFrames) {
        clearInterval(counter1);
        setMonthlyServices(348000);
      }
    }, 1000 / frameRate);

    let frame2 = 0;
    const increment2 = 499000 / totalFrames;
    const counter2 = setInterval(() => {
      frame2++;
      const currentValue = Math.round(increment2 * frame2);
      setDeliveries(currentValue);
      if (frame2 >= totalFrames) {
        clearInterval(counter2);
        setDeliveries(499000);
      }
    }, 1000 / frameRate);

    let frame3 = 0;
    const increment3 = 150 / totalFrames;
    const counter3 = setInterval(() => {
      frame3++;
      const currentValue = Math.round(increment3 * frame3);
      setGlobalPartners(currentValue);
      if (frame3 >= totalFrames) {
        clearInterval(counter3);
        setGlobalPartners(150);
      }
    }, 1000 / frameRate);

    let frame4 = 0;
    const increment4 = 99 / totalFrames;
    const counter4 = setInterval(() => {
      frame4++;
      const currentValue = Math.round(increment4 * frame4);
      setOnTimeDelivery(currentValue);
      if (frame4 >= totalFrames) {
        clearInterval(counter4);
        setOnTimeDelivery(99);
      }
    }, 1000 / frameRate);

    return () => {
      clearInterval(counter1);
      clearInterval(counter2);
      clearInterval(counter3);
      clearInterval(counter4);
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          setMonthlyServices(0);
          setDeliveries(0);
          setGlobalPartners(0);
          setOnTimeDelivery(0);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}k`;
    }
    return num.toString();
  };

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden">
      <div className="w-full">
        <img
          src={image1}
          alt="Relocate"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="absolute top-10 left-0 right-0 z-20 w-full text-center">
        <h2 className="text-4xl text-secondary px-4 py-1 inline-block">
          Relocating Made Simple, Secure, and Stress-Free
        </h2>
      </div>

      <div className="absolute inset-0 grid grid-cols-4 z-10 top-10 w-full">
        <div className="flex flex-col items-center justify-center p-4">
          <span className="text-white text-5xl font-poppins font-semibold mt-2">
            {formatNumber(monthlyServices)}
          </span>
          <span className="text-white text-xl font-poppins font-medium px-3 py-1">
            Monthly Services
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <span className="text-white text-5xl font-poppins font-semibold mt-2">
            {formatNumber(deliveries)}
          </span>
          <span className="text-white text-xl font-poppins font-medium px-3 py-1">
            Deliveries
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <span className="text-white text-5xl font-poppins font-semibold mt-2">
            {globalPartners}+
          </span>
          <span className="text-white text-xl font-poppins font-medium px-3 py-1">
            Global Partners
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <span className="text-white text-5xl font-poppins font-semibold mt-2">
            {onTimeDelivery}%
          </span>
          <span className="text-white text-xl font-poppins font-medium px-3 py-1">
            On-Time Delivery
          </span>
        </div>
      </div>
    </div>
  );
};

export default Relocate;
