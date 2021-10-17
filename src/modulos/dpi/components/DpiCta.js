import React from 'react'
import { NavLink } from 'react-router-dom'

const DpiCta = () => {
    return (
        <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">
          <div className="text-center">
            <h3>Lorem, ipsum dolor?</h3>
            <p className="mb-3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <NavLink to={"#"}className="btn btn-reservar">
              Reservar una Cita
            </NavLink>
          </div>
        </div>
      </section>
    )
}

export default DpiCta
