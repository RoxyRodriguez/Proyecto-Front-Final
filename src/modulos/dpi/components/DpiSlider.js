import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-bootstrap'

const DpiSlider = () => {
    return (
        <section id="hero">
        <div id="heroCarousel" data-bs-interval="2000" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" ></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" ></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" ></button>
          </div>
          <div className="carousel-inner" role="listbox">

            <div className="carousel-item active" style={{ backgroundImage: "url(/img/slider1.jpg)" }} >
              <div className="container">
                <h2 className="animate__animated animate__fadeInUp"> Bienvenidos a Dpi Paz </h2>
                <p className="animate__animated animate__fadeInLeft">"Entendemos la Imagen que Refleja tu Salud"</p>
                <a href="/about" className="btn-get-started "> Leer Más...</a>
              </div>
            </div>

            <div className="carousel-item" style={{ backgroundImage: "url(/img/slider2.jpg)" }} >
              <div className="container">
                <h2 className="animate__animated animate__fadeInUp animate__delay-2s"> Lorem Ipsum Dolor </h2>
                <p className="animate__animated animate__fadeInLeft">Ut velit est quam dolor accusamus repellendus deleniti vel. </p>
                <a href="#" className="btn-get-started "> Leer Más...</a>
              </div>
            </div>

            <div className="carousel-item" style={{ backgroundImage: "url(/img/slider3.jpg)" }} >
              <div className="container">
                <h2 className="animate__animated animate__fadeInUp animate__delay-2s"> Sequi ea utuaerat </h2>
                <p className="animate__animated animate__fadeInLeft"> Ut velit est quam dolor repellendus deleniti vel.</p>
                <a href="#" className="btn-get-started"> Leer Más... </a>
              </div>
            </div>

          </div>
          <a
            className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev" >
           <FontAwesomeIcon className="carousel-control-prev-icon " icon={faChevronLeft} />
          </a>
          <a
            className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next" >
            <FontAwesomeIcon className="carousel-control-next-icon" icon={faChevronRight} />
          </a>
        </div>
      </section>
    )
}

export default DpiSlider
