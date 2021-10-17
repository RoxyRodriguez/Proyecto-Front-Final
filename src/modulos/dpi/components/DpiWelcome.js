import React from 'react'


const DpiWelcome = () => {
    return (
        
        <section id="about" className="about" >
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Bienvenidos</h2>
            </div>
            <div className="row">
              <div className="col-lg-6" data-aos="fade-right">
                <img src="/img/welcome.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" >
                <p className="fst-italic text-center mb-4">
                  <strong>"Entendemos la Imagen que Refleja tu Salud"</strong>
                </p>
                <p className="welcome-text mb-4">
                  Nuestro Centro mantiene siempre el compromiso de una atención
                  personalizada con el paciente, con el objetivo de asegurar que
                  el proceso de diagnóstico o estudio sea lo mas acertado
                  posible. Contamos siempre con Equipos modernos y médicos de la
                  más alta calidad profesional que garantizan un estudio
                  especializado.
                </p>
                <p className="text-end">
                  Dra. Patty Zulema Azaña Chauca - Especialista en Radiología
                </p>
              </div>
            </div>
          </div>
        </section>
    )
}

export default DpiWelcome
