import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactInformation = () => {
    return (
        <>
           <div class="col-lg-6">
              <div class="row">
                <div class="col-md-12">
                  <div class="info-box">
                    <FontAwesomeIcon className="i" icon={faMapMarkedAlt} />                  
                    <h3>Dirección</h3>
                    <p>Jr. Ladislao Espinar 393- Chimbote</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <FontAwesomeIcon className="i" icon={faEnvelope}  />
                    <h3>Correo Electrónico</h3>
                    <p>dpipazsac@gmail.com</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                   <FontAwesomeIcon className="i" icon={faWhatsapp} />                        
                    <h3>Whatsapp</h3>
                    <p>955 413 784 </p>                    
                  </div>
                </div>
              </div>
    
            </div>
     
        </>
    )
}

export default ContactInformation
