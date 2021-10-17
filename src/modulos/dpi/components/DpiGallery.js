import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import GLightbox from "glightbox";
SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

const DpiGallery = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Galería</h2>
          <p>
            Magnam dolores commod cisquam cupiditate. Et nemo qui impedit
            suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem
            hic quas.
          </p>
        </div>
        <Swiper
          spaceBetween={8}
          centeredSlides={true}
          initialSlide={1}
          pagination={{
            clickable: true,
          }}
          navigation
           
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1,
            },
            375: {
              width: 375,
              slidesPerView: 1,
            },
            425: {
              width: 425,
              slidesPerView: 1,
            },
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024: {
              width: 1024,
              slidesPerView: 4,
            },
          }}
        >
          
          <SwiperSlide><a className="gallery-lightbox" href="img/gallery01.jpg"><img src="img/gallery01.jpg" className="img-fluid" alt="" /> </a></SwiperSlide>
          <SwiperSlide><a className="gallery-lightbox" href="img/gallery02.jpg"><img src="img/gallery02.jpg" className="img-fluid" alt="" /> </a></SwiperSlide>
          <SwiperSlide><a className="gallery-lightbox" href="img/gallery03.jpg"><img src="img/gallery03.jpg" className="img-fluid" alt="" /> </a></SwiperSlide>
          <SwiperSlide><a className="gallery-lightbox" href="img/gallery02.jpg"><img src="img/gallery02.jpg" className="img-fluid" alt="" /> </a></SwiperSlide>
          <SwiperSlide><a className="gallery-lightbox" href="img/gallery01.jpg"><img src="img/gallery01.jpg" className="img-fluid" alt="" /> </a></SwiperSlide>
          <SwiperSlide><a className="gallery-lightbox" href="img/gallery03.jpg"><img src="img/gallery03.jpg" className="img-fluid" alt="" /> </a></SwiperSlide>
          <SwiperSlide><a className="gallery-lightbox" href="img/gallery01.jpg"><img src="img/gallery01.jpg" className="img-fluid" alt="" /> </a></SwiperSlide>
          <SwiperSlide><a className="gallery-lightbox" href="img/gallery02.jpg"><img src="img/gallery02.jpg" className="img-fluid" alt="" /> </a></SwiperSlide>
          <SwiperSlide><a className="gallery-lightbox" href="img/gallery03.jpg"><img src="img/gallery03.jpg" className="img-fluid" alt="" /> </a></SwiperSlide>
          <SwiperSlide><a className="gallery-lightbox" href="img/gallery02.jpg"><img src="img/gallery02.jpg" className="img-fluid" alt="" /> </a></SwiperSlide>
          <SwiperSlide><a className="gallery-lightbox" href="img/gallery01.jpg"><img src="img/gallery01.jpg" className="img-fluid" alt="" /> </a></SwiperSlide>
          <SwiperSlide><a className="gallery-lightbox" href="img/gallery03.jpg"><img src="img/gallery03.jpg" className="img-fluid" alt="" /> </a></SwiperSlide>
 
          <div ref={navigationPrevRef} />
          <div ref={navigationNextRef} />
        </Swiper>
      </div>
    </section>
  );
};

export default DpiGallery;
