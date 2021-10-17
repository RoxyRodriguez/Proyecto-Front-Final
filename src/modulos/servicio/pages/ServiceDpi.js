import React from "react";
import ServiceDescription from "../components/ServiceDescription";
import ServiceFooter from "../components/ServiceFooter";
import ServiceTipo from "../components/ServiceTipo";
import ServiceTitle from "../components/ServiceTitle";
import DpiHeader from "../../dpi/components/DpiHeader";


const ServiceDpi = () => {
  return (
    <>
      <DpiHeader />
      <ServiceTitle />
      <section id="departments" class="departments">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <ServiceTipo />
            <ServiceDescription />
          </div>
        </div>
      </section>
      <ServiceFooter />
    </>
  );
};

export default ServiceDpi;
