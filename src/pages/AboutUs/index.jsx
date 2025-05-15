import React from "react";
import WhoweAre from "../../pages/AboutUs/UiComponents/WhoweAre";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/about/banner.webp";
import WhychooseUs from "./UiComponents/WhychooseUs";
import Certifications from "./UiComponents/Certifications";
import Relocate from "./UiComponents/Relocating";
import GetInTouchSection from "../Home/UiComponents/GetinTouch";
 
const AboutUs = () => {
  return (
    <>
      <Banner
        bannerImage={bannerImage}
        titleFirst="ISO Certified"
        titleSecond="Moving Company in Qatar"
        mainRoute="Home"
        subRoute="About Us"
        subRoutePath="/about-us"
      />

      <section className="w-full mt-10 sm:mt-10 lg:mt-16">
      <div className="w-full container-secondary">
        <p className="text-gray-700 text-center">With over a decade of trusted services, Almas Movers International is based in Doha, Qatar and brings a perfect blend of global reach and local expertise. We are proud members of the International Association of Movers (IAM), the British Association of Movers (BAR), and the International Federation of Freight Forwarders Associations (FIATA), reflecting our commitment to international standards and professional excellence in the moving industry.</p>
      </div>
    </section>
      <section className="w-full bg-primary mt-10 sm:mt-10 lg:mt-16 overflow-hidden">
        <div className="container-secondary our-services">
          <WhoweAre />
        </div>
      </section>
 
      <section className="w-full">
        <div className="container-secondary our-services mt-10 sm:mt-10 lg:mt-16">
          <WhychooseUs />
        </div>
      </section>
 
      <section className="w-full mt-10 sm:mt-10 lg:mt-16">
        <div className="container-secondary">
          <Certifications />
        </div>
      </section>
 
      <section className="w-full mt-10 sm:mt-10 lg:mt-16">
      <div className=" w-full">
        <Relocate />
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
 
export default AboutUs;