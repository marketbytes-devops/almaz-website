import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/moving/move.webp";
import GetInTouchSection from "../Home/UiComponents/GetinTouch";
import OtherServices from "../UiComponents/OtherServices";
 
const Moving = () => {
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
        titleFirst="Moving"
        mainRoute="HOME"
        subRoute="MOVING"
        subRoutePath="/moving"
      />
 
      <section className="w-full mt-10 sm:mt-10 lg:mt-16">
        <div className="w-full container-secondary">
          <p className="text-gray-700 text-center">
            At Almas Movers International, we specialize in delivering a
            stress-free international move for our clients. Based in Doha,
            Qatar, our expertise in international relocation and moving abroad
            ensures a seamless experience. From providing international moving
            tips to offering comprehensive relocation services, we guide you
            through every step, including packing for an international move, to
            make your transition smooth and hassle-free.
          </p>
        </div>
      </section>
 
      <section className="container-secondary mt-10">
        <OtherServices serviceType="Movers" />
      </section>
 
      <section className="w-full bg-primary/10 mt-6 sm:mt-6 lg:mt-16">
        <div className="mx-auto w-full py-8 sm:py-12 md:py-16">
          <GetInTouchSection />
        </div>
      </section>
    </>
  );
};
 
export default Moving;