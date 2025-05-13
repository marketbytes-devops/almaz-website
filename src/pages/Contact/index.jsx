import React from "react";
import bannerImage from "../../assets/contact/banner.webp"
import Banner from "../../components/Banner";

import GetInTouchSection from "../Home/UiComponents/GetinTouch";
import Connectwithus from "./UiComponents/ConnectWithUs";



const Contact= () => {
  return (
    <>
      <Banner
        bannerImage={bannerImage}
        titleFirst="Contact Us"
        mainRoute="HOME"
        subRoute="CONTACT US"
        subRoutePath="/contact"
        smallText="Dubai, London, Tokyo, wherever life takes you next, we ensure you and your loved ones arrive with ease and feel at home from the very start"
      />
      <section>
        <div className="mx-auto w-full mt-16">
         <Connectwithus/>
        </div>
      </section>
      <section className="w-full bg-primary/10 mt-12 sm:mt-12 lg:mt-16">
        <div className="mx-auto w-full py-8 sm:py-12 md:py-16">
          <GetInTouchSection />
        </div>
      </section>
    </>
  );
};

export default Contact;