import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../../assets/data/blogData"; // Adjusted path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Banner from "../../../components/Banner";

// Reuse truncateDescription from LatestUpdates.jsx
const truncateDescription = (text, wordLimit = 40) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = data.blogLists.find((blog) => blog.id === slug);
  const contentRef = useRef(null); // Ref for left content div
  const recentPostsRef = useRef(null); // Ref for Recent Posts div

  useEffect(() => {
    if (!contentRef.current || !recentPostsRef.current) return;

    // Check if screen is large enough for sticky behavior (lg: breakpoint)
    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
    if (!isLargeScreen) return;

    // Compare content and sidebar heights
    const contentHeight = contentRef.current.offsetHeight;
    const sidebarHeight = recentPostsRef.current.offsetHeight;
    if (contentHeight <= sidebarHeight) return; // Skip if content is shorter

    // Create a sentinel element at the bottom of the content
    const sentinel = document.createElement("div");
    sentinel.style.height = "1px";
    contentRef.current.appendChild(sentinel);

    // IntersectionObserver to detect when content bottom reaches viewport bottom
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Content bottom is visible, release sticky
          recentPostsRef.current.classList.add("non-sticky");
        } else {
          // Content bottom not visible, restore sticky
          recentPostsRef.current.classList.remove("non-sticky");
        }
      },
      {
        root: null, // Use viewport
        threshold: 0, // Trigger when sentinel is visible
        rootMargin: "0px 0px 0px 0px", // Align with viewport bottom
      }
    );

    observer.observe(sentinel);

    // Handle window resize to update heights
    const handleResize = () => {
      const newContentHeight = contentRef.current.offsetHeight;
      const newSidebarHeight = recentPostsRef.current.offsetHeight;
      if (newContentHeight <= newSidebarHeight) {
        recentPostsRef.current.classList.remove("non-sticky"); // Ensure sticky
        observer.unobserve(sentinel);
      } else {
        observer.observe(sentinel);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      observer.unobserve(sentinel);
      sentinel.remove();
      window.removeEventListener("resize", handleResize);
    };
  }, [slug]);

  if (!blog) {
    return (
      <div className="container mx-auto px-8 py-8 my-8 text-center">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
        <p className="mt-4 text-gray-700">
          The blog you are looking for does not exist.{" "}
          <Link to="/blogs" className="text-blue-500 underline">
            Return to Blogs
          </Link>
        </p>
      </div>
    );
  }

  // Split title for Banner
  const titleWords = blog.title.split(" ");
  const titleFirst = titleWords.slice(0, Math.ceil(titleWords.length / 2)).join(" ");
  const titleSecond = titleWords.slice(Math.ceil(titleWords.length / 2)).join(" ");

  // Calculate recent posts
  const currentIndex = data.blogLists.findIndex((post) => post.id === slug);
  const totalPosts = data.blogLists.length;
  const recentPostIndices = [
    (currentIndex + 1) % totalPosts,
    (currentIndex + 2) % totalPosts,
    (currentIndex - 1 + totalPosts) % totalPosts,
  ].filter((index) => index !== currentIndex && index >= 0 && index < totalPosts);

  const recentPosts = recentPostIndices
    .map((index) => data.blogLists[index])
    .filter((post) => post)
    .slice(0, 3);

  return (
    <>
      {/* Banner section */}
      <div className="w-full overflow-hidden relative">
        <Banner
          bannerImage={blog.image}
          titleFirst={titleFirst}
          titleSecond={titleSecond}
          mainRoute="Home"
          subRoute="Blogs"
          subRoutePath="/blogs"
          date={blog.date}
          time={blog.time}
          author={blog.author}
          showSocialIcons={true}
        />
      </div>

      <div className="container-primary mx-4 xs:mx-4 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0">
        <div className="my-8 text-center">
            <p
              className="text-lg font-bold p-8 bg-primary/30 rounded-lg"
              dangerouslySetInnerHTML={{ __html: blog.highlight }}
            />
        </div>
      </div>

      <div className="container-primary flex flex-col items-center mx-4 xs:mx-4 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Content with Scrollable Area */}
          <div
            ref={contentRef}
            className="lg:col-span-2 space-y-4 overflow-y-auto max-h-full pr-0 md:pr-4"
          >
            {blog.detail.content.map((block, index) => {
              switch (block.type) {
                case "image":
                  return (
                    <img
                      key={index}
                      src={block.src}
                      alt={block.alt}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  );
                case "text":
                  return (
                    <div key={index} className="space-y-4">
                      {block.title && (
                        <h2
                          className="text-lg md:text-lg lg:text-lg font-medium text-primary-two font-two"
                          dangerouslySetInnerHTML={{ __html: block.title }}
                        />
                      )}
                      {block.subtitle && (
                        <h6
                          className="text-md md:text-md lg:text-md font-medium text-primary-two font-two"
                          dangerouslySetInnerHTML={{ __html: block.subtitle }}
                        />
                      )}
                      {block.description && (
                        <p
                          className="text-primary-two text-md font-normal font-one"
                          dangerouslySetInnerHTML={{ __html: block.description }}
                        />
                      )}
                    </div>
                  );
                case "points":
                  return (
                    <div key={index} className="space-y-4">
                      {block.title && (
                        <h2
                          className="text-lg md:text-lg lg:text-lg font-medium text-primary-two font-two"
                          dangerouslySetInnerHTML={{ __html: block.title }}
                        />
                      )}
                      <ul className="list-disc list-inside">
                        {block.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="text-primary-two text-md font-normal font-one"
                            dangerouslySetInnerHTML={{ __html: point }}
                          />
                        ))}
                      </ul>
                    </div>
                  );
                case "table":
                  return (
                    <div key={index} className="overflow-hidden py-2">
                      <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                          <tr>
                            {block.headers.map((header, idx) => (
                              <th
                                key={idx}
                                className="font-two text-primary-two text-sm py-2 px-4 border-b border-r text-left"
                                dangerouslySetInnerHTML={{ __html: header }}
                              />
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.rows.map((row, rowIdx) => (
                            <tr key={rowIdx}>
                              {row.map((cell, cellIdx) => (
                                <td
                                  key={cellIdx}
                                  className="font-one text-primary-two text-sm py-2 px-4 border-b border-r"
                                  dangerouslySetInnerHTML={{ __html: cell }}
                                />
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Recent Posts - Sticky Sidebar */}
          <div
            ref={recentPostsRef}
            className="lg:col-span-1 bg-primary/30 rounded-lg p-4 sticky top-28 h-fit"
          >
            <h2 className="text-lg md:text-lg lg:text-lg text-gray-900">
              Recent Posts
            </h2>
            <div className="mt-4 space-y-3">
              {recentPosts.map((post) => (
                <div className="card recent-post-card rounded-lg" key={post.id}>
                  <div className="space-y-4 mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="rounded-lg w-full h-[250px] bg-cover object-cover shadow-inner"
                    />
                    <h2 className="text-lg md:text-lg lg:text-lg">
                      {post.title}
                    </h2>
                    <p className="font-one text-primary-six text-sm md:text-sm lg:text-sm font-light">
                      {truncateDescription(post.detail.content[0].description)}
                    </p>
                  </div>
                  <Link
                    to={`/blogs/${post.id}`}
                    className="inline-block items-center text-sm md:text-base font-one text-primary-six hover:text-primary-three transition-colors duration-300"
                  >
                    <span>Read More</span>
                    <span className="text-xs ml-2 relative top-[1px]">
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;