import React from 'react';
import pic2 from '../../../../assets/moving/pic2.webp';
import tickImage from '../../../../assets/moving/yellowtick.svg'; 

const MakingInternationalMoves = () => {
  return (
    <div className="w-full font-sans bg-white">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 sm:gap-20">
         
          <div className="w-full">
            <img
              src={pic2}
              alt="International Moving"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          <div className="w-full self-start">
            <h2 className="text-2xl sm:text-3xl text-black sm:pt-6 pb-2 sm:pb-3 mb-4 sm:mb-6">
              Making international moves
              <br />
              seamless and stress free
            </h2>
            <p className="text-lg sm:text-xl text-black mb-4 sm:mb-6 mr-20">
              From the moment you reach out to Almas Movers International, our goal is to make your global move as smooth and stress-free as possible.
            </p>
            <ul className="space-y-2 sm:space-y-3 text-lg sm:text-xl text-black">
              <li className="flex items-start">
                <img src={tickImage} alt="Tick" className="mr-3 mt-1" />
                <span>Door to door service</span>
              </li>
              <li className="flex items-start">
                <img src={tickImage} alt="Tick" className="mr-3 mt-1" />
                <span>Professional packing service</span>
              </li>
              <li className="flex items-start">
                <img src={tickImage} alt="Tick" className="mr-3 mt-1" />
                <span>Long and short term storage</span>
              </li>
              <li className="flex items-start">
                <img src={tickImage} alt="Tick" className="mr-3 mt-1" />
                <span>Cost effective solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakingInternationalMoves;
