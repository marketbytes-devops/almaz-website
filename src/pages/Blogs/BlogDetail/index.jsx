import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../../assets/data/blogData';
import Banner from '../../../components/Banner';
import ScrollMagic from 'scrollmagic';
import { gsap } from 'gsap';


const truncateDescription = (text, wordLimit = 40) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = data.blogLists.find((blog) => blog.id === slug);
  const controllerRef = useRef(null); 

  useEffect(() => {

    controllerRef.current = new ScrollMagic.Controller();

    // Animate blog content blocks
    const contentBlocks = document.querySelectorAll('.blog-content-block');
    contentBlocks.forEach((block, index) => {
      gsap.set(block, { opacity: 0, y: 50 }); // Initial state
      new ScrollMagic.Scene({
        triggerElement: block,
        triggerHook: 0.8, // Trigger when element is 80% from top of viewport
        reverse: false, // Only animate once
      })
        .setTween(
          gsap.to(block, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            delay: index * 0.2, // Staggered animation
          })
        )
        .addTo(controllerRef.current);
    });

    // Animate recent posts
    const recentPosts = document.querySelectorAll('.recent-post-card');
    recentPosts.forEach((post, index) => {
      gsap.set(post, { opacity: 0, x: 50 }); // Initial state
      new ScrollMagic.Scene({
        triggerElement: post,
        triggerHook: 0.8,
        reverse: false,
      })
        .setTween(
          gsap.to(post, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
            delay: index * 0.2,
          })
        )
        .addTo(controllerRef.current);
    });

    // Cleanup on unmount
    return () => {
      if (controllerRef.current) {
        controllerRef.current.destroy(true);
        controllerRef.current = null;
      }
    };
  }, [slug]); // Re-run effect when slug changes

  if (!blog) {
    return (
      <div className="container mx-auto px-8 py-8 my-8 text-center">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
        <p className="mt-4 text-gray-700">
          The blog you are looking for does not exist.{' '}
          <Link to="/blogs" className="text-primary underline">
            Return to Blogs
          </Link>
        </p>
      </div>
    );
  }

  const currentIndex = data.blogLists.findIndex((post) => post.id === slug);
  const totalPosts = data.blogLists.length;

  // Calculate recent post indices
  const recentPostIndices = [
    (currentIndex + 1) % totalPosts,
    (currentIndex - 1 + totalPosts) % totalPosts,
    (currentIndex + 2) % totalPosts,
  ].filter((index) => index !== currentIndex);

  const recentPosts = recentPostIndices
    .map((index) => data.blogLists[index])
    .filter((post, idx, self) => post && self.findIndex((p) => p.id === post.id) === idx)
    .slice(0, 3);

  const titleWords = blog.title.split(' ');
  const titleFirst = titleWords.slice(0, Math.ceil(titleWords.length / 2)).join(' ');
  const titleSecond = titleWords.slice(Math.ceil(titleWords.length / 2)).join(' ');

  return (
    <>
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

      <div className="mt-5 mx-auto container-primary pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full h-full">
          <div className="lg:col-span-2 space-y-4 overflow-y-auto max-h-full pr-0 md:pr-4">
            {blog.detail.content.map((block, index) => (
              <div key={index} className="blog-content-block">
                {block.type === 'image' && (
                  <img
                    src={block.src}
                    alt={block.alt}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                )}
                {block.type === 'text' && (
                  <div className="space-y-4">
                    {block.title && (
                      <h2
                        className="text-lg md:text-lg lg:text-lg font-medium text-gray-800 font-sans"
                        dangerouslySetInnerHTML={{ __html: block.title }}
                      />
                    )}
                    {block.subtitle && (
                      <h6
                        className="text-md md:text-md lg:text-md font-medium text-gray-800 font-sans"
                        dangerouslySetInnerHTML={{ __html: block.subtitle }}
                      />
                    )}
                    <p
                      className="text-gray-700 text-md font-normal font-sans"
                      dangerouslySetInnerHTML={{ __html: block.description }}
                    />
                  </div>
                )}
                {block.type === 'points' && (
                  <div className="space-y-4">
                    {block.title && (
                      <h2
                        className="text-lg md:text-lg lg:text-lg font-medium text-gray-800 font-sans"
                        dangerouslySetInnerHTML={{ __html: block.title }}
                      />
                    )}
                    <ul className="list-disc list-inside">
                      {block.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-gray-700 text-md font-normal font-sans"
                          dangerouslySetInnerHTML={{ __html: point }}
                        />
                      ))}
                    </ul>
                  </div>
                )}
                {block.type === 'table' && (
                  <div className="overflow-hidden py-2">
                    <table className="min-w-full bg-white border border-gray-300">
                      <thead>
                        <tr>
                          {block.headers.map((header, idx) => (
                            <th
                              key={idx}
                              className="font-sans text-gray-800 text-sm py-2 px-4 border-b border-r text-left"
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
                                className="font-sans text-gray-700 text-sm py-2 px-4 border-b border-r"
                                dangerouslySetInnerHTML={{ __html: cell }}
                              />
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="lg:col-span-1 bg-gray-100 rounded-lg p-4 sticky top-28 h-auto overflow-hidden">
            <h2 className="text-lg md:text-lg lg:text-lg font-bold text-primary font-sans">Recent Posts</h2>
            <div className="mt-4 space-y-3">
              {recentPosts.map((post) => (
                <div className="card recent-post-card rounded-lg" key={post.id}>
                  <div className="space-y-4 mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="rounded-lg w-full h-[250px] bg-cover object-cover shadow-inner"
                    />
                    <h2 className="text-lg md:text-lg lg:text-lg font-medium text-primary font-sans">{post.title}</h2>
                    <p className="font-sans text-gray-600 text-sm md:text-sm lg:text-sm font-light">{truncateDescription(post.detail.content[0].description)}</p>
                  </div>
                  <Link
                    to={`/blogs/${post.id}`}
                    className="inline-block items-center text-sm md:text-base font-sans text-primary hover:text-secondary transition-colors duration-300"
                  >
                    <span>Learn More</span>
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