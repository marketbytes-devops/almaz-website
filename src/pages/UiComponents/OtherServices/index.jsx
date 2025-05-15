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
      description: 'Seamlessly moving your home with care and precision.',
    },
    {
      image: pic3,
      title: 'Office Relocation',
      description: 'Hassle-free office relocation with minimal downtime.',
    },
    {
      image: pic5,
      title: 'International Relocation',
      description: 'Safe and secure international relocation services.',
    },
    {
      image: pic4,
      title: 'Insurance',
      description: 'Comprehensive insurance for your peace of mind.',
    },
  ],
  Logistics: [
    {
      image: pic4,
      title: 'Warehouse Logistics',
      description: 'Efficient warehouse management for your business needs.',
    },
    {
      image: pic3,
      title: 'Freight Forwarding',
      description: 'Reliable freight forwarding for global shipments.',
    },
    {
      image: pic5,
      title: 'Last Mile Delivery',
      description: 'Fast and reliable last-mile delivery solutions.',
    },
    {
      image: pic4,
      title: 'Supply Chain Solutions',
      description: 'Streamlined supply chain solutions for efficiency.',
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

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-7">
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
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4"></div>
    </div>
  );
};

export default OtherServices;