import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/blogs/banner.webp";
import GetInTouchSection from "../../pages/Home/UiComponents/GetinTouch";
import LatestUpdates from "./UiComponents/LatestUpdates";
 
const Blogs = () => {
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
 
      <div>
        <Banner
          bannerImage={bannerImage}
          titleFirst="Blogs"
          titleSecond=""
          mainRoute="Home"
          subRoute="Blogs"
          subRoutePath="/blogs"
        />
      </div>
 
      <section className="w-full mt-8 sm:mt-8 lg:mt-16">
        <div className="container-secondary">
          <p className="text-gray-700 text-center">
            Explore our blog for expert insights on achieving a stress-free
            international move with Almas Movers International. Based in Doha,
            Qatar, we share international moving tips and guidance on
            international relocation and moving abroad. Our relocation services,
            including tips for packing for an international move, help ensure
            your journey is smooth and worry-free.
          </p>
        </div>
      </section>
 
      <section className="container-secondary our-services my-14">
        <LatestUpdates />
      </section>
 
      <section className="w-full bg-primary/10 mt-12 sm:mt-12 lg:mt-16">
        <div className="mx-auto w-full py-8 sm:py-12 md:py-16">
          <GetInTouchSection />
        </div>
      </section>
    </>
  );
};
 
export default Blogs;