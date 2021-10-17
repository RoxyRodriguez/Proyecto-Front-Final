import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';
import { faFacebookF, faInstagram, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
const ContactFooter = () => {
    return (
        <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <img src="/img/logo-dpipaz.png" className="img-fluid" alt="logo-footer"/>
                  <p>"Entendemos la Imagen que Refleja tu Salud</p>
                  <br />
                  <p>Jr. Ladislao Espinar 393- Chimbote <strong>Celular:</strong> 955 413 784 <br />
                    <strong>Correo:</strong> dpipazsac@gmail.com <br />
                  </p>
                  <div className="social-links mt-3">                  
                    <NavLink to={"https://web.facebook.com/DPIPAZ/"} target="_blank" >
                    <FontAwesomeIcon icon={faFacebookF} />
                    </NavLink>

                    <NavLink to={"https://www.instagram.com/dpipazchimbote/"} target="_blank">
                    <FontAwesomeIcon icon={faInstagram}/>
                    </NavLink>

                    <NavLink to={"https://www.instagram.com/dpipazchimbote/"} target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn}  />
                    </NavLink>

                    <NavLink to={"https://www.instagram.com/dpipazchimbote/"} target="_blank">
                    <FontAwesomeIcon icon={faTiktok}  />
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Enlaces Útiles</h4>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faStethoscope} className="me-2 icon-footer" />
                    <NavLink to={"#"}>Inicio</NavLink>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faStethoscope} className="me-2 icon-footer" />
                    <NavLink to={"#"}>Conócenos</NavLink>                    
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faStethoscope} className="me-2 icon-footer" />
                    <NavLink to={"#"}>Nuestro Médico</NavLink>                    
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faStethoscope} className="me-2 icon-footer" />
                    <NavLink to={"#"}>Términos del Servicio</NavLink> 
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faStethoscope} className="me-2 icon-footer" />
                    <NavLink to={"#"}>Politicas de Privacidad</NavLink>                    
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Servicios</h4>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faStethoscope} className="me-2 icon-footer" />
                    <NavLink to={"#"}>Unidad de Ecografías</NavLink>                     
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faStethoscope} className="me-2 icon-footer" />
                    <NavLink to={"#"}>Unidad Radiológica de Mama</NavLink>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faStethoscope} className="me-2 icon-footer" />
                    <NavLink to={"#"}>Unidad Radiográfica</NavLink>                   
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Suscríbete</h4>
                <p>Escribe tu Correo y recibirás todas nuestras promociones</p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright"> &copy; Copyright<strong><span>Dpi Paz</span></strong>. Todos los Derechos Reservados</div>
          <div className="text-center">
            {/* <small>
              Diseñado por: <NavLink to={"#"}>Smart Software Peru</NavLink>
            </small> */}
          </div>
        </div>
      </footer>
    )
}

export default ContactFooter
