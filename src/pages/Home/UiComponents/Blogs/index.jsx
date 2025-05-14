import Blog from "../../../../assets/blog.webp";
import MovingBoxes1 from "../../../../assets/blogbox.webp";
import MovingBoxes2 from "../../../../assets/blogNews.webp";
import MovingBoxes3 from "../../../../assets/blogArticle.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import TitleDescription from "../../../../components/TitleDescription";

const BlogSection = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto">

        <div className="flex justify-between items-center mb-6">
          <TitleDescription
            title="Latest News and Articles"
            titleClass="text-3xl text-black"
          />
          <button
            className="text-black hover:text-primary transition-all duration-300 text-sm sm:text-base flex items-center"
          >
            View All
            <FontAwesomeIcon
              icon={faChevronRight}
              className="ml-2 text-sm sm:text-base"
            />
          </button>
        </div>


        <div className="flex flex-col md:flex-row gap-8">

          <div className="w-full md:w-1/2 flex flex-col">
            <img
              src={Blog}
              alt="Blog featured image"
              className="object-cover w-full h-60 rounded-2xl mb-4"
            />
            <TitleDescription
              description="Moving made easy with Qatar's most trusted relocation experts"
              descriptionClass="text-2xl font-medium text-black mb-2"
            />
            <p className="text-gray-600 px-3.5 lg:px-0">
              Delivering excellence to our clients, ready to do the same for you
            </p>
            <p className="text-gray-600 font-medium px-3.5 lg:px-0 pt-2">
              16 Dec 2024
            </p>
          </div>


          <div className="w-full md:w-1/2 flex flex-col ">
            {[
              {
                img: MovingBoxes1,
                alt: "Eco-friendly packing solutions",
                type: "Article",
                title: "Almas Movers Launches Eco-friendly Packing Solutions",
              },
              {
                img: MovingBoxes2,
                alt: "Best relocation service award",
                type: "News",
                title: "Almas Movers Receives 'Best Relocation Service' Award"
              },
              {
                img: MovingBoxes3,
                alt: "Tips for stress-free moving",
                type: "Article",
                title: "Top 5 Tips for a Stress-Free Move with Almas Movers",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="rounded-xl flex flex-col sm:flex-row items-center"
              >
                <div className="w-full sm:w-1/3 sm:mr-4 mb-8 mt-8 sm:mt-8 md:mt-0 lg:mt-0 xl:mt-0">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="w-full h-24 object-cover rounded-xl"
                  />
                </div>
                <div className="w-full sm:w-2/3">
                  <h3 className="text-lg text-secondary mt-[-8]">{card.type}</h3>
                  <p className="text-black text-md font-semibold mb-2">{card.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;