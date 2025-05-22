import React from "react";
import { Helmet } from "react-helmet";
import bannerImage from "../../assets/contact/banner.webp";
import Banner from "../../components/Banner";
import GetInTouchSection from "../Home/UiComponents/GetinTouch";
import Connectwithus from "./UiComponents/ConnectWithUs";

const Contact = () => {
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
        <meta
          name="keywords"
          content="Stress-Free International Move, International relocation, moving abroad, international moving tips, relocation services, packing for international move, international relocation tips, moving overseas, stress-free move, international moving company"
        />
      </Helmet>
      <Banner
        bannerImage={bannerImage}
        titleFirst="Contact Us"
        mainRoute="HOME"
        subRoute="CONTACT US"
        subRoutePath="/contact"
        smallText="Plan a stress-free international move with Almas Movers International. Our expert relocation services ensure a smooth transition, offering international moving tips, professional packing for international moves, and support for moving abroad."
      />
      <section>
        <div className="mx-auto w-full mt-12 sm:mt-12 lg:mt-16">
          <Connectwithus />
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
