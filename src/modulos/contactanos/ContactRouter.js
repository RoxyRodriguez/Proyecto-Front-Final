import React from 'react'
import ContactFooter from './components/ContactFooter'
import ContactForm from './components/ContactForm'
import DpiHeader from "../dpi/components/DpiHeader";
import ContactInformation from './components/ContactInformation'
import ContactTitle from './components/ContactTitle'

const ContactRouter = () => {
    return (
      <>
      <DpiHeader />
      <ContactTitle />
        <section id="contact" class="contact">         
        <div class="container">         
          <div class="section-title"  style={{ fontSize: "27px" }}>
             <p>Siempre disponibles para atender tu consulta</p>
          </div>    
        </div> 
        <div class="container">
          <div class="row mt-5">
              <ContactInformation />
              <ContactForm />
          
    
          </div>
    
        </div>
        {/* <div class="container mt-4">
          <iframe style={{ border: "0px", width: "100%", height: "350px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.9752187287874!2d-78.59407561574693!3d-9.072794704402586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab813f74ccf2f5%3A0xb693188abe0d14b!2sDIAGNOSTICO%20POR%20IMAGENES%20PAZ!5e0!3m2!1ses-419!2spe!4v1631754418960!5m2!1ses-419!2spe" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div> */}
      </section>
      <ContactFooter />
      </>
    )
}

export default ContactRouter
