import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp, faFacebookF, faTiktok, faLinkedinIn, faInstagram
  
} from "@fortawesome/free-brands-svg-icons";

import { 
  faMapMarkerAlt, faChevronDown, faChevronRight, faTimes, faUser 
 
} from "@fortawesome/free-solid-svg-icons";
import MoleTipoServicio from "./molecules/MoleTipoServicio";

const DpiHeader = () => {
  return (
    <header className="menu-style-7 position-relative ">
      <div className="navbar-container navbar-sidebar-7 sticky ">
        <div className="navbar-top-wrapper d-none d-lg-block d-md-block">
          <div className=" container-lg">
            <div className="navbar-top d-flex justify-content-between">
              <div className="navbar-top-left">
                <ul className="navbar-top-link">
                  <li className="d-none d-lg-block">                   
                    <NavLink to={"#"}> <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="me-2" /> Jr. Ladislao
                      Espinar 393- Chimbote</NavLink>
                  </li>
                  <li>                  
                    <NavLink to={"#"}> <FontAwesomeIcon icon={faWhatsapp} size="lg" className="me-1" /> 935247865</NavLink>
                  </li>
                  <li> 
                  <a href="https://web.facebook.com/DPIPAZ/"  target="_blank"><FontAwesomeIcon icon={faFacebookF} size="lg" className="me-1" /> </a>                
                   
                  </li>
                  <li>
                    <a href ="https://www.instagram.com/dpipazchimbote/" target="_blank"> <FontAwesomeIcon icon={faInstagram} size="lg" className="me-1" /></a>  
                  </li>
                  <li>
                    <NavLink to={"#"} target="_blank"> <FontAwesomeIcon icon={faTiktok} size="lg" className="me-1" /></NavLink>  
                  </li>
                  <li>
                    <NavLink to={"#"} target="_blank"> <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="me-1" /></NavLink>  
                  </li>
                </ul>
              </div>

              <div className="navbar-top-right">
                <ul className="navbar-top-link">
                  <li>                   
                   <NavLink to="/login"><FontAwesomeIcon icon={faUser} size="lg" className="me-1" /> Ingresar / Registrarse</NavLink>                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-wrapper ">
          <div className="container-lg">
            <nav className=" main-navbar d-lg-flex justify-content-between align-items-center">
              <div className="desktop-logo d-lg-block">               
                <NavLink to={"/dpi"}>
                  <img className="img-fluid logo-adaptable" src="/img/logo-dpipaz.png" alt="LogoDpiPaz"/>
                </NavLink >                
              </div>

              <div className="navbar-menu-toggle d-lg-block">
                <button id="toggle-menu-6" className="menu-toggle">
                  <span className="toggle-icon"></span>
                  <span className="toggle-icon"></span>
                  <span className="toggle-icon"></span>
                </button>
              </div>

              <div className="navbar-menu">
                <ul className="main-menu">

                  <div className="text-end">                    
                    <button id="menu-close" className="d-block d-lg-none icon-btn primary-icon-border primary-btn-border ms-auto">
                      <FontAwesomeIcon icon={faTimes}/>
                    </button>
                  </div>

                  <li>                    
                    <NavLink to={"/dpi"}>Inicio</NavLink >
                  </li>
                  <li>
                    <NavLink to={"/about"}>Conócenos</NavLink >                   
                  </li>
                  <li>
                    <NavLink to={"/ourDoctor"}>Nuestro Médico</NavLink > 
                  </li>
                  <li className="menu-item-has-children">
                    <NavLink to = {"/servicios/servicios"}                      
                      className="collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#menuVertical7-5"
                      aria-controls="menuVertical7-5"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      Servicios <FontAwesomeIcon icon={faChevronDown}/>
                    </NavLink>

                    <ul className="sub-menu collapse" id="menuVertical7-5">
                      <MoleTipoServicio />          
                    </ul>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>Contáctanos</NavLink>
                  </li>
                </ul>
              </div>
              <NavLink to ={"/cita"} className="btn btn-reservar me-2 reservar"> Reservar Cita </NavLink>
            </nav>
          </div>
        </div>
      </div>
      <div className="overlay-7"></div>
    </header>
  );
};

export default DpiHeader;
