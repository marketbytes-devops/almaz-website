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
        className="relative w-full min-h-[500px] bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-4 sm:px-6"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
        }}
      >
        <motion.div
          className="relative z-20 max-w-5xl mx-auto pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl"
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
              className="text-sm sm:text-sm text-white mt-4 max-w-3xl"
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
          className="absolute bottom-0 w-full py-4 "
          style={{
            background: 'linear-gradient(to right, rgba(100, 100, 100, 0.7), rgba(150, 150, 150, 0.7))',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
          }}
         
          animate={{ opacity: 1, y: 0 }}
          
        >
          <div className="flex justify-center gap-3">
            <Link
              to="/"
              className="text-md sm:text-md text-gray-100 cursor-pointer"
              style={{ textDecoration: 'none' }}
            >
              {mainRoute}
            </Link>
            <div>
              <span className="text-sm sm:text-sm mx-2">/</span>
            </div>
            <Link
              to={subRoutePath}
              className="text-sm sm:text-sm cursor-pointer"
              style={{
                textDecoration: "none",
                color: location.pathname === subRoutePath ? "#FFC107" : "white",
              }}
            >
              {subRoute}
            </Link>
          </div>
        </motion.div>
 
        <motion.div
          className="absolute bottom-4 left-8 flex gap-4 z-20 text-sm sm:text-sm text-white"
         
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
            className="absolute bottom-4 right-8 flex gap-4 z-20"
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
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};
 
export default Banner;
 