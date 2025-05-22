import React from 'react';
import Banner from '../../../../components/Banner';
import bannerImage from '../../../../assets/moving/Movingbanner.webp';
import GetInTouchSection from '../../../Home/UiComponents/GetinTouch';
import OtherServices from '../../../UiComponents/OtherServices';

const service = () => {
  return (
    <>
      <Banner
        bannerImage={bannerImage}
        titleFirst="Service"
        mainRoute="HOME"
        subRoute="SERVICE"
        subRoutePath="/service"
      />
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

export default service;