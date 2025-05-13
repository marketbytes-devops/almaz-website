import React, { useState, useEffect, useRef } from "react";
import image1 from "../../../../assets/about/relocateimg.webp";
import TitleDescription from "../../../../components/TitleDescription";

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
      { threshold: 0.5 }
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

  const stats = [
    {
      value: formatNumber(monthlyServices),
      label: "Monthly Services",
    },
    {
      value: formatNumber(deliveries),
      label: "Deliveries",
    },
    {
      value: `${globalPartners}+`,
      label: "Global Partners",
    },
    {
      value: `${onTimeDelivery}%`,
      label: "On-Time Delivery",
    },
  ];

  return (
    <div
      ref={sectionRef}
      style={{
        backgroundImage: `url(${image1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full h-full lg:h-[400px] py-10 lg:py-0 mx-auto overflow-hidden flex flex-col justify-center items-center relative bg-black/50"
    >
      <div className="relative w-full mb-4">
        <div className="w-full flex items-center flex-col">
          <TitleDescription
            title="Relocating Made Simple, Secure, and Stress-Free"
            titleClass="text-secondary"
          />
        </div>
      </div>
      <div className="container-secondary grid grid-cols-1 gap-4 sm:grid-cols-1 lg:flex lg:flex-row lg:justify-between items-center w-full">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex space-y-6 pt-8 flex-col items-center justify-center flex-shrink-0"
          >
            <span className="text-white text-5xl font-semibold sm:text-[clamp(1.75rem,6vw,2rem)] xs:text-[clamp(1.5rem,5vw,1.75rem)]">
              {stat.value}
            </span>
            <span className="text-white text-xl font-medium sm:text-[clamp(0.875rem,3.5vw,1rem)] xs:text-[clamp(0.75rem,3vw,0.875rem)] text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Relocate;