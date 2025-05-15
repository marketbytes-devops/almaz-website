import React from 'react';
import Banner from '../../components/Banner';
import bannerImage from '../../assets/moving/Movingbanner.webp';
import GetInTouchSection from '../Home/UiComponents/GetinTouch';
import OtherServices from '../UiComponents/OtherServices';

const Moving = () => {
  return (
    <>
      <Banner
        bannerImage={bannerImage}
        titleFirst="Moving"
        mainRoute="HOME"
        subRoute="MOVING"
        subRoutePath="/moving"
      />
      <section className="container-secondary mt-10">
        <OtherServices serviceType="Movers" />
      </section>
      <section className="w-full bg-primary/10 mt-8 sm:mt-8 lg:mt-16">
        <div className="mx-auto w-full py-8 sm:py-12 md:py-16">
          <GetInTouchSection />
        </div>
      </section>
    </>
  );
};

export default Moving;