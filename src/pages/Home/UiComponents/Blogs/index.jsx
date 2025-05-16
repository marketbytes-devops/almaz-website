import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import TitleDescription from "../../../../components/TitleDescription";
import { useNavigate } from "react-router-dom";
import { data } from "../../../../assets/data/blogData";

const BlogSection = () => {
  const navigate = useNavigate();
  const latestBlogs = data.blogLists.slice(0, 4);

  return (
    <div className="bg-white">
      <div className="mx-auto">
        <div className="flex justify-center lg:justify-between items-center mb-6">
          <TitleDescription
            title="Latest News and Articles"
            titleClass="text-3xl text-black mb-2"
          />
          <button
            className="hidden lg:flex items-center text-black hover:text-primary transition-all duration-300 text-sm sm:text-base"
            onClick={() => navigate("/blogs")}
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
              src={latestBlogs[0].image}
              alt={latestBlogs[0].title}
              className="object-cover w-full h-60 rounded-2xl mb-4"
            />
            <p className="text-2xl font-medium text-black mb-2">
              {latestBlogs[0].title}
            </p>
            <p className="text-gray-600">{latestBlogs[0].highlight}</p>
            <p className="text-gray-600 font-medium pt-2">
              {latestBlogs[0].date}
            </p>
          </div>

          {/* Other Blogs (Next 3 Blogs) */}
          <div className="w-full md:w-1/2 flex flex-col">
            {latestBlogs.slice(1, 4).map((blog, index) => (
              <div
                key={index}
                className="rounded-xl flex flex-col sm:flex-row items-center mb-8"
              >
                <div className="w-full sm:w-1/3 sm:mr-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-24 object-cover rounded-xl"
                  />
                </div>
                <div className="w-full sm:w-2/3">
                  <h3 className="text-lg text-secondary mt-[-8]">
                    {blog.detail.content[0].type === "text" ? "Article" : "News"}
                  </h3>
                  <p className="text-black text-md font-semibold mb-2">
                    {blog.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-2 lg:hidden flex items-center justify-center">
        <button
          className="text-gray-800 hover:text-primary transition-all duration-300 text-sm sm:text-base font-medium mt-2 sm:mt-0"
          onClick={() => navigate("/blogs")}
        >
          View all
          <FontAwesomeIcon
            icon={faChevronRight}
            className="ml-2 text-sm sm:text-base"
          />
        </button>
      </div>
    </div>
  );
};

export default BlogSection;