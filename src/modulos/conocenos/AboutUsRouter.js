import React from "react";
import AboutFooter from "./components/AboutFooter";
import DpiHeader from "../dpi/components/DpiHeader";
import AboutImg from "./components/AboutImg";
import AboutMisionVision from "./components/AboutMisionVision";
import AboutTitle from "./components/AboutTitle";

const AboutUsRouter = () => {
  return (
    <>
      <DpiHeader />
      <AboutTitle /> 
      <main id="main">
       <AboutImg />
       <AboutMisionVision /> 
      </main>
      <AboutFooter />
    </>
  );
};

export default AboutUsRouter;
