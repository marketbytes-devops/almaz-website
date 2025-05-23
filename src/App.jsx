import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Service from "./pages/Home/UiComponents/Service";
import AboutUs from "./pages/AboutUs";
import Moving from "./pages/Moving";
import Logistics from "./pages/Logistics";
import Tracking from "./pages/Tracking";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyAndPolicy/PrivacyAndPolicy";
import BlogDetail from "./pages/Blogs/BlogDetail";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound"; 
import ThankYou from "./pages/ThankYou";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/service", element: <Service /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/moving", element: <Moving /> },
      { path: "/logistics", element: <Logistics /> },
      { path: "/track", element: <Tracking /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:slug", element: <BlogDetail /> },
      { path: "/terms-and-conditions", element: <TermsAndConditions /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/services/:slug", element: <Services /> },
    ],
  },
  { path: "/thank-you", element: <ThankYou /> },
  {
    path: "*", 
    element: <NotFound />,
  },
]);

function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
      <RouterProvider router={router} />
    </GoogleReCaptchaProvider>
  );
}

export default App;