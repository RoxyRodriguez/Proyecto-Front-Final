import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';

const DpiWhyChoose = () => {
    return (
        <section id="features" className="features">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Por qué Elegirnos?</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 " data-aos="fade-right">
              <div className="icon-box mt-5 mt-lg-0">
                <FontAwesomeIcon icon={faHandHoldingMedical} className="icon-why" />                
                <h4>Somos Especialistas</h4>
                <p>
                  La Dra. Patty Z. Azaña Chauca cuenta con las 8 años de
                  experiencia, que garantiza un estudio especializado.
                </p>
              </div>
              <div className="icon-box mt-5">
                <FontAwesomeIcon icon={faHandHoldingMedical} className="icon-why" />   
                <h4>Contamos con Equipos modernos</h4>
                <p>
                  Contamos con equipos de Última generación para brindarles un
                  mejor diagnóstico.
                </p>
              </div>
              <div className="icon-box mt-5">
                <FontAwesomeIcon icon={faHandHoldingMedical} className="icon-why" />   
                <h4>Atención Personalizada</h4>
                <p>
                  Nuestro centro mantiene siempre el compromiso de una
                  atención personalizada con el paciente, con el objetivo de
                  que el proceso sea lo mas acertado posible.
                </p>
              </div>
              <div className="icon-box mt-5">
                 <FontAwesomeIcon icon={faHandHoldingMedical} className="icon-why" />   
                <h4>Beatae veritatis</h4>
                <p>
                  Expedita veritatis consequuntur nihil tempore laudantium
                  vitae denat pacta
                </p>
              </div>
            </div>
            <div
              className="image col-lg-6 "
              style={{ backgroundImage: "url(/img/why_choose_us.jpg)" }}
              data-aos="zoom-in"
            ></div>
          </div>
        </div>
      </section>
    )
}

export default DpiWhyChoose
