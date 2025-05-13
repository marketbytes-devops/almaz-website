import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
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
