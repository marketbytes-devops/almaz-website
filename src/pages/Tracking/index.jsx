import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/tracking/Banner.webp";
import MakeanEnquiry from "../Moving/UiComponents/MakeanEnquiry";
import Shipment from "./UiComponents/Shipment";
import GetInTouchSection from "../Home/UiComponents/GetinTouch";
import ContactUs from "../../pages/Home/UiComponents/ContactUs";
 
const Tracking = () => {
  return (
    <>
      <Helmet>
        <title>
          Top Tips for a Stress-Free International Move | Almas Movers
          International
        </title>
        <meta
          name="description"
          content="Moving internationally? Discover essential tips for a stress-free relocation, from hiring professionals to managing your finances and settling in. Start your smooth journey with Almas Movers."
        />
      </Helmet>
 
      <Banner
        bannerImage={bannerImage}
        titleFirst="Track Your Cargo"
        smallText="Never lose sight of your cargo. Track it instantly with just a tracking number and stay updated every step of the way."
        mainRoute="HOME"
        subRoute="TRACK"
        subRoutePath="/track"
      />
 
      <section className="w-full mt-8 sm:mt-8 lg:mt-16">
        <div className="container-secondary">
          <p className="text-gray-700 text-center">
            At Almas Movers International, we ensure a stress-free international
            move by offering reliable tracking and comprehensive relocation
            services. Based in Doha, Qatar, our expertise in international
            relocation and moving abroad, combined with international moving
            tips, helps you stay informed and confident throughout your journey.
            From packing for an international move to real-time shipment
            tracking, we make your move seamless and worry-free.
          </p>
        </div>
      </section>
 
      <section className="container-secondary mt-8 sm:mt-8 lg:mt-16">
        <Shipment />
      </section>
 
      <section className="container-secondary our-services mt-8 sm:mt-10 lg:mt-16">
        <ContactUs />
      </section>
 
      {/* <section className="w-full container-secondary mt-10 sm:mt-10 lg:mt-16">
        <MakeanEnquiry />
      </section> */}
 
      <section className="w-full bg-primary/10 mt-8 sm:mt-8 lg:mt-16">
        <div className="mx-auto w-full py-6 sm:py-12 md:py-16">
          <GetInTouchSection />
        </div>
      </section>
    </>
  );
};
 
export default Tracking;
 