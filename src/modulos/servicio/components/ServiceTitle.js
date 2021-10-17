import React from 'react'

const ServiceTitle = () => {
    return (
        <>
       <div className="title-page">
        <div className="p-4 p-md-5 mb-4 text-white ">
          <div className="container ">
            <h1 className="display-4 title ">Unidad de Ecografías</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb ">
                <li className="breadcrumb-item text-white">
                  <a href="#">Inicio</a>
                </li>
                <li className="breadcrumb-item text-white">
                  <a href="#">Unidad de Ecografías</a>
                </li>
                <li className="breadcrumb-item text-white active"aria-current="page" >
                  Ecografía Doppler
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
        </>
    )
}

export default ServiceTitle
