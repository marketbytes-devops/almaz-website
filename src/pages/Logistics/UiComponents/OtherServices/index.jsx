import React, { useState } from 'react';
import pic4 from '../../../../assets/moving/pic4.webp';
import pic5 from '../../../../assets/moving/pic5.webp';
import pic3 from '../../../../assets/moving/pic3.webp';
import TitleDescription from '../../../../components/TitleDescription';
import Icons from '../../../../components/Icons';
 
 
const Button = ({ label, icon, className = "text-black px-4 py-2", onClick }) => {
  const [ripples, setRipples] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
 
  const createRipple = (event) => {
    if (isHovering) return;
    setIsHovering(true);
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
 
    const newRipple = {
      id: Date.now(),
      x,
      y,
      size,
    };
 
    setRipples([newRipple]);
  };
 
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRipples([]);
  };
 
  return (
    <button
      className={`relative flex items-center justify-center gap-2 text-black ${className} overflow-hidden pointer-events-auto`}
      onMouseEnter={createRipple}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <span className="relative z-20 flex items-center gap-2">
        {label}
        {icon === 'ArrowUpRight' && <Icons.ArrowUpRight className="h-5 w-auto" />}
      </span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-primary rounded-full animate-ripple-persist z-10"
          style={{
            width: ripple.size,
            height: ripple.size,
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </button>
  );
};
 
 
const OtherServices = () => {
  const [activeTab, setActiveTab] = useState('Movers');
 
  return (
    <div className="">
 
      <div className="flex justify-center space-x-4 ">
        <Button
          label="Movers"
          onClick={() => setActiveTab('Movers')}
          className={`px-16 py-2 mb-6 rounded-full text-xl ${
            activeTab === 'Movers'
              ? ' bg-secondary text-black'
              : 'border-2 border-primary text-black'
          }`}
        />
        <Button
          label="Logistics"
          onClick={() => setActiveTab('Logistics')}
          className={`px-16 py-2 mb-6 rounded-full text-xl ${
            activeTab === 'Logistics'
              ? ' bg-secondary text-black'
              : 'border-2 border-primary text-black'
          }`}
        />
      </div>
 
   
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-7">  
        <div className="flex flex-col items-left">
          <img
            src={pic4}
            alt="Service 1"
            className="w-full h-55 object-cover rounded-lg mb-4"
          />
          <h3 className="text-left text-lg font-semibold text-gray-800 mb-2">
            {activeTab === 'Movers' ? 'House Moving' : 'Warehouse Logistics'}
          </h3>
          <p className="text-gray-600">
            {activeTab === 'Movers'
              ? 'Seamlessly moving your home with care and precision.'
              : 'Efficient warehouse management for your business needs.'}
          </p>
        </div>
 
     
        <div className="flex flex-col items-left">
          <img
            src={pic3}
            alt="Service 2"
            className="w-full h-55 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {activeTab === 'Movers' ? 'Office Relocation' : 'Freight Forwarding'}
          </h3>
          <p className="text-gray-600">
            {activeTab === 'Movers'
              ? 'Hassle-free office relocation with minimal downtime.'
              : 'Reliable freight forwarding for global shipments.'}
          </p>
        </div>
 
       
        <div className="flex flex-col items-left">
          <img
            src={pic5}
            alt="Service 3"
            className="w-full h-55 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {activeTab === 'Movers' ? 'International Relocation' : 'Last Mile Delivery'}
          </h3>
          <p className="text-gray-600">
            {activeTab === 'Movers'
              ? 'Safe and secure vehicle relocation services.'
              : 'Fast and reliable last-mile delivery solutions.'}
          </p>
        </div>
 
       
        <div className="flex flex-col items-left">
          <img
            src={pic4}
            alt="Service 4"
            className="w-full h-55 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {activeTab === 'Movers' ? 'Insurance' : 'Supply Chain Solutions'}
          </h3>
          <p className="text-gray-600 text-base">
            {activeTab === 'Movers'
              ? 'Expert handling of your furniture with utmost care.'
              : 'Streamlined supply chain solutions for efficiency.'}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
 
</div>
    </div>
   
  );
};
 
export default OtherServices;