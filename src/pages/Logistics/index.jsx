import React from 'react';
import Banner from '../../components/Banner';
import bannerImage from '../../assets/logistics/MovingBanner.webp';
import GetInTouchSection from '../Home/UiComponents/GetinTouch';
import OtherServices from '../UiComponents/OtherServices';

const Logistics = () => {
  return (
    <>
      <Banner
        bannerImage={bannerImage}
        titleFirst="Logistics"
        titleSecond=""
        bannerDescription="Dubai, London, Tokyo, wherever life takes you next, we ensure you and your loved ones arrive with ease and feel at home from the very start."
        description="Almas Movers International is entirely based on the notion of serving expatriates and clients with its absolute services. We are a Qatar brand and are globally recognized. We are different from other moving companies as we believe in distinction, customer satisfaction, and customization."
        mainRoute="Home"
        subRoute="Logistics"
        subRoutePath="/logistics"
      />
      <section className="container-secondary mt-10">
        <OtherServices serviceType="Logistics" />
      </section>
      <section className="w-full bg-primary/10 mt-8 sm:mt-8 lg:mt-16">
        <div className="mx-auto w-full py-8 sm:py-12 md:py-16">
          <GetInTouchSection />
        </div>
      </section>
    </>
  );
};

export default Logistics;