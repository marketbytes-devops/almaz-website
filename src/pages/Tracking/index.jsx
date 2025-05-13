import React from "react";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/tracking/Banner.webp";
import MakeanEnquiry from "../Moving/UiComponents/MakeanEnquiry";
import Shipment from "./UiComponents/Shipment";



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
       <section className="container-secondary mt-16">
        <Shipment/>
      </section>
      <section className="w-full container-secondary mt-16">
        <MakeanEnquiry />
      </section>
     
    </>
  );
};

export default Tracking;
