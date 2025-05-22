import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import serviceData from "../../assets/data/serviceData";
import OurServices from "../Home/UiComponents/OurServices";
import TickIcon from "../../assets/moving/yellowtick.svg";

const Services = () => {
  const { slug } = useParams();
  const service = serviceData.find(
    (item) => item.slug === `/services/${slug}`
  );

  // Default SEO data for the specific slug or fallback
  const seoData = {
    metaTitle: service?.metaTitle || (slug === "top-tips-stress-free-international-move" 
      ? "Top Tips for a Stress-Free International Move | Almas Movers International" 
      : "Our Services | Almas Movers International"),
    metaDescription: service?.metaDescription || (slug === "top-tips-stress-free-international-move" 
      ? "Moving internationally? Discover essential tips for a stress-free relocation, from hiring professionals to managing your finances and settling in. Start your smooth journey with Almas Movers." 
      : "Explore our professional moving and relocation services designed to make your move seamless and stress-free with Almas Movers International."),
    keywords: service?.keywords || (slug === "top-tips-stress-free-international-move" 
      ? "Stress-Free International Move, International relocation, moving abroad, international moving tips, relocation services, packing for international move, international relocation tips, moving overseas, international moving company" 
      : "moving services, relocation services, international moving, Almas Movers"),
  };

  if (!service) {
    return (
      <div className="w-full py-8 bg-white text-center min-h-[400px]">
        <Helmet>
          <title>Service Not Found | Almas Movers International</title>
          <meta name="description" content="The service you're looking for does not exist. Explore our other moving and relocation services at Almas Movers International." />
          <meta name="keywords" content="moving services, relocation services, Almas Movers" />
        </Helmet>
        <h2 className="text-3xl font-bold text-black">Service Not Found</h2>
        <p className="mt-4 text-gray-600 text-lg">
          The service you're looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>{seoData.metaTitle}</title>
        <meta name="description" content={seoData.metaDescription} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={`https://www.almasmovers.com/services/${slug}`} />
      </Helmet>
      <Banner
        bannerImage={service.bannerImage}
        titleFirst={service.title}
        mainRoute="Home"
        smallText={service.bannerDescription}
        subRoute={service.title}
        subRoutePath={`/services/${slug}`}
        onError={() => console.log(`Failed to load banner image: ${service.title}`)}
      />

      <div className="container-secondary pl-4 sm:pl-8 md:pl-16 lg:pl-40 mt-8 lg:mt-16">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
            <div className="w-full">
              <img
                src={service.featureImage}
                alt={service.title}
                className="w-full h-auto rounded-lg object-cover max-h-[500px]"
                onError={() => console.log(`Failed to load feature image: ${service.title}`)}
              />
            </div>
            <div className="w-full self-start">
              <h2 className="text-3xl pt-0 md:pt-6 pb-0 sm:pb-0 md:pb-3 lg:pb-3 mb-4 sm:mb-4 lg:mb-2">
                {service.featureTitle}
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 pr-0 md:pr-20">
                {service.featureDescription}
              </p>
              <ul className="space-y-3 text-lg text-gray-800">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <img 
                      src={TickIcon} 
                      alt="Check mark" 
                      className="mr-3 mt-1 w-5 h-5 flex-shrink-0" 
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="container-secondary -mt-2 sm:-mt-2 lg:-mt-0 md:-mt-0 xl:-mt-0 -mb-16 sm:-mb-16 lg:-mb-0">
        <OurServices currentSlug={slug} />
      </section>
    </div>
  );
};

export default Services;