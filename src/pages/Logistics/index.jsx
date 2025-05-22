import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../../components/Banner';
import bannerImage from '../../assets/logistics/logisticsbanner.webp';
import GetInTouchSection from '../Home/UiComponents/GetinTouch';
import OtherServices from '../UiComponents/OtherServices';

const Logistics = () => {
  return (
    <>
      <Helmet>
        <title>Top Tips for a Stress-Free International Move | Almas Movers International</title>
        <meta
          name="description"
          content="Moving internationally? Discover essential tips for a stress-free relocation, from hiring professionals to managing your finances and settling in. Start your smooth journey with Almas Movers."
        />
        <meta
          name="keywords"
          content="stress-free international move, international relocation, moving abroad, international moving tips, relocation services, packing for international move, international relocation tips, moving overseas, stress-free move, international moving company"
        />
        <link rel="canonical" href="https://www.almasmovers.com/top-tips-stress-free-international-move" />
      </Helmet>
      <Banner
        bannerImage={bannerImage}
        titleFirst="Logistics"
        
        bannerDescription="Dubai, London, Tokyo, wherever life takes you next, we ensure a stress-free international move for you and your loved ones, helping you arrive with ease and feel at home from the very start."
        description="Almas Movers International is your trusted partner for international relocation. Based in Qatar, we are globally recognized for our exceptional relocation services. Unlike other international moving companies, we prioritize distinction, customer satisfaction, and customized solutions for a seamless moving abroad experience. Discover our expert international moving tips and tailored packing for international move services."
        mainRoute="Home"
        subRoute="Logistics"
        subRoutePath="/logistics"
      />
      <section className="container-secondary mt-10">
        <OtherServices serviceType="Logistics" />
      </section>
      <section className="w-full bg-primary/10 mt-6 sm:mt-6 lg:mt-16">
        <div className="mx-auto w-full py-8 sm:py-12 md:py-16">
          <GetInTouchSection />
        </div>
      </section>
    </>
  );
};

export default Logistics;