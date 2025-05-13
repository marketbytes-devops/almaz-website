import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button";
import Logo from "../../assets/logo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/moving", label: "Moving" },
    { to: "/logistics", label: "Logistics" },
    { to: "/tracking", label: "Tracking" },
    { to: "/blogs", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <div className="flex items-center justify-center">
      <motion.nav
        className="bg-primary shadow-lg fixed z-50"
        animate={{
          top: isScrolled ? 0 : 50,
          width: isScrolled ? "94%" : ["94%", "94%", "94%", "94%"],
          borderTopRightRadius: isScrolled ? 0 : [0, 12, 16, 16],
          borderTopLeftRadius: isScrolled ? 0 : [0, 12, 16, 16],
          borderBottomRightRadius: isScrolled ? [0, 12, 16, 16] : 0,
          borderBottomLeftRadius: isScrolled ? [0, 12, 16, 16] : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewport={{ amount: "all" }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex-shrink-0">
              <img
                src={Logo}
                alt="Company Logo"
                className="h-8 w-auto sm:h-9 md:h-10"
              />
            </div>

            <div className="hidden lg:flex items-center space-x-6 lg:space-x-8 py-2.5 px-8 lg:px-10 rounded-[20px] border-2 border-gray-300 bg-white/20">
              <ul className="flex space-x-4 lg:space-x-6">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.to}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.to}
                      className={`text-sm lg:text-base font-medium transition-colors duration-300 ${
                        location.pathname === link.to
                          ? "text-secondary"
                          : "text-gray-50 hover:text-secondary"
                      }`}
                      aria-label={`Navigate to ${link.label}`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:flex pr-6 lg:pr-8">
              <Button
                label="Get a quote"
                icon="ArrowUpRight"
                className="bg-secondary text-black rounded-2xl px-4 py-3 text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300 ripple-button"
              />
            </div>

            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-50 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary rounded-md p-2"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden fixed top-0 left-0 w-full h-screen bg-primary/95 backdrop-blur-md z-40 shadow-md flex flex-col"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-end p-2">
                <button
                  onClick={toggleMenu}
                  className="text-gray-50 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary rounded-md p-2"
                  aria-label="Close navigation menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col space-y-2 px-4 py-2 flex-grow" role="navigation">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.to}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      to={link.to}
                      className={`text-base font-medium transition-colors duration-300 rounded-md hover:bg-white/10 block px-3 py-1.5 ${
                        location.pathname === link.to
                          ? "text-secondary"
                          : "text-gray-50 hover:text-secondary"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      aria-label={`Navigate to ${link.label}`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-4"
                >
                  <Button
                    label="Get a quote"
                    icon="ArrowUpRight"
                    className="bg-secondary text-black rounded-2xl px-4 py-2 text-base hover:bg-white hover:text-gray-900 transition-colors duration-300 ripple-button"
                  />
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <style>
        {`
          .ripple-button {
            position: relative;
            overflow: hidden;
          }

          .ripple-button::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.4s ease, height 0.4s ease;
            pointer-events: none;
          }

          .ripple-button:hover::after {
            width: 200%;
            height: 200%;
          }

          @media (max-width: 639px) {
            .container {
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
            nav {
              width: 100%;
              top: 15px !important; 
              border-radius: 0;
            }
            .h-14 {
              height: 3.5rem;
            }
          }

          @media (min-width: 640px) and (max-width: 767px) {
            .container {
              padding-left: 1rem;
              padding-right: 1rem;
            }
            nav {
              width: 100%;
              top: 20px !important; /* Force navbar to top on mobile */
            }
          }

          @media (min-width: 768px) and (max-width: 1023px) {
            .container {
              padding-left: 1.5rem;
              padding-right: 1.5rem;
            }
            nav {
              width: 100%;
              top: 25px !important; /* Force navbar to top on tablet */
            }
          }

          @media (min-width: 1024px) and (max-width: 1279px) {
            .container {
              padding-left: 2rem;
              padding-right: 2rem;
            }
            nav {
              width: 93.5%;
            }
          }

          @media (min-width: 1280px) {
            .container {
              padding-left: 6.5rem;
              padding-right: 4.5rem;
            }
            nav {
              width: 93.5%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;