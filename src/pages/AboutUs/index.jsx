import React from "react";
import WhoweAre from "../../pages/AboutUs/UiComponents/WhoweAre";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/about/banner.webp";
import WhychooseUs from "./UiComponents/WhychooseUs";
import Certifications from "./UiComponents/Certifications";
import Relocate from "./UiComponents/Relocating";

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
        description="With over a decade of trusted services, Almas Movers International is based in Doha, Qatar and brings a perfect blend of global reach and local expertise. We are proud members of the International Association of Movers (IAM), the British Association of Movers (BAR), and the International Federation of Freight Forwarders Associations (FIATA), reflecting our commitment to international standards and professional excellence in the moving industry."
      />
      <section className="w-full bg-primary">
        <div className="mx-auto w-full max-w-7xl px-2 sm:px-3 lg:px-4 py-8 sm:py-12 md:py-16">
          <WhoweAre />
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto w-full max-w-7xl px-1 sm:px-3 lg:px-2 py-8 sm:py-12 md:py-16">
          <WhychooseUs />
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto w-full max-w-7xl px-2 sm:px-3 lg:px-4 py-8 sm:py-12 md:py-16">
          <Certifications />
        </div>
      </section>

      <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-2 sm:px-3 lg:px-4 py-8 sm:py-12 md:py-16">
        <Relocate />
      </div>
    </section>
    </>
  );
};

export default AboutUs;