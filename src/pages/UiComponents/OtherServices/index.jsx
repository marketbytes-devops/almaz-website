import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import pic4 from '../../../assets/moving/pic4.webp';
import pic5 from '../../../assets/moving/pic4.webp';
import pic3 from '../../../assets/moving/pic4.webp';
import Button from '../../../components/Button';

const servicesData = {
  Movers: [
    {
      image: pic4,
      title: 'House Moving',
      description: 'Our house moving service guarantees the safe and timely relocation of your belongings across Qatar. We take care of every step, ensuring a smooth and efficient move into your new home.',
    },
    {
      image: pic3,
      title: 'Office Relocation',
      description: 'Efficient office and commercial moving solutions with minimal disruption to your business. We handle furniture, equipment, and all logistics, ensuring a smooth transition to your new office space.',
    },
    {
      image: pic5,
      title: 'International Relocation',
      description: 'We offer seamless international relocation services, managing everything from packing to delivery, ensuring a stress-free transition to your new home or office, no matter the destination'
 ,
    },
    {
      image: pic4,
      title: 'Insurance',
      description: 'Comprehensive insurance coverage for all your belongings during a move, offering peace of mind. Whether moving locally or internationally, our tailored insurance plans protect your goods throughout the process.',
    },
  ],
  Logistics: [
    {
      image: pic4,
      title: 'Storage Services',
      description: 'Secure, clean, and spacious storage facilities for your personal or commercial needs. Our well-equipped storage units ensure your items are safely stored and easily accessible when needed.',
    },
    {
      image: pic3,
      title: 'Car Shipping Service',
      description: 'Need to ship your car overseas? Our reliable car shipping services offer pre-inspection, safe transport, and insurance to ensure your vehicle reaches its destination in perfect condition.',
    },
    {
      image: pic5,
      title: 'Air Freight',
      description: ' Our air freight service ensures your goods are delivered swiftly to international destinations. We handle everything from booking to customs clearance, ensuring timely arrivals.',
    },
    {
      image: pic4,
      title: 'Sea Freight',
      description: 'We offer comprehensive sea freight solutions for both large and small shipments. Our team manages everything from loading to customs clearance, ensuring smooth transit.',
    },
  ],
};

const OtherServices = ({ serviceType }) => {
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    if (tab === 'Movers') {
      navigate('/moving');
    } else if (tab === 'Logistics') {
      navigate('/logistics');
    }
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-center space-x-4">
        <Button
          label="Movers"
          onClick={() => handleTabClick('Movers')}
          className={`px-16 py-2 mb-6 rounded-full text-xl ${
            serviceType === 'Movers'
              ? 'bg-secondary text-black'
              : 'border-2 border-primary text-black'
          }`}
        />
        <Button
          label="Logistics"
          onClick={() => handleTabClick('Logistics')}
          className={`px-16 py-2 mb-6 rounded-full text-xl ${
            serviceType === 'Logistics'
              ? 'bg-secondary text-black'
              : 'border-2 border-primary text-black'
          }`}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
        {servicesData[serviceType].map((service, index) => (
          <div key={index} className="flex flex-col items-left">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-left text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4"></div>
    </div>
  );
};

export default OtherServices;