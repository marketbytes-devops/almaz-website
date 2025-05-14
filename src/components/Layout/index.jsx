import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };
    scrollToTop();
    const timeout = setTimeout(scrollToTop, 0);
    return () => clearTimeout(timeout);
  }, [location]);
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="main-content mt-16">
        <Outlet />
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
