import React from "react";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/tracking/Banner.webp";
import MakeanEnquiry from "../Moving/UiComponents/MakeanEnquiry";
import Shipment from "./UiComponents/Shipment";
import GetInTouchSection from "../Home/UiComponents/GetinTouch";



const Tracking = () => {
  return (
    <>
      <Banner
        bannerImage={bannerImage}
        titleFirst="Tracking"
        smallText="Dubai, London, Tokyo, wherever life takes you next, we ensure you and your loved ones arrive with ease and feel at home from the very start."
        mainRoute="HOME"
        subRoute="TRACKING"
        subRoutePath="/tracking"
      />
      <section className="container-secondary mt-8 sm:mt-8 lg:mt-16">
        <Shipment />
      </section>
      <section className="w-full container-secondary mt-10 sm:mt-10 lg:mt-16">
        <MakeanEnquiry />
      </section>
      <section className="w-full bg-primary/10 mt-8 sm:mt-8 lg:mt-16">
        <div className="mx-auto w-full py-6 sm:py-12 md:py-16">
          <GetInTouchSection />
        </div>
      </section>
    </>
  );
};

export default Tracking;
