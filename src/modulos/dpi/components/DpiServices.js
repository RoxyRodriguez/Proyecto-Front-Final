import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


const DpiServices = () => {
    return (
        <section id="services" className="services services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Servicios</h2>
            <p>
              Contamos con tres servicios, además te brindamos servicios de
              alta calidad, con equipos de última tecnología y especialistas
              continuamente capacitados.
            </p>
          </div>

          <div className="row d flex justify-content-between ">
            <div className="col-lg-3 col-md-4 icon-box p-3" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon "><FontAwesomeIcon icon={faUserMd} className="icon-services" /></div>
              <h4 className="title"><NavLink to={"#"} >Unidad de Ecografías</NavLink></h4>
              <p className="description">
                La Ecografía es un método de diagnóstco por imágenes que usa
                ondas sonoras de alta frecuencia para producir imágenes de las
                estructuras dentro del cuerpo.
              </p>
               <NavLink to={"#"} className="btn btn-reservar" > Leer Más...</NavLink>
            </div>

            <div className="col-lg-3 col-md-4 icon-box p-3 " data-aos="zoom-in" data-aos-delay="200">
              <div className="icon"><FontAwesomeIcon icon={faUserMd} className="icon-services" /></div>
              <h4 className="title"><NavLink to={"#"} >Unidad Radiológica de Mama</NavLink></h4>
              <p className="description">
                La mamografía es un tipo especifico de toma de imágenes delos
                senos que utiliza rayos X de baja dosis para detectar en forma
                temprana el cáncer.
              </p>
               <NavLink to={"#"} className="btn btn-reservar" > Leer Más...</NavLink>
            </div>

            <div className="col-lg-3 col-md-4 icon-box p-3" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon"><FontAwesomeIcon icon={faUserMd} className="icon-services" /></div>
              <h4 className="title"><NavLink to={"#"} >Unidad Radiográfica</NavLink></h4>
              <p className="description">
                Una radiografía es una prueba rápida e indolora que genera
                imágenes de las estructuras internas del cuerpo, en especial
                de los huesos, pulmones y otras estructuras.
              </p>
               <NavLink to={"#"} className="btn btn-reservar" > Leer Más...</NavLink>
            </div>
          </div>
        </div>
      </section>
    )
}

export default DpiServices
