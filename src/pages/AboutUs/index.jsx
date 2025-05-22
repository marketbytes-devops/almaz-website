import React from "react";
import { Helmet } from "react-helmet";
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
        titleFirst="ISO Certified"
        titleSecond="Moving Company in Qatar"
        mainRoute="Home"
        subRoute="About Us"
        subRoutePath="/about-us"
      />
 
      <section className="w-full mt-10 sm:mt-10 lg:mt-16">
        <div className="w-full container-secondary">
          <p className="text-gray-700 text-center">
            With over a decade of trusted service, Almas Movers International,
            headquartered in Doha, Qatar, specializes in providing a stress-free
            international move. Our expertise in international relocation and
            moving abroad ensures a seamless experience, combining global reach
            with local expertise. As proud members of the International
            Association of Movers (IAM), the British Association of Movers
            (BAR), and the International Federation of Freight Forwarders
            Associations (FIATA), we uphold the highest standards of
            professionalism and commitment to excellence in relocation services.
          </p>
        </div>
      </section>
 
      <section className="w-full bg-primary mt-10 sm:mt-10 lg:mt-16 overflow-hidden">
        <div className="container-secondary our-services">
          <WhoweAre />
        </div>
      </section>
 
      <section className="w-full overflow-hidden">
        <div className="container-secondary our-services mt-10 sm:mt-10 lg:mt-16 mb-4 sm:mb-4 md:mb-0 lg:mb-0 xl:mb-0">
          <WhychooseUs />
        </div>
      </section>
 
      <section className="w-full mt-10 sm:mt-10 lg:mt-16 overflow-hidden">
        <div className="container-secondary">
          <Certifications />
        </div>
      </section>
 
      <section className="w-full mt-10 sm:mt-10 lg:mt-16">
        <div className="w-full">
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
 
 