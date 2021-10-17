import React from 'react'

const AboutMisionVision = () => {
    return (
        <section
          id="featured-services"
          className="featured-services"
          style={{ paddingBottom: "60px" }}
        >
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-md-6 col-lg-6 d-flex align-items-stretch mb-2 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="fas fa-notes-medical"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Nuestra Misión</a>
                  </h4>
                  <p className="description">
                    Brindar una atención especializada en la toma, lectura y
                    diagnóstico por imágenes, mostrando siempre la calidad
                    profesional y la vocación de servicio al Paciente, buscando
                    siempre una detección temprana de enfermedades,
                    contribuyendo de esta manera en una inclusión de salud para
                    todos de manera integral.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 d-flex align-items-stretch mb-2 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <i className="fas fa-notes-medical"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Nuestra Visión</a>
                  </h4>
                  <p className="description">
                    Ser uno de los centros especializados en la lectura de
                    imágenes, reconocidos por su calidad de servicio y atención,
                    contando siempre con equipos modernos y tecnología al
                    servicio de la salud de todos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default AboutMisionVision
