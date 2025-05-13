import React from "react";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/blogs/banner.webp";
import GetInTouchSection from "../../pages/Home/UiComponents/GetinTouch"
import LatestUpdates from "./UiComponents/LatestUpdates";

const Blogs = () => {
  return (
    <>
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
      <section className="container-secondary our-services my-16">
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
