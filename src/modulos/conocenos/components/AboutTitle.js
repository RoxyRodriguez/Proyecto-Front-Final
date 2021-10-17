import React from 'react'

const AboutTitle = () => {
    return (
        <div className="title-page">
        <div className="p-4 p-md-5 mb-4 text-white ">
          <div className="container ">
            <h1 className="display-4 title ">Conócenos</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb ">
                <li className="breadcrumb-item text-white">
                  <a href="#">Inicio</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Conócenos
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    )
}

export default AboutTitle
