import React from 'react'

const ContactForm = () => {
    return (
        <>
           <div class="col-lg-6">
              <form action="" method="post" role="form" class="php-email-form">
                <div class="row">
                  <div class="col form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Su Nombre" required />
                  </div>
                  <div class="col form-group ">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Su Correo electrónico" required />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" required />
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Su mensaje ha sido enviado, Muchas Gracias!</div>
                </div>
                <div class="text-center"><button type="submit">Enviar Mensaje</button></div>
              </form>
            </div>   
        </>
    )
}

export default ContactForm
