import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OurDoctorFooter from "./components/OurDoctorFooter";
import OurDoctorTitle from "./components/OurDoctorTitle";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import DpiHeader from "../dpi/components/DpiHeader";


const OurDoctorRouter = () => {
    return (
        <>
        <DpiHeader />
        <OurDoctorTitle />
          <main id="main">             
            <section id="doctor" className="about ">
                <div className="container" data-aos="fade-up">
                <div className="row align-items-center">
                    <div className="col-lg-6" data-aos="fade-right">
                    <div className=" border border-1 rounded text-center">
                        <img src="./img/doctoraCV.jpg" className="img-fluid mt-4 " alt="image" />
                        <h3 className="doctor-name mt-3 mb-3 ">Dra. Patty Azaña </h3>
                        <p className="doctor-grade">Médico Cirujano CMP: 55637 </p> 
                        <p className="doctor-grade">Especialista en Radiología RNE: 32607</p>
                        <ul className="d-flex social p-4 justify-content-center align-items-center ">
                        <li> <NavLink to={"#"}> <FontAwesomeIcon className="i" icon={faWhatsapp} /></NavLink></li>                                  
                        <li><NavLink to={"#"}> <FontAwesomeIcon className="i" icon={faLinkedinIn} /></NavLink></li>
                        <li><NavLink to={"#"}> <FontAwesomeIcon className="i" icon={faInstagram} /></NavLink></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <div className="doctor-details-desc">
                        <h2 className="display-5 doctor-desc" >Acerca de Mí</h2>
                        <p className="text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p className="text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>         
                    </div>              
                    </div>
                </div>  
                </div>
            </section>
            
            <section id="certificados" className="featured-services"  style={{ paddingBottom: "20px", marginTop: "-60px" }}>
                <div className="container" data-aos="fade-up">  
                <div className="row">
                    <div className="col-md-6 col-lg-6 d-flex align-items-stretch mb-5 ">
                    <div className="skill-desc " data-aos="fade-right">
                        <span className="sub-title">Mis Certificados</span>
                        <h2 className="sub-title-hability">Cursos </h2>
                    <ul className="hability">
                        <li><span className="me-4 mb-2"><FontAwesomeIcon className="i me-1" icon={faBriefcaseMedical} size="lg"  /> 2019 (08-09 Julio) Curso de Actualización Médico Quirúrgico desarrollado en el Hospital II Essalud Chimbote – Ponente.</span></li>
                        <li><span className="me-4 mb-2"><FontAwesomeIcon className="i me-1" icon={faBriefcaseMedical} size="lg"  /> 2018 (24 Febrero) Curso teórico “Tópicos en Radiología “realizado por el día del tecnólogo Medico –Chimbote Perú – Ponente.</span></li>
                        <li><span className="me-4 mb-2"><FontAwesomeIcon className="i me-1" icon={faBriefcaseMedical} size="lg"  />2016 (08 Noviembre) Primera jornada científica por el día internacional de la Radiología – Organizador.</span></li>
                        <li><span className="me-4 mb-2"><FontAwesomeIcon className="i me-1" icon={faBriefcaseMedical} size="lg"  /> 2018 (23 marzo) Taller Hand son doppler venoso de miembros inferiores Paracas Ica –Asistente.</span></li>
                        <li><span className="me-4 mb-2"><FontAwesomeIcon className="i me-1" icon={faBriefcaseMedical} size="lg"  /> 2018 (22 Marzo) Pre curso taller de Ecografía de Mama Intervencionista Paracas –Ica –Perú- Asistente.</span></li>                                
                        <li><span className="me-4 mb-2"><FontAwesomeIcon className="i me-1" icon={faBriefcaseMedical} size="lg"  /> 2018 (23-24 Marzo) I Congreso Latinoamericano de Ecografía Clínica, Paracas – Ica – Asistente.</span></li>                                
                        <li><span className="me-4 mb-2"><FontAwesomeIcon className="i me-1" icon={faBriefcaseMedical} size="lg"  /> 2018 (30 Junio y 01 de julio) Curso Diagnóstico Integral de la Mama por imagenología Médica Lima Perú –Asistente.</span></li>                                
                                                        
                    </ul>
                    </div> 
                    </div>
        
                    <div className="col-md-6 col-lg-6 d-flex align-items-stretch mb-5 ">
                    <div className="education-desc"data-aos="fade-left">
                        <span className="sub-title">Mi Educación</span>
                        <h2 className="sub-title-hability">Mis Estudios Universitarios</h2>
                        <ul className="hability">
                        <li><span className="me-4 mb-2"><FontAwesomeIcon className="i me-1" icon={faBriefcaseMedical} size="lg" /> Diploma en Ecografía Gineco Obstétrica, Abdominal, Partes Blandas, Musculo –esquelético, Doppler color y pediatría.</span></li>
                        <li><span className="me-4 mb-2"><FontAwesomeIcon className="i me-1" icon={faBriefcaseMedical} size="lg"  /> Diploma en Bioética y prevención de la mala praxis de la salud.</span></li>
                        <li><span className="me-4 mb-2"><FontAwesomeIcon className="i me-1" icon={faBriefcaseMedical} size="lg" />Estudios de Residentado en la UPAO Trujillo en el Hospital Víctor Lazarte Echegaray- con reconocimiento por la labor efectuada.</span></li>
                        <li><span className="me-4 mb-2"><FontAwesomeIcon className="i me-1" icon={faBriefcaseMedical} size="lg" />Estadía de perfeccionamiento en la Universidad Católica de Chile- departamento de Radiología y diagnóstico por imágenes noviembre del 2016.</span></li>
                        <li><span className="me-4 mb-2"><FontAwesomeIcon className="i me-1" icon={faBriefcaseMedical} size="lg" /> Estadía de perfeccionamiento en la Universidad Católica de Chile- departamento de Radiología y diagnóstico por imágenes noviembre del 2016.</span></li>
                        <li><span className="me-4 mb-2"><FontAwesomeIcon className="i me-1" icon={faBriefcaseMedical} size="lg"  /> Médico Radiólogo del Hospital nivel III Essalud Chimbote.</span></li>
        
                        </ul>
                    </div>
                    </div>
                </div>
        
                </div>
            </section>
        
        
            </main>
         <OurDoctorFooter />
        </>
    )
}

export default OurDoctorRouter
