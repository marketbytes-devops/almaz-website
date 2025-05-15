import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Banner = ({
  bannerImage,
  titleFirst,
  titleSecond,
  smallText,
  mainRoute,
  subRoute,
  subRoutePath,
  date,
  time,
  author,
  showSocialIcons = false,
}) => {
  const location = useLocation();

  return (
    <div className="container-primary w-full">
      <div
        className="relative w-full min-h-[300px] lg:min-h-[500px] bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-2 sm:px-3"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
        }}
      >
        <motion.div
          className="relative -top-4 sm:-top-4 md:-top-0 lg:-top-0 xl:-top-0 z-20 max-w-5xl mx-auto "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl banner-title text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            <span className="text-secondary">{titleFirst}</span>{" "}
            <span className="text-white">{titleSecond}</span>
          </motion.h1>
          {smallText && (
            <motion.p
              className="text-gray-700 mt-4 max-w-3xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
            >
              {smallText}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          className="absolute bottom-0 w-full py-4"
          style={{
            background:
              "linear-gradient(to right, rgba(100, 100, 100, 0.7), rgba(150, 150, 150, 0.7))",
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
          }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 banner-breadcrumbs text-sm sm:text-base">
            <Link
              to="/"
              className="text-gray-100 hover:text-secondary transition-colors duration-300"
              aria-label={`Navigate to ${mainRoute}`}
            >
              {mainRoute}
            </Link>
            <span className="mx-1 text-secondary">/</span>
            <Link
              to={subRoutePath}
              className={`transition-colors duration-300 ${
                location.pathname === subRoutePath
                  ? "text-secondary"
                  : "text-gray-100 hover:text-secondary"
              }`}
              aria-label={`Navigate to ${subRoute}`}
            >
              {subRoute}
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-14 lg:bottom-4 left-2 lg:left-8 flex gap-2 md:gap-4 lg:gap-4 xl:gap-4 z-20 banner-meta text-xs lg:text-sm text-white"
          animate={{ opacity: 1, y: 0 }}
        >
          {author && <span>By {author}</span>}
          {author && (date || time) && <span> | </span>}
          {date && <span>{date}</span>}
          {date && time && <span> | </span>}
          {time && <span>{time}</span>}
        </motion.div>
        {showSocialIcons && (
          <motion.div
            className="absolute bottom-14 lg:bottom-4 right-2 lg:right-8 flex gap-4 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} size="md" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faTwitter} size="md" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="md" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="md" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faYoutube} size="md" />
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Banner;