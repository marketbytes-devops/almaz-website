import React, { useState } from 'react';
import image1 from '../../assets/gallery/img1.webp';
import image2 from '../../assets/gallery/img2.webp';
import image3 from '../../assets/gallery/img3.webp';
import image4 from '../../assets/gallery/img4.webp';
import image5 from '../../assets/gallery/img5.webp';
import image6 from '../../assets/gallery/img6.webp';
import image7 from '../../assets/gallery/img7.webp';
import image8 from '../../assets/gallery/pic2.webp';
import image9 from '../../assets/gallery/pic3.webp';
import image10 from '../../assets/gallery/pic4.webp';
import image11 from '../../assets/gallery/pic5.webp';
import image12 from '../../assets/gallery/Air-freight.webp';
import image13 from '../../assets/gallery/blogArticle.webp';

const Gallery = () => {
  
  const tabs = [
    {
      name: 'Movers',
      images: [
       image1,  
        image2,  
       image3,
       image4  
        
      ],
    },
    {
      name: 'Logistics',
      images: [
        image5,
        image6,
        image7    
        
      ],
    },
    {
      name: 'Warehousing',
      images: [
        image6, 
        image8,
        image9,
       
      ],
    },
    {
      name: 'Team',
      images: [
image7, 
image10,
image11,
image12,
image13 ,  
        
      ],
    },
  ];

  
  const [activeTab, setActiveTab] = useState(tabs[0].name);


  const activeImages = tabs.find((tab) => tab.name === activeTab).images;

  return (
    <div className="max-w-[90%] mx-auto py-16 px-4 text-black">
      <h1 className="text-3xl font-bold mb-8 text-center">Gallery</h1>

     
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.name
                  ? 'bg-primary text-white'
                  : 'bg-transparent text-black hover:bg-gray-200'
              }`}
              aria-label={`View ${tab.name} gallery`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activeImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={image}
              alt={`${activeTab} image ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;