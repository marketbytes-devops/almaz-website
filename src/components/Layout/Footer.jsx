import React from "react";
import Logo from "../../assets/logo.webp";
import Icons from "../Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer
      className="-mt-4 lg:-mt-0 bg-gradient-to-r from-primary/80 to-secondaryGradient text-black pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-16 pb-0"
    >
      <style>
        {`
          .footer-column {
            align-items: flex-start;
          }
          .footer-column ul {
            text-align: left;
          }
          @media (max-width: 640px) {
            .footer-column {
              align-items: center !important;
              text-align: center !important;
            }
            .footer-column ul {
              text-align: center;
            }
            .social-icon-container {
              width: 32px !important;
              height: 32px !important;
            }
          }
          @media (min-width: 641px) and (max-width: 1024px) {
            .footer-column {
              align-items: flex-start;
            }
            .social-icon-container {
              width: 36px !important;
              height: 36px !important;
            }
          }
        `}
      </style>
      <div className="w-full mx-auto max-w-[90rem] flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row gap-6 sm:gap-8 md:gap-12">
        {/* Logo and Social Media */}
        <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center sm:items-start md:items-start footer-column">
          <img
            src={Logo}
            alt="Company Logo"
            className="h-16 sm:h-18 md:h-20 w-auto mb-6 sm:mb-8"
            loading="lazy"
          />
          <h3 className="text-base sm:text-lg md:text-lg font-bold mb-3 sm:mb-4">
            Connect
          </h3>
          <div className="flex space-x-2 sm:space-x-3">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <div className="w-8 sm:w-9 md:w-8 h-8 sm:h-9 md:h-8 bg-secondary rounded flex justify-center items-center social-icon-container">
                <Icons.Youtube className="text-black w-4 sm:w-5" />
              </div>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <div className="w-8 sm:w-9 md:w-8 h-8 sm:h-9 md:h-8 bg-secondary rounded flex justify-center items-center social-icon-container">
                <Icons.Facebook className="text-black w-4 sm:w-5" />
              </div>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <div className="w-8 sm:w-9 md:w-8 h-8 sm:h-9 md:h-8 bg-secondary rounded flex justify-center items-center social-icon-container">
                <Icons.Instagram className="text-black w-4 sm:w-5" />
              </div>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <div className="w-8 sm:w-9 md:w-8 h-8 sm:h-9 md:h-8 bg-secondary rounded flex justify-center items-center social-icon-container">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-black w-4 sm:w-5"
                  size="lg"
                />
              </div>
            </a>
          </div>
        </div>

        {/* Email and Phone */}
        <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center sm:items-start md:items-start footer-column">
          <h3 className="text-base sm:text-lg md:text-lg font-bold mb-3 sm:mb-4 pt-4">
            Email
          </h3>
          <p className="text-sm sm:text-base md:text-lg hover:text-primary transition-colors">
            movers@almasintl.com
          </p>
          <h3 className="text-base sm:text-lg md:text-lg font-bold mb-1 pt-6 sm:pt-8">
            Phone
          </h3>
          <p className="text-sm sm:text-base md:text-lg hover:text-primary transition-colors">
            +97444355663
          </p>
          <p className="text-sm sm:text-base md:text-lg hover:text-primary transition-colors">
            +97466404688
          </p>
        </div>

        {/* Location */}
        <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center sm:items-start md:items-start footer-column">
          <h3 className="text-base sm:text-lg md:text-lg font-bold mb-3 sm:mb-4 pt-4">
            Location
          </h3>
          <p className="text-sm sm:text-base md:text-lg">
            Near Hilal Government
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            Complex, Building No:
          </p>
          <p className="text-sm sm:text-base md:text-lg">242, Zone 25, Office 09,</p>
          <p className="text-sm sm:text-base md:text-lg">C-Ring Road, Doha-Qatar</p>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center sm:items-start md:items-start footer-column">
          <h3 className="text-base sm:text-lg md:text-lg font-bold mb-3 sm:mb-4 pt-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm sm:text-base md:text-lg">
            <li>
              <a
                href="/terms-and-conditions"
                className="hover:text-primary transition-colors"
                aria-label="Go to terms and conditions page"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-primary transition-colors"
                aria-label="Go to privacy policy page"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                className="hover:text-primary transition-colors"
                aria-label="Go to gallery page"
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border border-primary/20 max-w-[90rem] mx-auto mt-8 sm:mt-10 md:mt-12"></div>
      <div className="text-sm sm:text-base md:text-lg text-center py-6 sm:py-8 md:py-10">
        <p>
          © {currentYear} All rights reserved. Made by{" "}
          <span className="font-bold">MarketBytes WebWorks Pvt Ltd</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;