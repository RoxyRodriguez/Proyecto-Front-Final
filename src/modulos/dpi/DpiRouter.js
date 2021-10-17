import React from "react";
import DpiCardsInformation from "./components/DpiCardsInformation";
import DpiCta from "./components/DpiCta";
import DpiFooter from "./components/DpiFooter";
import DpiGallery from "./components/DpiGallery";
import DpiHeader from "./components/DpiHeader";
import DpiServices from "./components/DpiServices";
import DpiSlider from "./components/DpiSlider";
import DpiWelcome from "./components/DpiWelcome";
import DpiWhyChoose from "./components/DpiWhyChoose";

const DpiRouter = () => {
  return (
    <>
      <DpiHeader />
      <DpiSlider />
      <main id="main">
        <DpiCardsInformation />
        <DpiWelcome />
        <DpiCta />
        <DpiWhyChoose />
        <DpiServices />
        <DpiGallery />
      </main>
      <DpiFooter />
    </>
  );
};

export default DpiRouter;
