import React, { useState, useEffect, useRef } from "react";
import rightImage from "../../../../assets/Frame9757.webp";
import Button from "../../../../components/Button";
import TitleDescription from "../../../../components/TitleDescription";

const AboutSection = () => {
  const [monthlyServices, setMonthlyServices] = useState(0);
  const [deliveriesCompleted, setDeliveriesCompleted] = useState(0);
  const [globalPartners, setGlobalPartners] = useState(0);
  const [onTimeDelivery, setOnTimeDelivery] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const targets = {
    monthlyServices: 348,
    deliveriesCompleted: 499,
    globalPartners: 150,
    onTimeDelivery: 99,
  };

  const duration = 2000;
  const intervalTime = 50;

  const startCounterAnimation = () => {
    setMonthlyServices(0);
    setDeliveriesCompleted(0);
    setGlobalPartners(0);
    setOnTimeDelivery(0);

    const steps = duration / intervalTime;
    const increments = {
      monthlyServices: targets.monthlyServices / steps,
      deliveriesCompleted: targets.deliveriesCompleted / steps,
      globalPartners: targets.globalPartners / steps,
      onTimeDelivery: targets.onTimeDelivery / steps,
    };

    intervalRef.current = setInterval(() => {
      setMonthlyServices((prev) =>
        prev + increments.monthlyServices >= targets.monthlyServices
          ? targets.monthlyServices
          : prev + increments.monthlyServices
      );
      setDeliveriesCompleted((prev) =>
        prev + increments.deliveriesCompleted >= targets.deliveriesCompleted
          ? targets.deliveriesCompleted
          : prev + increments.deliveriesCompleted
      );
      setGlobalPartners((prev) =>
        prev + increments.globalPartners >= targets.globalPartners
          ? targets.globalPartners
          : prev + increments.globalPartners
      );
      setOnTimeDelivery((prev) =>
        prev + increments.onTimeDelivery >= targets.onTimeDelivery
          ? targets.onTimeDelivery
          : prev + increments.onTimeDelivery
      );
    }, intervalTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startCounterAnimation();
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const formatNumber = (value, suffix) => {
    if (suffix === "K") {
      return `${Math.round(value)}K`;
    } else if (suffix === "+") {
      return `${Math.round(value)}+`;
    } else if (suffix === "%") {
      return `${Math.round(value)}%`;
    }
    return Math.round(value);
  };

  return (
    <div
      ref={sectionRef}
      className="mx-auto w-full flex justify-center items-center"
    >
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-stretch">
          <div className="flex-1 flex flex-col gap-10">
            <div>
              <TitleDescription
                title="About us"
                titleClass="text-3xl text-black"
              />
              <br />
              <p className="text-md text-gray-700">
                Almas movers international is an ISO certified company based in
                Doha-Qatar since 2011. We are member of world's largest moving
                association known as IAM (International association of Movers),
                BAR (British Association of Movers) and FIATA.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <Button
                label="Explore More"
                icon="ArrowUpRight"
                className="w-fit bg-secondary text-black rounded-2xl px-4 py-3 text-lg hover:bg-white hover:text-gray-900 transition-colors ripple-button duration-300"
              />
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-4 lg:flex lg:justify-between lg:items-center lg:gap-4">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#121211] mb-2 sm:mb-4">
                    {formatNumber(monthlyServices, "K")}
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                    Monthly <br /> Services
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl text-[#121211] font-semibold mb-2 sm:mb-4">
                    {formatNumber(deliveriesCompleted, "K")}
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                    Deliveries <br /> Completed
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl text-[#121211] font-semibold mb-2 sm:mb-4">
                    {formatNumber(globalPartners, "+")}
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                    Global <br /> Partners
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl text-[#121211] font-semibold mb-2 sm:mb-4">
                    {formatNumber(onTimeDelivery, "%")}
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                    On-time <br /> Delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-stretch">
            <img
              src={rightImage}
              alt="Logistics and Moving"
              className="w-full h-[450px] object-fill rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;