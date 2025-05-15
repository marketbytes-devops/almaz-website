import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import serviceData from "../../assets/data/serviceData";
import OurServices from "../Home/UiComponents/OurServices";

const Services = () => {
  const { slug } = useParams();
  const service = serviceData.find(
    (item) => item.slug === `/services/${slug}`
  );

  if (!service) {
    return (
      <div className="w-full py-8 bg-white text-center">
        <h2 className="text-3xl text-black">Service Not Found</h2>
        <p className="mt-4 text-gray-600">
          The service you're looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full">
        <Banner
          bannerImage={service.bannerImage}
          titleFirst={service.title}
          mainRoute="Home"
          subRoute={service.title}
          subRoutePath={`/services/${slug}`}
          onError={() => console.log(`Failed to load banner image: ${service.title}`)}
        />

        <div className="container-secondary our-services pl-10 sm:pl-20 md:pl-40 mt-0 sm:mt-0 lg:mt-16">
          <div className="mt-8">
            <h3 className="text-2xl text-black mb-4">About This Service</h3>
            <p className="text-base text-gray-700 mb-6">
              {service.detailedDescription}
            </p>
            <h3 className="text-2xl text-black mb-4">Key Features</h3>
            <ul className="list-disc pl-6 text-base text-gray-700">
              {service.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section className="container-secondary our-services pl-10 sm:pl-20 md:pl-40 mt-0 sm:mt-0 lg:mt-16">
        <OurServices currentSlug={slug} />
      </section>
    </>
  );
};

export default Services;