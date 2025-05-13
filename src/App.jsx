import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Moving from "./pages/Moving";
import Logistics from "./pages/Logistics";
import Tracking from "./pages/Tracking";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyAndPolicy/PrivacyAndPolicy";
import BlogDetail from "./pages/Blogs/BlogDetail";
import Gallery from "./pages/gallery";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> }, 
      { path: "/about-us", element: <AboutUs /> },
      { path: "/moving", element: <Moving /> },
      { path: "/logistics", element: <Logistics /> },
      { path: "/tracking", element: <Tracking /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blogs", element: <Blogs/>},
      { path: "/blogs/:slug", element: <BlogDetail/> },
      { path: "/terms-and-conditions", element: <TermsAndConditions/>},
      { path: "/privacy-policy", element: <PrivacyPolicy/>},
      { path: "/gallery", element: <Gallery/>},
       
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
