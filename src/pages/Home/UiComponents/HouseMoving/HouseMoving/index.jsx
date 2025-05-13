import React from "react";
import Banner from "../../../../../components/Banner";
import bannerImage from "../../../../../assets/international_relocation.webp";
import MakingInternationalMoves from "../../../UiComponents/MakeInternational";
import MakeanEnquiry from "../../../../Moving/UiComponents/MakeanEnquiry";
import OtherServices from "../../../../Moving/UiComponents/OtherServices";
import GetInTouchSection from "./../../GetinTouch";


 
const HouseMoving = () => {
  return (
    <>
      <Banner
        bannerImage={bannerImage}
        titleFirst="House"
        titleSecond="Moving"
        smallText="Dubai, London, Tokyo, wherever life takes you next, we ensure you and your loved ones arrive with ease and feel at home from the very start."
         
        description="Almas Movers Interenational is entirely based on the notion of serving expatriates and clients with its absolute services. We are a Qatar brand and are globally recognized . We are different from other moving companies as we believe in distinction, customer satisfaction and customization."
     
     
     
        mainRoute="HOME"
        subRoute="MOVING"
        subRoutePath="/moving"
      />
      <section className="container-secondary mt-16">
     
       <MakingInternationalMoves />
      </section>
      <section className="container-secondary mt-16">
       
        <MakeanEnquiry />
      </section>
      <section className="container-secondary mt-16">
       
        <OtherServices />
      </section>
     <section className="w-full bg-primary/10 mt-10 sm:mt-12 lg:mt-16">
        <div className="mx-auto w-full py-6 sm:py-12 md:py-16">
          <GetInTouchSection />
        </div>
        </section>
    </>
  );
};
 
export default HouseMoving;
 
 