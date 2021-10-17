import React from 'react'

const AboutImg = () => {
    return (
        <section id="about" className="about ">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <img src="/img/conocenos.jpg" className="img-fluid" alt="" />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 content"
              data-aos="fade-left"
            >
              <h3>Diagnóstico por Imágenes PAZ</h3>
              <p className="fst-italic mb-4">
                "Entendemos la Imagen que Refleja tu Salud"
              </p>
              <p>
                DPI PAZ nace de la necesidad de brindar un servicio
                especializado en la toma, lectura y diagnóstico por imágenes
                en el norte de Perú, somos una empresa que tiene como
                motivación la voluntad de servir y el compromiso de que
                nuestros pacientes reciban un servicio de calidad, para
                nosotros el paciente es el centro de la actividad radiológica,
                y asegurar que el proceso de diagnóstico (o radioterapéutico)
                este a acorde a la necesidad y dar un diagnóstico acertado; en
                DPIPAZ entendemos la imagen que refleja tu salud.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default AboutImg
